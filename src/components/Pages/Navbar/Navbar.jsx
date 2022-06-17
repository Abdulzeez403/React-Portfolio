
import { Navbar, Nav,Container,Button } from "react-bootstrap";


const NavbarPage = () => {
 return ( 
  <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className=" text-white h2">
      Port<span className="text-primary text-opacity-75">Folio </span>  </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" className=" bg-primary bg-opacity-75 " />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0">
        <Nav.Link href="#action1" className="text-white h5">Home</Nav.Link>
        <Nav.Link href="#action2" className="text-white h5">Portfolio</Nav.Link>
        <Nav.Link href="#action2 " className="text-white h5">Contact</Nav.Link>
        <Nav.Link href="#action2" className="text-white h5">About</Nav.Link>
        <Nav.Link href="#action2" className="text-white h5">Service</Nav.Link>
      </Nav>
   
    
        <Button className="bg-blue h5 ">Hire me</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
 
export default NavbarPage;