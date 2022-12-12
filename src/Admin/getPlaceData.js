// import React, { useEffect, useState } from "react";
// import PlaceDataService  from "./PlaceAllOperations";

// const GetPlaceData = () => {

//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     const data = await PlaceDataService.getAllUsers();
//     console.log(data.docs);
//     setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };


//   const [searchTerm,setSearchTerm] = useState("");

//   return (
//     <div>
//         <div className="searchInput">
//                 <input id="searchInput" type="text"  placeholder="Search here..." onChange={(event) => {setSearchTerm(event.target.value);}} />
//         </div>

//         <div className='cards'>
//               {
//                   books.filter((val) => {
//                     if(searchTerm === ""){
//                       return val;
//                     }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                       return val;
//                     }
//                   }).map((val) =>(
//                       <div key={val.id} className='card crd'>
//                         <h3>{val.title}</h3>
//                         <p className="role">{val.role}</p>
//                         <button className='butn' type='submit'>{val.lli}</button>
//                       </div>
//                   ))
//               } 

//        </div>
//     </div>
//   );
// };

// export default GetPlaceData;