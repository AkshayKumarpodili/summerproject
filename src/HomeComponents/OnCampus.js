import React from 'react'
import { useNavigate } from 'react-router-dom';
import  ReactSwitch from 'react-switch';
import {useState} from 'react';
import {createContext} from 'react';


export const PageContext = createContext(null);

function OnCampus() {

    const [page,setPage] = useState("off");
  const navigate = useNavigate();

  const togglePage = () => {
    setPage((curr) => (curr === "on" ?  navigate('/oncampus') : navigate('/companies')  ));
  }

  return (
    <div id={page}>
        <PageContext.Provider value={{page, togglePage}}>  
       <h2>On Campus</h2>
       <div className='switch'> 
            <label>{page === "on" ?  "OffCampus" : "OnCampus"}</label>
               <ReactSwitch  onChange={togglePage} checked={page === "off"}/> 
          </div> 
      
        
       
       
      </PageContext.Provider>
    </div>
  )
}

export default OnCampus;