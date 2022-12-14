import React,{useState} from 'react';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import {toast} from 'react-toastify';




function useQuery() {
    const location = useLocation();
    return new URLSearchParams(location.search);
  }

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate  = useNavigate();

    const notify = () => {
        toast("Set");
    }
    

    const {resetPassword} = useUserAuth();
    const query = useQuery();
    console.log("query = ",query);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await resetPassword(query.get('oobCode'), password)
        .then(res => {
          toast.success("Reset your Password",  {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

            console.log("res = ",res);
          //  navigate('/');
        })

        .catch(err=> console.log("err = ",err),
        toast.error("Wrong in Reset apssword",  {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          }),
        );
        
       
    
    }

  return (
    <>
       <div className="p-4 box">
        <h2 className="mb-3">Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
            {/* <Form.Control type="password" placeholder="Password"  ref={psdRef}/> */}
        </Form.Group>
      
        <Link to='/'><div className="d-grid gap-2"> <Button variant="primary" type="Submit" >Submit</Button> </div> </Link>
        </Form>
        <hr />
       </div> 
    </>
  )
}

export default ResetPassword;