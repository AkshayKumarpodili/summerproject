import React, { useEffect, useState } from 'react';
import RollNoService from './RollNo';
import UserDataService from '../AllOpeartions';
import {Table,Button} from 'react-bootstrap'
import { db } from '../firebase';
import {doc,getDoc} from 'firebase/firestore';

function ModalSample() {

  

  const [books, setBooks] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    var data=[];
    
    const userId=localStorage.getItem("id");
    const rl=localStorage.getItem("rollno");
    const docRef = doc(db, "rollno", userId);
    const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            data.push({...books,rl});
           
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          console.log(data);
          setBooks(data);
  };


  return ( 
    <div className="modal fade" id="m" data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
              <div className="modal-header">
              <Button variant="dark edit" onClick={getUsers}> Refresh List </Button>
                <button class="btn-close btn-danger" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
              <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>RollNo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((doc, index) => {
                        return (
                          <tr key={index}> 
                            <td>{doc.rollno}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>                          
              </div>
            <div className="modal-footer">
                <button class="btn btn-danger " data-bs-dismiss="modal">cancel</button>
            </div>
          </div>
        </div>
    </div>


  );
}

export default ModalSample;