import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import PlaceDataService from '../Admin/PlaceAllOperations';





function Companies() {
 
  const [searchTerm,setSearchTerm] = useState("");
  const navigate = useNavigate();


  const [books, setBooks] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await PlaceDataService.getAllUsers();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


const handleToggle = async(e) => {
  try {
    navigate('/oncampus');
  } catch (error) {
    console.log(error);
  }
  
} 


  return (
    <div>      
        <section>
          <div className='container'>
              <h2 className='text-center p-2 mt-2 text-white bg-success rounded font'>Off Campus</h2>
              

            <div className='d-flex justify-content-between mt-3'>
              
              <div class="input-group">
                <div class="form-outline">
                  <input id="search-focus" type="search" placeholder="Search here..." class="form-control" onChange={(event) => {setSearchTerm(event.target.value);}} />
                  {/* <label class="form-label" for="form1">Search</label> */}
                </div>
                
              </div>
              
              <p><button onClick={handleToggle} className='rounded p-2 bg-primary text-white'>OnCampus</button></p>

            </div>

            

              <div className='cards row' >
              {
                  books.filter((val) => {
                    if(searchTerm === ""){
                      return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  }).map((val) =>(
                    <div class="col-sm-6 col-md-4 mt-2">
                      <div key={val.id} className='card shadow h-100 zoom21'>
                      <div class="card-body">
                        <h3 className='ofont1 text-center'>{val.title}</h3>
                        <div className="role ofont1 d-flex m-4">
                            <div className='text-bolder'>Role :  </div> 
                            <div> {val.role}</div>
                        </div>
                        <a href={val.lli} target="_blank" className='e float-end btn bg-warning'>More Info..</a>
                      </div>
                      </div>
                    </div>
                  ))
              } 
              </div>              
          </div>
        </section>
    </div>
  )
}

export default Companies;