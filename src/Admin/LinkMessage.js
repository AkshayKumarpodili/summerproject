
import React,{useState} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import NewsFeedService from '../operations/NewsFeedOperations';

function LinkMessage() {

    //const {register, handleSubmit, formState: {errors},} = useForm();

    const [quest1, setQuest1] = useState("");
    const [msg, setMsg] = useState("");
    const [link, setLink] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try {
            const newsObj = {quest1,msg,link};
    console.log("newsObj = ",newsObj);

    await NewsFeedService.addUser(newsObj)
      .then(response => {              
        console.log("response = ",response.id);
      })
      .catch(err => {console.log(err.message)});

    

        } catch (err) {
            alert(err.message);
            setError(err.message)
        }


       
        setQuest1("");
        setMsg("");
        setLink("");
        setError("");
    }

  return (
    <div>
            {error&&<Alert variant="danger">{error}</Alert>}
            <Form className='mt-3' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Enter QUESTION" required value={quest1} onChange={(e) => setQuest1(e.target.value)} />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Control type="text" placeholder="Enter Message" as="textarea" rows={3} required value={msg} onChange={(e) => setMsg(e.target.value)}  />
                      
                    </Form.Group>  

                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Control type="text" placeholder="Enter Link"  required value={link} onChange={(e) => setLink(e.target.value)}  />
                        
                    </Form.Group> 
                    <div className="d-grid gap-2 w-75 m-auto"> <Button variant="primary" type="Submit">Add</Button> </div>

           </Form>
    </div>
  )
}

export default LinkMessage