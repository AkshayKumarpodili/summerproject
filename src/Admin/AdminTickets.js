import React,{useState, useEffect} from 'react'
import TicketDataService from '../HomeComponents/TicketAllOperations';
import {Button} from 'react-bootstrap'
//import {BsArrowLeft} from "react-icons/bs";
import './Admin.css'
//import { Navigate } from 'react-router-dom';

function AdminTickets() {
  // const handleSubmit = () => {
    
  //   console.log('button clicked');
   
  // };

  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await TicketDataService.getAllUsers();
    console.log(data.docs);
    setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  

  const deleteHandler = async (id) => {
    await TicketDataService.deleteUser(id);
    getUsers();
  };


  return (
    
    <div>
      <div className='text-center'>
       
         {/* <Button variant="primary edit" onClick={handleSubmit}><BsArrowLeft/></Button>  */}
        <h4 className="text-dark font bg-success rounded p-2 mt-2 m-auto w-75">Want to solve a query? </h4>
        <p className='font'>Click below</p>
        <div className='d-flex justify-content-around'>
          {/* <button className="btn btn-danger " data-bs-toggle="modal" data-bs-target="#m4">Raise Query</button> */}
          <Button variant="dark edit  " onClick={getUsers}>Refresh List</Button> </div>
      </div>
       


        
              {
                  tickets.map((val) =>(
                      <div key={val.id} className=' shadow rounded p-2 text-center te'>

                        <div><p  className='fw-bold w text-dark'> {val.title} </p></div>

                         <p className="role">{val.desc}</p>

                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>
                            <p className='text-dark'>PostBy: </p>
                            <p className='text-muted ms-1'>{val.name}</p>
                          </div>

                          <div>
                           
                            <Button variant="danger" className="delete" onClick={(e) => deleteHandler(val.id)}>Delete</Button>
                          </div>

                        </div>
                      </div>
                  ))
                  
              } 
        



       


       {/* <div>
          <TicketModalSample/>
      </div> */}
    </div>
  )
}

export default AdminTickets