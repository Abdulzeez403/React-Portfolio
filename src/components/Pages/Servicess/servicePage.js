import  {  Carousel} from "react-bootstrap"


const ServicePage = () => {
 return ( 
<>
<div classNam="">
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
margin: "auto"}}
    src="./photos/img1.jpg"
    alt="First slide"
  />
    <br /><br /> <br /> <br />  <br /> 
  <Carousel.Caption className="mt-7">
    <h5>Fullstack Blog site (CRUD)</h5>
    <div className= " col-md-8 col-lg-8  m-auto">
<button className = "btn-primary btn-sm">Demo</button>
<button className = "btn-warning btn-sm ">View on GitHub</button>
</div>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
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
<button className = "btn-warning  btn-sm ">View on GitHub</button>
</div>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</>

 )
}
 
export default ServicePage;