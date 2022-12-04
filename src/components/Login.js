import {Link, useNavigate} from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import {toast} from 'react-toastify';
import { db } from '../firebase';
import { doc,getDoc } from 'firebase/firestore';
import './Login.css';




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
    try {
         
        await logIn(email, password);

          var arr=email.split('@');
          var userId = arr[0];

          const docRef = doc(db, "rollno", userId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            var rl=docSnap.data().rollno;
            console.log("rool no = ",rl);
            localStorage.setItem("rollno",rl);
            localStorage.setItem("id",userId);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }

         navigate("/home");
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

         
    } catch (err) {
    setError(err.message);
    toast.error("Wrong Email or passowrd!", {
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
};






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
      <h2 className="mb-3">Firebase Auth Login</h2>
      <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>

      
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <div className="d-grid gap-2"> <Button variant="primary" type="Submit" > Log In </Button>   </div>
         
        </Form>

        <hr />
        <div> <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn}/> </div>  

        <hr />
      
      </div>

      <div className="p-4 box mt-3 text-center"> 
          Don't have an account? <Link to="/signup">Sign up</Link>
          <hr/>
          <p> <Link to='/forgotpassword'> ForgotPassword? </Link> </p>
          <hr />
          <p> <Link to='/updateemail'> UpdateEmail? </Link> </p>
      </div>
    </div>
  );
};

export default Login;