import React from 'react';
import loginImg from '../../images/login.svg';
//import Marquee from 'react-fast-marquee';

function AboutUs() {
  return (
    <div>
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.jnujaipur.ac.in/images/auditorium-pic1.png" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.sirmvit.edu/wp-content/uploads/2019/01/Placement-Overview-header.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://innovativezoneindia.com/wp-content/uploads/2019/11/Top-10-Companies-in-World_IZM.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    <div className='container text-center'>
      {/* <Marquee text="swetha">Test</Marquee> */}
        <div>
            <h1 className=' text-primary'>Purpose of Cell</h1>
            <p className='p-3 rounded shadow d'>
            Placement Cell interacts with the reputed organizations all over the country for arranging campus interviews for 
            the final year students. We make efforts to organize technical seminars, workshops and corporate
            expectation sessions. Industry personnel are invited periodically to enrich the knowledge of 
            our student community with the latest technological innovations and industry practices. We 
            produce graduates who are well equipped to handle the working norms of the industry and 
            commerce in the public and private sectors and helping every student to define his/her career interest through individual counseling through experts.
            </p>
        </div>
       

      <h1 className=' text-primary'>Training</h1>
      <img className="w-25 shadow rounded" 
            src="https://img.freepik.com/free-vector/happy-company-coaches-employees-meeting-conference-room-speaker-presenting-diagram-flipchart-performing-with-lecture-vector-illustration-business-training-presentation-concept_74855-13098.jpg?w=740&t=st=1665514683~exp=1665515283~hmac=dbe597b361a1fd400fc570c51a328615689cf923b7503608f17164ca81667418" />
        <p className='p-3 rounded shadow a'>
        Training and development program are also very helpful to improve the self-efficiency of individuals. Self-efficiency is the belief in individual’s abilities to do a specific task. Studies show that self-efficiency is directly related to job performance. Self-efficiency can be improved by guided experiences, mentoring and role modeling. Employees can also get training for self-management, where they can systematically enhance their self-efficiency.

In human resource management, training and development is the field concerned with the activity of an organizations directed towards the improvement of an individual or a group. It is also known as human resource development.

Training and development contains three main activities: Training, education and development

Training: Training is the process of upgrading skills, capabilities and knowledge of an employee according the needs job not only for present but also for future. Training is very important for organizational development and success. Training can be given to staff by various methods like classrooms, workshops, meetings, conferences, demonstrations.
        </p>
    </div>
  </div>

  )
}

export default AboutUs