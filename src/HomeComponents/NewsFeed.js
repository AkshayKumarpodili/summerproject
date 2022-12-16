import React,{useState,useEffect} from 'react';
import './CssFiles/News.css';
import NewsFeedService from '../operations/NewsFeedOperations';
import TextFeedService from '../operations/TextMessageOperations';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';


export default function Newsfeed() { 

  const [vote1,setVote1] = useState(0);
  const [vote2,setVote2] = useState(0);
  const [vote3,setVote3] = useState(0);
  const [vote4,setVote4] = useState(0);

  const [news, setNews] = useState([]);
    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
      const data = await NewsFeedService.getAllUsers();
      console.log(data.docs);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };



    const [text, setText] = useState([]);
    useEffect(() => {
      getText();
    }, []);
  
    const getText = async () => {
      const data = await TextFeedService.getAllUsers();
      console.log(data.docs);
      setText(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


  
  
  
  return (
  <div className='container r'>
     <h2 className='text-center hd bg-success rounded text-white p-2 m-3'>T&P NewsFeed</h2> 


     <div className='text-center'>
       
        <div className='d-flex justify-content-around'> 
          <Button variant="dark edit" onClick={getText}><FontAwesomeIcon icon={faArrowsRotate} /> Text Msg</Button> 
          <Button variant="dark edit" onClick={getUsers}><FontAwesomeIcon icon={faArrowsRotate} /> Link Msg</Button>  
        </div>
      </div>

    
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
         <p  className='fw-bold w text-dark text-center'> Great opportunity for Web Development !!!! </p>
         <div className='d-flex justify-content-between'>
         <a href="https://www.naukri.com/web-developer-jobs-in-hyderabad-secunderabad" className="link-primary">Click Here...</a>
        </div>
        
     </div>

    
              {
                  news.map((val) =>(
                      <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>
                           
                           <p className='text-secondary'>PostBy: admin@vnrvjiet.in </p>

                           <div> <p className='fw-bold w text-dark text-center'> {val.quest1} </p> </div>

                         <p className="role text-center">{val.msg}</p>
                     
                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>

                            <a href={val.link}>Click Here...</a>
                          </div>
                        </div>
                      </div>
                  ))
                  
              } 



              {
                  text.map((val) =>(
                      <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>
                           
                           <p className='text-dark'>PostBy: admin@vnrvjiet.in </p>

                           <div> <p className='fw-bold w text-dark text-center'> {val.ques} </p> </div>

                         <p className="role text-center">{val.mesg}</p>
                     
                      </div>
                  ))
                  
              } 


  </div>
  )
}


