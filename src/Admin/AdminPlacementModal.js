import React from 'react'
import {Form,Button,Alert} from 'react-bootstrap';
import {useState} from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

function AdminPlacementModal() {

    const [error, setError] = useState("");
    const [role, setRole] = useState("");
    const [lli,setlli] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");

        try {
            const UserObj={title,role,lli};
            var userId=title;
            localStorage.setItem("offcampus",userId);
            await setDoc(doc(db, "companies", userId), UserObj);
            console.log("Obj = ",UserObj);
         
            


        } catch (err) {
            console.log("err in pl = ",err.message);
            setError(err.message);
        }

        setTitle("");
        setRole("");
        setlli("");
    }


  return (
    <div className="modal fade" id="m1" data-bs-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
          <div className="modal-header">
           <h2>Placement</h2> 
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
                <Form.Control type="text" placeholder="Enter Link" value={lli} onChange={(e) => setlli(e.target.value)} />
            </Form.Group>    

            <div className="d-grid gap-2"> <Button variant="primary" type="Submit">Add</Button> </div>

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

export default AdminPlacementModal