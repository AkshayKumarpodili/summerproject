import React from 'react';
import {useNavigate } from 'react-router-dom';
import ModalSample from '../HomeComponents/Modal';
import AdminNewsFeedModal from './AdminNewsFeedModal';
import AdminPlacementModal from './AdminPlacementModal';


function AdminActionPage() {

  const navigate=useNavigate();

  const handleLogout = () => {
    navigate('/');
  }
  return (
    
    <div className='q'>
      
        <li className='list-group-item rounded'>
          <h2>Admin Action Page</h2>
          <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end' onClick={handleLogout}>Logout</button>
        </li>
      
      <div className="p-4 box">
        <div className="list-group">
            <li className="list-group-item rounded" id='bone'>Want to add Placement Opportunity?     
                 <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  data-bs-toggle="modal" data-bs-target="#m1" type='submit'>Click...</button> 
            </li> 
            <li className="list-group-item rounded" id='btwo'>Want to add NewsFeed?  
                <button className='btn bg-warning text-white pt-0 pb-0 ps-1 pe-1 float-end'  data-bs-toggle="modal" data-bs-target="#m2" type='submit'>Click...</button>
            </li>             
        </div>
      </div>

      <div>
          <AdminPlacementModal/>
      </div>

      <div>
        <AdminNewsFeedModal/>
      </div>

      
    </div>
  )
}

export default AdminActionPage