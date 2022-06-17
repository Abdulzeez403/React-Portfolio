
const HomePage = () => {
 return ( 
  <div className=" container mh-5 ">
  <div  className="row d-inline-flex  justify-content-between p-3 ">

    <div className="col-sm-10 col-md-10 col-lg-6  mt-5 ">
    <h4 className='text-warning'>Hello I am</h4>
    <h3 className="h3 text-white">Abdulazeez  Sodiq</h3>
    <h3 className="h3 mt-3 text-white">I'm a FrontEnd Developer</h3>
    <p  className=" h6  mt-3 text-justify text-white" style={{ lineHeight:"23px"}}> Helping brands grow their business by building a scalable website with good content and helping them to get more traffic to their websites and improve the user-experience (UX) of  their websites through the feedback from theirs customers is my goal..</p>
    <br/>
    <div>
     <button  id="" className="btn btn-primary btn-lg w-100  " >Get in Touch</button>
     <br/>
     <br/>
     <button  id="" className="btn btn-outline-light btn-lg  w-100 text-white ">Explore my Github</button>
    </div>
    </div>
    <div className="col-md-4  mt-5  ">
     <img src="./photos/img1.jpg" alt="Port"
     className="rounded-2 w-100 " style={{ border:"5px solid white"}}/>
    </div>
   
  </div>
</div>
  );
}
 
export default HomePage;