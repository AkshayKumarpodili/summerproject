import {useNavigate} from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { useState } from 'react';
import {toast} from 'react-toastify';
//import '../components/Login.css';


const AdminLogin = () => {
    
  
  //this is start(15-34)
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");
    const [password, setPassword] = useState("");
   const navigate = useNavigate();

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
         
            if(email==="admin@vnrvjiet.in" && password==="AdminLogin123")
            {
              navigate("/AdminActionPage");
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

            else{
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


  return (
    <div className='q'>
        <h2 className="mb-3">Admin Login</h2>
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
        

       
      
      </div>

     
    </div>
  );
};

export default AdminLogin;