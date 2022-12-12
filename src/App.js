import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes,Route } from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';
import "./App.css";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import PhoneSignUp from './components/PhoneSignUp';
import ForgotPassword from './components/ForgotPassword';
import DefaultPage from './components/DefaultPage';
import { useState } from 'react';
import Courses from './components/NavbarPages/Courses';
import Trainings from './components/NavbarPages/Trainings';
import Placements from './components/NavbarPages/Placements';
import Internships from './components/NavbarPages/Internships';
import Companies from './HomeComponents/companies';
import OnCampus from './HomeComponents/OnCampus';
import Resources from './HomeComponents/Resources';
import TandPCordinators from './HomeComponents/T&PCordinators';
import Students from './HomeComponents/Students';
import NewsFeed from './HomeComponents/NewsFeed';
import Tickets from './HomeComponents/Tickets';
import AdminTickets from './Admin/AdminTickets';
import ModalSample from './HomeComponents/Modal';
import AdminActionPage from './Admin/AdminActionPage';
import AdminPlacementModal from './Admin/AdminPlacementModal';
import AdminNewsFeedModal from './Admin/AdminNewsFeedModal';
import NavbarData from './components/NavbarData';
import AboutUs from './components/NavbarPages/AboutUs';
import ContactUs from './components/NavbarPages/ContactUs';
import Verify from './components/Verify';

function App() {

const [userId,setUserId] = useState("");
const getUserIdHandler = (id) => {
  console.log("id = ",id);
  setUserId(id);
}


  return (
  <div>
    <NavbarData/>
    <div className='container-fluid'>
      
    <Row>
      <Col>
        <UserAuthContextProvider>       
          <Routes>
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/oncampus" element={<OnCampus />} />
            <Route path="/students" element={<Students />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/TandP" element={<TandPCordinators />} />
            <Route path="/tickets" element={<Tickets />} />
           
            <Route path="/aboutus" element={<AboutUs  getUserId={getUserIdHandler}/>} />
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path="/adminactionpage" element={<AdminActionPage />} />
            <Route path="/adminplacementmodal" element={<AdminPlacementModal />} />
            <Route path="/adminnewsmodal" element={<AdminNewsFeedModal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainings" element={<Trainings />} />
         
            <Route path="/admintickets" element={<AdminTickets />} />
            <Route path="/modalpage" element={<ModalSample />} />
          </Routes>
          <ToastContainer />
        </UserAuthContextProvider>  
      </Col>
    </Row>
  </div>  
 
  </div>  
)
}

export default App;