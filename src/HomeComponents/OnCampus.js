import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './CssFiles/OnCamp.css';
import  data from './OnCampusData.json';


function OnCampus() {

  const [searchTerm,setSearchTerm] = useState("");
  const navigate = useNavigate();

 

const handleSubmit = async(e) => {
  try {
    navigate('/applypage');
   
  } catch (error) {
    console.log(error);
  }
  
} 


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
          <div className='container cont'>
              <h2 className='had'>On Campus</h2>  <h3 className='had1'><button onClick={handleToggle} className='butn'>Go To Off Campus Page</button></h3>

              <div className="searchInput">
                <input id="searchInput" type="text"  placeholder="Search here..." onChange={(event) => {setSearchTerm(event.target.value);}} />
              </div>

              <div className='cards'>
              {
                  data.filter((val) => {
                    if(searchTerm === ""){
                      return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  }).map((val) =>(
                      <div key={val.id} className='card crd'>
                        <h3>{val.title}</h3>
                        <p>{val.text}</p>
                        <p className="role">{val.Role}</p>
                        <button className='butn' onClick={handleSubmit}>Apply</button>
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