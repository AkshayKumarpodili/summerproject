import React from 'react';
import { addTrainingArray } from '../../slices/TrainingSlice';
import { useDispatch } from 'react-redux';
import UserDataService from '../../AllOpeartions';
import { useNavigate } from 'react-router-dom';
import { Button,Form} from 'react-bootstrap';

const Trainings = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      let trainings = []
      var t1 = document.getElementById("t1");  
      var t2 = document.getElementById("t2");
      var t3 = document.getElementById("t3");
      var t4 = document.getElementById("t4");
      var t5 = document.getElementById("t5");
      var t6 = document.getElementById("t6");
      if(t1.checked)
        trainings.push(t1.value)
      if(t2.checked)
        trainings.push(t2.value)
      if(t3.checked)
        trainings.push(t3.value)
      if(t4.checked)
        trainings.push(t4.value)
      if(t5.checked)
        trainings.push(t5.value)
      if(t6.checked)
        trainings.push(t6.value)      
      
      console.log("trainings = ",trainings);  
       
       //call Action Creator function addTrainingArray
       let TrainingActionObj = addTrainingArray(trainings);
       console.log("TrainingActionObj = ",TrainingActionObj.payload);
       //dispatch TrainingActionObj to store
       dispatch(TrainingActionObj);
 
       await UserDataService.addUser(TrainingActionObj)
       .then(response => {              
         console.log("response = ",response.id);
       })
       .catch(err => {console.log(err.message)});

           
        navigate("/placements");

          
    } catch (err) {
    
    console.log("err = ",err.message);
   
    }
 };

  return (
    <>
       <div className="p-4 box">
        <h2 className="mb-3">Trainings Done</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Check  type="checkbox" id="t1" label="Smart Interviews" value="Smart Interviews"/>
            <Form.Check  type="checkbox" id="t2" label="AWS" value="AWS"/>
            <Form.Check  type="checkbox" id="t3" label="Cyber Security" value="Cyber Security" />
            <Form.Check  type="checkbox" id="t4" label="Full Stack" value="Full Stack" />
            <Form.Check  type="checkbox" id="t5" label="Data Science" value="Data Science" />
            <Form.Check  type="checkbox" id="t6" label="Data Structures and Algorithms" value="Data Structures and Algorithms" />
        </Form.Group>

        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Submit </Button> </div>
        </Form>
        </div>
       
    </>
    
  )

}


export default Trainings;