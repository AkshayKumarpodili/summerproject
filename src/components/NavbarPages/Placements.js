import React from 'react';
import { Button,Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPlacementArray } from '../../slices/PlacementSlice'; 
import UserDataService from '../../AllOpeartions';
import './Courses.css';

const Placements = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
        
      let placed = []
      var p1 = document.getElementById("p1");  
      var p2 = document.getElementById("p2");
      var p3 = document.getElementById("p3");
      var p4 = document.getElementById("p4");
      var p5 = document.getElementById("p5");
      var p6 = document.getElementById("p6");
      if(p1.checked)
        placed.push(p1.value)
      if(p2.checked)
        placed.push(p2.value)
      if(p3.checked)
        placed.push(p3.value)
      if(p4.checked)
        placed.push(p4.value)
      if(p5.checked)
        placed.push(p5.value)
      if(p6.checked)
        placed.push(p6.value)      
      
      console.log("placed = ",placed);


       //call Action Creator function addPlacementArray
       let PlacementActionObj = addPlacementArray(placed);
       console.log("PlacementActionObj = ",PlacementActionObj.payload);
       //dispatch PlacementActionObj to store
       dispatch(PlacementActionObj);
 
       await UserDataService.addUser(PlacementActionObj)
       .then(response => {              
         console.log("response = ",response.id);
       })
       .catch(err => {console.log(err.message)});

           
        navigate("/login");
          
    } catch (err) {
    console.log("err = ",err.message);
   
    }
 };

  return (
    <div className='q'>
       <div className="p-4 box">
        <h2 className="mb-3">Companies You Got Placed</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Check  type="checkbox" id="p1" label="Amazon" value="Amazon"/>
            <Form.Check  type="checkbox" id="p2" label="Google" value="Google"/>
            <Form.Check  type="checkbox" id="p3" label="Oracle" value="Oracle" />
            <Form.Check  type="checkbox" id="p4" label="Microsoft" value="Microsoft" />
            <Form.Check  type="checkbox" id="p5" label="Cognizant" value="Cognizant" />
            <Form.Check  type="checkbox" id="p6" label="Deloitee" value="Deloitee" />
        </Form.Group>

        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Submit </Button> </div>
        </Form>
        </div>
       
    </div>
    
  )

}


export default Placements;