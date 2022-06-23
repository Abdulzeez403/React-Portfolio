import {Form, Button, FloatingLabel} from "react-bootstrap";
import {RiSendPlaneFill} from "react-icons/ri"
const ContactPage = () => {
 return ( 
  <div className="container" >
   <br />
   <Form className=" col-lg-6 m-lg-auto">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className="p-2" type="name" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control  className="p-2" type="Email" placeholder="Email" />
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control  className="p-2" type="text" placeholder="Project" />
  </Form.Group>


  <FloatingLabel controlId="floatingTextarea2" label="Message">
    <Form.Control
      as="textarea"
      placeholder="Messaage"
      style={{ height: '100px' }} 
    />
  </FloatingLabel>
  <br />
  <Button variant="primary" className='btn-md w-50 h4' type="submit">
   <span className="h5 me-2">SEND</span>
   < RiSendPlaneFill size={30}/>
  </Button>
</Form>
  </div>
  );
}
 
export default ContactPage;