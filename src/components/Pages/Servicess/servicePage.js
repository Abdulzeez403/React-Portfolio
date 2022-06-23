import  {  Carousel} from "react-bootstrap"


const ServicePage = () => {
 return ( 
< >
<div className="" id="Portfolio">
  <h4 className="text-white text-center h3 ">Projects</h4>
  <p className="text-white text-opacity-50 text-center">What I have built!</p>
 </div>
<Carousel className="bg-black p-4 w-75 " style={{ height: "500px", margin: "auto"}}>
  <Carousel.Item  >
   <img
     className="d-block " style={{width: "500px", height: "350px", 
margin: "auto"}}
     src="./photos/img1.jpg"
     alt="First slide"
   />
     <br /><br /> <br /> <br />  <br /> 
   <Carousel.Caption className="mt-7">
     <h5>Fullstack Blog site (CRUD)</h5>
     <div className= "col-md-8 col-lg-8 m-auto">
 <button className = "btn-primary btn-sm">Demo</button>
 <button className = "btn-warning btn-sm ">View on GitHub</button>
</div>
</Carousel.Caption>

  </Carousel.Item>



  <Carousel.Item>
  <img
    className="d-block " style={{width: "500px", height: "350px", 
margin: "auto", objectFit: "cover"}}
    src="./photos/project2.png"
    alt="First slide"
  />
    <br /><br /> <br /> <br />  <br /> 
  <Carousel.Caption className="mt-7">
    <h5>Landing-Page (HTML/CSS/JS)</h5>
    <div className= " col-md-8 col-lg-8  m-auto">
<button className = "btn-primary btn-sm"> 
<a href="softteamer.netlify.app" className= "text-white text-decoration-none">Demo </a></button>
<button className = "btn-warning btn-sm ">
<a href="https://github.com/Abdulzeez403/softeamer" className= "text-white text-decoration-none">View on GitHub</a>
</button>
</div>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block " style={{width: "500px", height: "350px", 
margin: "auto"}}
    src="./photos/project1.png"
    alt="First slide"
  />
    <br /><br /> <br /> <br />  <br /> 
  <Carousel.Caption className="mt-7">
    <h5>Facebook Clone (HTML/CSS/JS)</h5>
    <div className= "col-md-8 col-lg-8 m-auto">
<button className = "btn-primary btn-sm">Demo</button>
<button className = "btn-warning btn-sm ">
<a href="https://github.com/Abdulzeez403"
 className= "text-white text-decoration-none">View on GitHub</a></button>
</div>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</>

 )
}
 
export default ServicePage;