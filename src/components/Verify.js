import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {auth} from '../firebase';
import {toast} from 'react-toastify';


function Verify() {

    const navigate=useNavigate();

    const handleClick = () => {
      
      if(auth.currentUser.emailVerified === true)
      {
         navigate('/courses');
      }

      else{
        toast.error("Email Not Verified",  {
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
        
    }

  return (
    <div className='w-75 mt-5 m-auto shadow rounded text-center'>
        <h3 className='font'>Check Your Mail for Verification.</h3>
        <Button variant="dark m-2" type='submit' onClick={handleClick}>Continue...</Button> 
    </div>
  )
}

export default Verify;