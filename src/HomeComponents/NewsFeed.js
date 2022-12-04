import React,{useState} from 'react';
import './CssFiles/News.css';
import ModalSample from './Modal';
import UserDataService from '../AllOpeartions';


export default function Newsfeed() { 


  const [vote1,setVote1] = useState(0);
  const [vote2,setVote2] = useState(0);
  const [vote3,setVote3] = useState(0);
  const [vote4,setVote4] = useState(0);


  const handleRollNo = async(e) => {
    e.preventDefault();
    try {

      const rl = localStorage.getItem("rollno");
      
     
    } catch (err) {
      console.log(err.message);
    }
  }

  const getRnoData = () => {
    console.log("first");
    const rl=localStorage.getItem("rollno");
  }
  

  
  
  return (
  <div className='container r'>
     <h2 className='text-center hd bg-success rounded text-white p-2 m-3'>T&P NewsFeed</h2> 
    
     <div className='shadow rounded m-2 p-3 '>
          
          <p className='text-secondary'>PostBy: admin@vnrvjiet.in</p>
         
          <p className='fw-bold we text-dark'> When is your company's exam Scheduled?  </p>

          <div className="list-group">

            <li className="list-group-item rounded" id='bone'>First sunday of June     [{vote1}]  <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end' type='submit' onClick={() => setVote1(vote1 + 1)}>Vote</button> </li> 
            <li class="list-group-item rounded" id='btwo'>Second sunday of June     [{vote2}] <button className='btn bg-warning text-white pt-0 pb-0 ps-1 pe-1 float-end' type='submit' onClick={() => setVote2(vote2 + 1)}>Vote</button></li>             
          </div>
            
     </div> 

     <div className='shadow mt-3 mb-2 ms-2 me-2 p-3 rounded '>
           <p className='text-secondary'>PostBy: admin@vnrvjiet.in</p>
         <p  className='fw-bold w text-dark'> How many have you registered for tomorrow's exam? </p>
           
         
            <div className="list-group">
              <li className="list-group-item rounded" id='bone'>First sunday of June     [{vote3}] <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end' type='submit' onClick={() => setVote3(vote3 + 1)}>Vote</button> </li> 
              <li class="list-group-item rounded" id='btwo'>Second sunday of June     [{vote4}] <button className='btn bg-warning text-white pt-0 pb-0 ps-1 pe-1 float-end' type='submit' onClick={() => setVote4(vote4 + 1)}>Vote</button></li>             
              </div>
     </div>

     <div className='shadow mt-3 mb-2 ms-2 me-2 p-3  rounded '>
           <p className='text-secondary'>PostBy: admin@vnrvjiet.in</p>
         <p  className='fw-bold w text-dark'> Great opportunity for Web Development !!!! </p>
         <div className='d-flex justify-content-between'>
         <a href="https://www.naukri.com/web-developer-jobs-in-hyderabad-secunderabad" className="link-primary">Click Here...</a>
         <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m" onClick={getRnoData}>Seen count</button>
         {/* <button className='btn bg-success text-white ' type='submit' onClick={handleRollNo}>Mark as Read</button> */}

        </div>
        
     </div>


     <div className='shadow mt-3 mb-2 ms-2 me-2 p-3  rounded '>
           <p className='text-secondary'>PostBy: admin@vnrvjiet.in</p>
         <p  className='fw-bold w text-dark'> Great opportunity for Web Development !!!! </p>
         <div className='d-flex justify-content-between'>
         <a href="https://www.naukri.com/web-developer-jobs-in-hyderabad-secunderabad" className="link-primary">Click Here...</a>
         <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m" type='submit' onClick={getRnoData}>Seen count</button>
         {/* <button className='btn bg-success text-white ' type='submit' onClick={handleRollNo}>Mark as Read</button> */}

        </div>
        
     </div>

    <div>
      <ModalSample />
    </div>
    



  </div>
  )
}
