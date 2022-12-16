import React,{useState, useEffect} from 'react'
import TicketModalSample from './TicketModal';
import  TicketDataService from './TicketAllOperations';
import {Button} from 'react-bootstrap'
import './CssFiles/Tickets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import image3 from '../images/icon.png';

function Tickets() {
  

  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await TicketDataService.getAllUsers();
    console.log(data.docs);
    setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  



  return (
    
    <div>
      <div className='text-center'>
        <h4 className="text-dark font bg-success rounded p-2 mt-2 m-auto w-75">Want to raise a query? </h4>
        <p className='font'>Click below</p>
        <div className='d-flex justify-content-between w-75 m-auto'>
          {/* <button className="btn btn-danger " data-bs-toggle="modal" data-bs-target="#m4">Raise Query</button> */}
          <div></div>
          <Button variant="dark edit" onClick={getUsers}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh Page</Button> 

        </div>
      </div>
       


      
              {
                  tickets.map((val) =>(
                      <div key={val.id} className=' shadow rounded p-2 text-center te'>
                        <div>
                         <p  className='fw-bold w text-dark'> {val.title} </p>
                    
                        </div>
                         <p className="role">{val.desc}</p>
                        {/* <div className='d-flex justify-content-between'></div> */}
                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>
                          <p className='text-dark'>PostBy: </p>
                          <p className='text-muted ms-1'>{val.name}</p></div>
                          
                        </div>
                      </div>
                  ))
                  
              } 
        


        <img  className="timg float-end p-2 m-3 bg-warning zoom21" data-bs-toggle="modal" data-bs-target="#m4" src={image3}  />
       


       <div>
          <TicketModalSample/>
      </div>
    </div>
  )
}

export default Tickets