import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes,Route } from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';
import "./App.css";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import PhoneSignUp from './components/PhoneSignUp';
import Footer from './components/footer/Footer';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import DefaultPage from './components/DefaultPage';
import {createContext} from 'react';
import { useState } from 'react';
import  ReactSwitch from 'react-switch';
import Courses from './components/NavbarPages/Courses';
import Trainings from './components/NavbarPages/Trainings';
import Placements from './components/NavbarPages/Placements';
import Internships from './components/NavbarPages/Internships';
//import UpdateEmail from './components/UpdateEmail';
import FirestoreData from './components/FirestoreData';
import Companies from './HomeComponents/companies';
import OnCampus from './HomeComponents/OnCampus';

export const ThemeContext = createContext(null); 

function App() {

const [theme,setTheme] = useState("dark");



const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ?  "dark" : "light"));
};



const [userId,setUserId] = useState("");
const getUserIdHandler = (id) => {
  console.log("id = ",id);
  setUserId(id);
}

  return (
  <div className='b' id={theme}>
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Navbar/>
    <div className='a'>
    <Row>
      <Col>
        <UserAuthContextProvider>
          <div className='switch'> 
            <label>{theme === "light" ? "Light Mode"  : "Dark Mode"}</label>
               <ReactSwitch  onChange={toggleTheme} checked={theme === "dark"}/> 
          </div>   
          
          <Routes>
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/firestoredata" element={<FirestoreData  getUserId={getUserIdHandler}/>} />
            {/* <Route path="/updatedata" element={<UpdateFile />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            {/* <Route path="/updateemail" element={<UpdateEmail />} /> */}
            <Route path="/" element={<DefaultPage />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup id={userId} setUserId={setUserId} />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/oncampus" element={<OnCampus />} />
          </Routes>
          <ToastContainer />
        </UserAuthContextProvider>  
      </Col>
    </Row>
  </div>  
      <Footer />
      </ThemeContext.Provider>    
  </div>  
)
}

export default App;