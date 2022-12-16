import React,{useState} from 'react';
import { toast } from 'react-toastify';
import { useUserAuth } from '../context/UserAuthContext';
import './Home.css';
import {useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import jspdf from 'jspdf';
import { db } from '../firebase';
import {doc,getDoc} from 'firebase/firestore';
import UserDataService from '../AllOpeartions';


const Home = () => {

  let {user,logOut} = useUserAuth();
  const navigate = useNavigate();
  const [cre,setcre]= useState("");
  const [cvalue,setcvalue] = useState([]);
  const [ivalue,setivalue] = useState([]);
  const [pvalue,setpvalue] = useState([]);
  const [tvalue,settvalue] = useState([]);
  
      const handleSubmit = () => {
     navigate('/companies');
  }

   const handleSubmitFeed = () => {
    navigate('/newsfeed');
 }

 const handleSubmitRes = () => {
  navigate('/resources');
}

const handleSubmitStu = () => {
  navigate('/students');
}

const handleSubmitTic = () => {
  navigate('/tickets');
}

const handleSubmitTandP = () => {
  navigate('/TandP');
}
 




const handleSubmitGenPDF = async(e) => {
  var resume=new jspdf('landscape','px','a5','false');
  const userid=localStorage.getItem("id");
  console.log("userid = ",userid);
  const docSnap =  await UserDataService.getUser(userid);
  console.log(docSnap.data());
  resume.text(145,20,"Resume Template");
  resume.text(120,45,docSnap.data().name);
  resume.text(125,65,docSnap.data().email);
  resume.text(130,85,docSnap.data().rollno);
  resume.text(135,105,docSnap.data().branch);
  //resume.text(140,125,docSnap.data().courses?.cone);
 

 

  resume.save("My Resume");
  e.preventDefault();
}

  const handleLogOut = async(e) => {
    e.preventDefault();
    try 
     {
        await logOut();
        localStorage.clear();
        toast.success("Logged Out Successfully!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
        
     }

     catch(err) 
     {
        console.log(err.message);
        toast.error("Not Logged Out!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
     }
  }

  const name=localStorage.getItem("name");
  const email=localStorage.getItem("email");
  const rl=localStorage.getItem("rollno");
  const userObj = JSON.parse(localStorage.getItem("userObj"));
  //console.log(userObj);



  return (
    <div className='container-fluid main'>
        <div className='shd shadow rounded-3 mt-4'>
            
                <FontAwesomeIcon icon={faUser} className='text-dark p-2' size='4x' />
                  <div className="details">
                    <p>{user.displayName} </p>
                    <p>{user.email}</p>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{rl}</p>
                    {/* <p>{userObj.courses?.cone}</p>
                    <p>{userObj.courses?.ctwo}</p>
                    <p>{userObj.courses?.cthree}</p>
                    <p>{userObj.courses?.cfour}</p>
                    <p>{userObj.courses?.cfive}</p>
                    <p>{userObj.courses?.six}</p> */}
                  </div>
        </div>
        
         
          <div class="list-group q">
            <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={handleSubmit}>Companies</button>
            </div>  
            <div className='rounded m-1 shadow-sm lis'> 
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={handleSubmitFeed}>NewsFeed</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
                <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitRes}>Resources</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'> 
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitTandP}>T&P Coordinators</button>
            </div>
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitStu}>Students</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitTic}>Tickets</button> 
            </div>
           

             <div className='rounded m-1 shadow-sm lis'>       
            <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitGenPDF}>Generate Resume</button>
            </div>


            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleLogOut}>logOut</button> 
            </div>
          </div>
          
       </div>
  );
};

export default Home;