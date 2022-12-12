import React,{useState} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import TextFeedService from '../operations/TextMessageOperations';

function TextMessage() {

    const [ques, setQues] = useState("");
    const [mesg, setMesg] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try 
        {
            const textObj = {ques,mesg};
            console.log("textObj = ",textObj);

                await TextFeedService.addUser(textObj)
                .then(response => {              
                    console.log("response = ",response.id);
                })
                .catch(err => {console.log(err.message)});

    

        } catch (err) {
            alert(err.message);
            setError(err.message)
        }


       
        setQues("");
        setMesg("");
        setError("");
    }

  return (
    <div>
    {error&&<Alert variant="danger">{error}</Alert>}
    <Form className='mt-3' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Enter Query" required value={ques} onChange={(e) => setQues(e.target.value)} />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Control type="text" placeholder="Enter Message" as="textarea" rows={3} required value={mesg} onChange={(e) => setMesg(e.target.value)}  />
              
            </Form.Group>  

            <div className="d-grid gap-2 w-75 m-auto"> <Button variant="primary" type="Submit">Add</Button> </div>

   </Form>
</div>
  )
}

export default TextMessage