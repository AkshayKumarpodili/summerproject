import React,{useState} from 'react';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { updateEmail } from 'firebase/auth';



const UpdateEmail = () => {
    const [email, setEmail] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const {user} = useUserAuth();


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try {
            await updateEmail(auth.currentUser,email);
            toast.success("Email Updated" , {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
            navigate('/login');    

        } catch (err) {
        setError(err.message);
        console.log(err.message);
        toast.error("Email Not Updated",  {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })

        }
    
       
    };


  return (
    <>
       <div className="p-4 box">
        <h2 className="mb-3">Update Email</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="New Email address"  onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
      
        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Submit </Button>    </div>
        </Form>
        <hr />
        <div className="text-center"> <Link to="/login">Log In</Link> </div>
       </div> 
    </>
  )
}

export default UpdateEmail;