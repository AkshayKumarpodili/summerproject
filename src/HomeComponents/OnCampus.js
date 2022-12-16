import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CssFiles/OnCamp.css';
import {useState,useEffect} from 'react';
import OnCampusDataService  from '../Admin/OncampusAllOpretions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


function OnCampus() {

  const [searchTerm,setSearchTerm] = useState("");
  const navigate = useNavigate();


  const[oncampusdata, setBooks] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await OnCampusDataService.getAllUsers();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  
 




const handleToggle = async(e) => {
  try {
    navigate('/companies');
  } catch (error) {
    console.log(error);
  }
  
} 


  return (
    <div>      
        <section>
          <div className='container'>
              <h2 className='text-center bg-success rounded text-white p-2 mt-2 font'>On Campus</h2>  
              <div className='d-flex justify-content-around'>
                    
                    <div class="input-group">
                      <div class="form-outline">
                        <input id="search-focus" type="search" placeholder="Search here..." class="form-control" onChange={(event) => {setSearchTerm(event.target.value);}} />
                        {/* <label class="form-label" for="form1">Search</label> */}
                      </div>
                    </div>
                    <p><button onClick={handleToggle} className='rounded p-2 bg-primary text-white'>OffCampus</button></p>
              </div>
              
              <Button variant="dark edit" onClick={getUsers}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh Page</Button> 

              <div className='cards row'>
              {
                  oncampusdata.filter((val) => {
                    if(searchTerm === ""){
                      return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  }).map((val) =>(
                    <div class="col-sm-6 col-md-4 mt-2">
                      <div key={val.id} className='card shadow h-100 zoom21'>
                      <div class="card-body">
                        <h3 className='ofont1 text-center'>{val.title}</h3>
                        <p className='ofont1'>CGPA : {val.cgpa}</p>
                       

                        <p className='text-bolder'>Role : {val.role}</p> 
                          <p className='text-bolder'>Skills : {val.skills}</p> 
                          <p className='text-bolder'>Responsibilites : {val.responsibilites}</p> 
                       
                       
                      </div>
                      </div>
                      </div>
                  ))
              } 

              </div>


              
              
          </div>
 
        </section>
      
       
      
    </div>
  )    
  
}

export default OnCampus;