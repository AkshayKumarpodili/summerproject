import {Link, useNavigate} from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import {toast} from 'react-toastify';
import { auth, db } from '../firebase';
import { doc,getDoc,setDoc } from 'firebase/firestore';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import NavbarData from './NavbarData';


const Login = () => {
    
  
  //this is start(15-34)
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  //this logIn in below line is accessible via useUserAuth() in UseAuthContext.js file
  const {logIn} = useUserAuth();
  const {googleSignIn} = useUserAuth();
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");

    if(email === "admin@vnrvjiet.in" && password === "AdminLogin123")
    {
            //await setDoc(doc(db, "admin", "admin"), Obj);
            navigate('/adminactionpage');
    }

    else
    {
      try {
         
        await logIn(email, password);
        //var ps=localStorage.getItem("signupPassword");
        if(auth.currentUser.emailVerified===true)
        {
            var arr=email.split('@');
            var userId = arr[0];

            const docRef = doc(db, "rollno", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              //console.log("Document data:", docSnap.data());
              var rl=docSnap.data().rollno;
          
              localStorage.setItem("rollno",rl);
              //localStorage.setItem("email",email);
              localStorage.setItem("id",userId);
            } else {
              
              console.log("No such document!");
            }
          
            navigate('/home');
            toast.success("Logged In Successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              }); 
        }

        else
        {
          toast.error("Email not Verified!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          }
        
        }

         
     catch(err) {
    setError(err.message);
    console.log("err = ",err.message);
    toast.error("Wrong Email or password!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
    } 
    
};

  const handleNumberSubmit = async(e) => {
    e.preventDefault();
    try {
      navigate('/phonesignup');
    } catch (error) {
      alert("Wrong");
    }
  }




  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try {
      await googleSignIn();
       navigate("/home");       
  } catch (err) {
  setError(err.message);
  }

};


  return (
    
    <div className='q'>

      <div className="p-4 rounded vc ">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} >

      
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <div className="d-grid gap-2  w-50 m-auto"> <Button variant="primary" type="Submit" >Login In <FontAwesomeIcon className='ms-2' icon={faRightToBracket} />  </Button>   </div>
         
        </Form>

        <hr />
        <div> <GoogleButton className=" qwe rounded  m-auto" type="dark" onClick={handleGoogleSignIn}/> </div>  

        
        <Button className="d-grid gap-2  mt-3 w-50 m-auto" onClick={handleNumberSubmit}> Phone SignIn </Button>
      
      </div>

      <div className="p-4 mt-3 text-center rounded vc "> 
          Don't have an account? <Link to="/signup">Sign up</Link>
          <hr/>
          <p> <Link to='/forgotpassword'> ForgotPassword? </Link> </p>
       
      </div>
    </div>


  );
};

export default Login;