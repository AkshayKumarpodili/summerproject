import React from 'react';
import { SiCloudera } from "react-icons/si";
import { BiItalic } from "react-icons/bi";
import { TfiBarChartAlt} from "react-icons/tfi";
import {MdEmojiPeople } from "react-icons/md";
import {IoIosLogIn} from "react-icons/io";
import {SiGnuprivacyguard} from "react-icons/si";
import {BsFillTelephoneFill} from "react-icons/bs";




export const  SidebarData = [
    {
        title: 'Courses',
        path: '/courses',
        icon: <SiCloudera />,
        cName: 'nav-text'
    },

    {
        title: 'Trainings',
        path: '/trainings',
        icon: <BiItalic/>,
        cName: 'nav-text'
    },

    {
        title: 'Internships',
        path: '/internships',
        icon: <TfiBarChartAlt/>,
        cName: 'nav-text'
    },

    {
        title: 'Placements',
        path: '/placements',
        icon: <MdEmojiPeople/>,
        cName: 'nav-text'
    },

    {
        title: 'Login',
        path: '/login',
        icon: <IoIosLogIn/>,
        cName: 'nav-text'
    },

    {
        title: 'Signup',
        path: '/signup',
        icon: <SiGnuprivacyguard/>,
        cName: 'nav-text'
    },

    {
        title: 'PhoneSignUp',
        path: '/phonesignup',
        icon: <BsFillTelephoneFill/>,
        cName: 'nav-text'
    },

    {
        title: 'FireStoreData',
        path: '/firestoredata',
        icon: <BsFillTelephoneFill/>,
        cName: 'nav-text'
    },

]
 


