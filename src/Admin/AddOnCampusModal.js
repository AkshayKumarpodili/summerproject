import React from 'react'
import {Form,Button,Alert, FormFloating, FormGroup, FormText} from 'react-bootstrap';
import {useState} from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

function AddOnCampusModal() {

    const [error, setError] = useState("");
    const [role, setRole] = useState("");
    const [title, setTitle] = useState("");
    const [skills,setSkills] = useState([]);
    const [cgpa,setCgpa] = useState("");
    const [responsibilites,setResponsibilities] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");

        try {
            const UserObj={title,role,responsibilites,skills,cgpa};
            var userId=title;
            await setDoc(doc(db, "oncampus", userId), UserObj);
            console.log("Obj = ",UserObj);
         
            


        } catch (err) {
            console.log("err in pl = ",err.message);
            setError(err.message);
        }

        setTitle("");
        setRole("");
        setCgpa("");
        setResponsibilities("");
        setSkills("");
    }


  return (
    <div className="modal fade" id="m3" data-bs-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
          <div className="modal-header">
           <h2>On Campus</h2> 
            <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
          </div>
          
          <div className="modal-body">
          {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Company Name" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Control type="text" placeholder="Enter Role" value={role} onChange={(e) => setRole(e.target.value)} />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control type="text" placeholder="Enter CGPA" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control type="text" placeholder="Enter Responsibilities" value={responsibilites} onChange={(e) => setResponsibilities(e.target.value)} />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control type="text" placeholder="Enter Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </Form.Group> 

            {/* <FormText>
            <div class=" mb-3">
              <textarea class="form-control" placeholder="Responsibilites" id="floatingTextarea"></textarea>
           
            </div>
            </FormText>

            <FormFloating>
            <div class="form-floating mb-4">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label class="form-label" for="floatingTextarea">Requirements</label>
            </div>
            </FormFloating> */}

            <div className="d-grid gap-2 w-75 m-auto"> <Button variant="primary" type="Submit">Add</Button> </div>

           </Form>                  
          </div>
        <div className="modal-footer">
            <button className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default AddOnCampusModal