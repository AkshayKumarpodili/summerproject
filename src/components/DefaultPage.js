import React from 'react';
import {useState} from 'react';
//import '../HomeComponents/CssFiles/Tpco.css';
import Login from './Login';
import AdminLogin from '../Admin/AdminLogin';


function DefaultPage() {

  const [toggleState, setToggleState] = useState(1);
 
 
  const toggleTab = (index) => {
    setToggleState(index);
  };

 
  return (
    <div className='q'>
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(1)}>
          AdminLogin
        </button>
        <button className={toggleState === 2 ? "tabs active-tabs shadow rounded" : "tabs"} onClick={() => toggleTab(2)}>
          UserLogin
        </button>
      </div>

      <div className={toggleState === 1 ? "content  active-content" : "content"}>
      <div className='row d-flex '>
           <AdminLogin />
        </div>
      </div>

      <div className={toggleState === 2 ? "content  active-content" : "content"}>
        <div className='row d-flex '>
           <Login />
        </div>
          
      </div>
    </div>
)}

export default DefaultPage;