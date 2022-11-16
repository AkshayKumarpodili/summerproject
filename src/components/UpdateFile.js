// import React from 'react'

// function UpdateFile() {

//     const editHandler = async () => {
      
//         try {
//           const docSnap = await UserDataService.getUser(id);
//           console.log("the record is :", docSnap.data());
//           setName(docSnap.data().name);
//           setDate(docSnap.data().Dt);
//           setNumber(docSnap.data().number);
//           setEmail(docSnap.data().email);
//           setPassword(docSnap.data().password);
//         } catch (err) {
//           setError(err.message);
//         }
//       };
  
//        useEffect(() => {
//         console.log("The id here is : ", id);
//         if (id !== undefined && id !== "") {
//           editHandler();
//         }
//       },[id]);
//   return (
//     <div>
        
//        <h2>Update Details</h2> 

//        <div className="p-4 box">
//         <h2 className="mb-3">Firebase Auth Signup</h2>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicName">
//             <Form.Control type="name" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicDOB">
//             <Form.Control type="date" placeholder="Enter DOB" value={Dt} onChange={(e) => setDate(e.target.value)} />
//         </Form.Group>

//            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
//               <PhoneInput  defaultCountry='IN' value={number} onChange={setNumber} placeholder = "Enter Phone Number"/>
//                 <div id='recaptcha-container'/>
//             </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Control type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
//         </Form.Group>


//         <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Sign up </Button> </div>
//         </Form>
//      </div>

//     </div>
//   )
// }

// export default UpdateFile;