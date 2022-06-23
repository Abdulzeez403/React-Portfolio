
import {Link} from "react-scroll";
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
        <Link to="Home" 
          activeClass="active"
              spy={true} 
              smooth={true} 
              offset={50}
             duration={500}
        className="text-white h5  text-decoration-none list-unstyle mx-2">Home</Link>
        <Link 
         activeClass="active"
         to="Portfolio" 
             spy={true} 
             smooth={true} 
             offset={50}
            duration={500}
        className="text-white h5  text-decoration-none list-unstyle  mx-2">Portfolio</Link>
        <Link 
         activeClass="active"
         to="Contact"
        spy={true} 
        smooth={true} 
        offset={50}
       duration={500}
         className="text-white h5 text-decoration-none list-unstyled  mx-2">Contact</Link>
        <Link  activeClass="active"
                to="About" 
               spy={true} 
               smooth={true} 
               offset={50}
              duration={500}
          className="text-white h5  text-decoration-none list-unstyle  mx-2">About</Link>
        <Link to="Stack"
         activeClass="active"
        spy={true} 
        smooth={true} 
        offset={50}
       duration={500}
        className="text-white h5  text-decoration-none list-unstyle  mx-2">Stack</Link>
      </Nav>
   
    
        <Button
          activeClass="active"
          to="Contact"
         spy={true} 
         smooth={true} 
         offset={50}
        duration={500}
         className="bg-danger h4 ">Hire me</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
 
export default NavbarPage;