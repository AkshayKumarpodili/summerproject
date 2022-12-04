import React from 'react';
import { Button,Form} from 'react-bootstrap';
import { addInternshipArray } from '../../slices/InternshipSlice';
import {useDispatch} from 'react-redux';
import UserDataService from '../../AllOpeartions';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Internships = () => {
  
    const dispatch = useDispatch();
    const  navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let interns = []
      var c1 = document.getElementById("c1");  
      var c2 = document.getElementById("c2");
      var c3 = document.getElementById("c3");
      var c4 = document.getElementById("c4");
      var c5 = document.getElementById("c5");
      var c6 = document.getElementById("c6");
      if(c1.checked)
        interns.push(c1.value)
      if(c2.checked)
        interns.push(c2.value)
      if(c3.checked)
        interns.push(c3.value)
      if(c4.checked)
        interns.push(c4.value)
      if(c5.checked)
        interns.push(c5.value)
      if(c6.checked)
        interns.push(c6.value)      
      
      console.log("interns = ",interns);

       //call Action Creator function addInternshipArray
       let InternshipActionObj = addInternshipArray(interns);
       console.log("InternshipActionObj = ",InternshipActionObj.payload);
       //dispatch InternshipActionObj to store
       dispatch(InternshipActionObj);
 
      
       await UserDataService.addUser(InternshipActionObj)
       .then(response => {              
         console.log("response = ",response.id);
       })
       .catch(err => {console.log(err.message)});

           
        navigate("/trainings");


    } catch (err) {
    console.log("err = ",err.message);
        
    }
 };

  return (
    <div className='q'>
       <div className="p-4 box">
        <h2 className="mb-3">Internships You Had Done</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" id="formBasicIntern">
            <Form.Check  type="checkbox" id="c1" label="Fosterate" value="Fosterate"/>
            <Form.Check  type="checkbox" id="c2" label="JPMC" value="JPMC"/>
            <Form.Check  type="checkbox" id="c3" label="Oracle" value="Oracle" />
            <Form.Check  type="checkbox" id="c4" label="Amazon" value="Amazon" />
            <Form.Check  type="checkbox" id="c5" label="Cognizant" value="Cognizant" />
            <Form.Check  type="checkbox" id="c6" label="Deloitee" value="Deloitee" />
        </Form.Group>
        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Submit </Button> </div>
        </Form>
        
        </div>
       
    </div>
    
  )

}


export default Internships;