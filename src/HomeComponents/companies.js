import React from 'react'
import { useNavigate } from 'react-router-dom';
import  ReactSwitch from 'react-switch';
import {useState} from 'react';
import {createContext} from 'react';


export const PgContext = createContext(null);

function Companies() {

  const [pg,setPg] = useState("on");
  const navigate = useNavigate();

  const togglePg = () => {
    setPg((curr) => (curr === "off" ?  navigate("/companies") : navigate('/oncampus') ));
};
  return (
    <div id={pg}>
       <PgContext.Provider value={{pg, togglePg}}>  
       <h2>companies</h2>
       <div className='switch'> 
            <label>{pg === "off" ?  "OnCampus" : "OffCampus"}</label>
               <ReactSwitch  onChange={togglePg} checked={pg === "on"}/> 
          </div> 
      
        
       
       
      </PgContext.Provider>
    </div>
  )
}

export default Companies;