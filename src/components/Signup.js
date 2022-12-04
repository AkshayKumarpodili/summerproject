import {toast} from 'react-toastify';
import { Button,Form , Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
//import { sendEmailVerification } from 'firebase/auth';
import React, {useState} from 'react';
import UserDataService from '../AllOpeartions';
import { db } from "../firebase";
import './Signup.css';
import { doc, setDoc } from "firebase/firestore"; 






const Signup = () => {

  
    
    
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [number,setNumber] = useState("");
    const [Dt, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [branch, setBranch] = useState("");
    const [rollno, setRollno] = useState("");
    
    const navigate = useNavigate();
    //this signUp in below line is accessible via useUserAuth() in UseAuthContext.js file
    const {signUp} = useUserAuth();

    
   

    const handleSubmit = async(e) => {
        e.preventDefault();
        setName(name);
        setError("");
        try 
        {
            await signUp(email, password);   
            updateProfile(auth.currentUser, {
              displayName: name,
            })
             
            
            //await sendEmailVerification(auth.currentUser)
            var arr=email.split('@');
            var userId = arr[0];
            const Obj={name,number,email,password,Dt,rollno,branch};
            console.log("Obj = ",Obj);

          await setDoc(doc(db, "rollno", userId), Obj);

           navigate("/courses");
           
           toast.success("Signed Up Successfully!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });               
         

        }
        
        catch (err) 
        {
          setError(err.message);
          console.log("err = ",err.message);
          toast.error("Something Went Wrong in Creating User!",  {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }

        setDate("");
        setName("");
        setBranch("");
        setRollno("");
        setNumber("");
        setEmail("");
        setPassword("");

     };


    


  return (
    <div className='q'>
      <div className="p-4 box shadow">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="name" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Control type="text" placeholder="Enter DOB" value={Dt} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBranch">
            <Form.Control type="text" placeholder="Enter Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRno">
            <Form.Control type="text" placeholder="Enter Rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} />
        </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <PhoneInput  defaultCountry='IN' value={number} onChange={setNumber} placeholder = "Enter Phone Number"/>
                <div id='recaptcha-container'/>
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        
        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> SignUp </Button> </div>
       
        </Form>
     </div>

     <div className="p-4 box mt-3 text-center"> Already have an account? <Link to="/login">Log In</Link> </div>
    </div>
  );
};


export default Signup;


