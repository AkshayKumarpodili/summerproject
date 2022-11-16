import React from 'react';
import { Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useUserAuth } from '../context/UserAuthContext';
import './Home.css';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MdEmojiPeople } from "react-icons/md";
import Companies from '../HomeComponents/companies';
import {VscAdd} from "react-icons/vsc";


const Home = () => {

  let {user,logOut} = useUserAuth();
  console.log("User = ",user);
  const navigate = useNavigate();
  
  const handleSubmit = () => {
     navigate('/companies');
  }
 


  const handleLogOut = async(e) => {
    e.preventDefault();
    try 
     {
        await logOut();
        toast.success("Logged Out Successfully!", {
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

     catch(err) 
     {
        console.log(err.message);
        toast.error("Not Logged Out!", {
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

  const Courses = useSelector(state=>state.Cre)
  console.log("courses in home.js = ",Courses);

  const Interns = useSelector(state=>state.Intern)
  console.log("interns in home.js = ",Interns);

  const Trainings = useSelector(state=>state.Training)
  console.log("trainings in home.js = ",Trainings);

  const Placements = useSelector(state=>state.Placement)
  console.log("placements in home.js = ",Placements);

  const Dob = useSelector(state=>state.signUp.Dt)
  const Number = useSelector(state=>state.signUp.number)
   const Rollno = useSelector(state=>state.signUp.rollno);
  const Branch = useSelector(state=>state.signUp.branch);
  console.log("signup in home.js = ",Dob,Number,Rollno,Branch);


  return (
    <div className='container-fluid'>
            
          <div className="row">
                <div className="col-4">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViCck0-66zUhbxsjl0iMB_LS6YiH31_PyWA&usqp=CAU' alt='Image' className='center'/>
                </div>
                    <div className="col-8">
                    <h3>{user.displayName} </h3>
                    <h4>{user.email}</h4>
                    <h2>{Dob}</h2>
                    <h2>{Number}</h2>
                    <h2>{Rollno}</h2>
                    <h4>{Branch}</h4> 
                  </div>
          </div>
        
          {/* <h2>Name : {user.displayName} </h2>
           <h2>Email : {user.email}</h2>
           <h2>DOB : {Dob}</h2>
           <h2>Mobile : {Number}</h2>
           <h2>RollNo : {Rollno}</h2>
           <h2>Branch : {Branch}</h2>  
           <h2>Courses Done :  </h2> {Courses.map((cres,index) => <h4 className='text-center' key={index}>{cres}</h4>)}
           <h2>Internships Done : {Interns.map((intern,index) => <h4 className='text-center' key={index}>{intern}</h4>)}</h2>
           <h2>Trainings Taken : {Trainings.map((training,index) => <h4 className='text-center' key={index}>{training}</h4>)}</h2>
           <h2>Placed In : {Placements.map((placement,index) => <h4 className='text-center' key={index}>{placement}</h4>)}</h2> */} 

          <div class="list-group">
            <button type="submit" class="list-group-item list-group-item-action" aria-current="true" onClick={handleSubmit} >
              Companies
            </button>
            <button type="button" class="list-group-item list-group-item-action">A second button item</button>
            <button type="button" class="list-group-item list-group-item-action">A third button item</button>
            <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
            <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
          </div> 

       <div className='one'> <Button variant='primary' onClick={handleLogOut}>Log Out</Button> </div>


           
       </div>

    
  );
};

export default Home;