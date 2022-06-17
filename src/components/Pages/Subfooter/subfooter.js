import { FiTwitter} from "react-icons/fi";
import{AiFillFacebook} from "react-icons/ai";
import{BsLinkedin, BsInstagram,BsWhatsapp, BsGithub} from "react-icons/bs";


const SubfooterPage = () => {
 return ( 
  <div className="m-5">
   <div classNam="">
  <h4 className="text-white text-center h4 ">Quick Link</h4>
  <p className="text-white text-opacity-50 text-center">Get to me on a click</p>
 </div>
 <div className=" row  w-75 m-auto " >
  <div className="col-sm-8 d-sm-block col-md-8 col-lg-6  col-xl-6 m-auto d-md-flex  d-lg-flex ">
   <h4 className="m-3 "> 
   <AiFillFacebook color="white" size={40}/>
   </h4>
   <h4 className="m-3">
   <FiTwitter color="white" size={40}/>
   </h4>
   <h4 className="m-3">
   <BsInstagram color="white" size={40}/>
   </h4>
   <h4 className="m-3">
   <BsWhatsapp color="white" size={40}/>
   </h4>
   <h4 className="m-3">
   <BsGithub color="white" size={40}/>
   </h4>
  </div>
 <ul className="col-sm-4  d-sm-block col-md-11 col-lg-8  col-xl-10 m-auto   d-md-flex  d-lg-flex " >

  <li className="text-white  list-unstyled m-3">Home</li>
  <li  className="text-white list-unstyled m-3">Portfolio</li>
  <li  className="text-white list-unstyled  m-3">Project</li>
  <li  className="text-white list-unstyled m-3">Service</li>
  <li  className="text-white list-unstyled m-3">Training</li>
  <li className="text-white list-unstyled  m-3">Contact</li>
 </ul>
</div>
<br />
<div className="m-3">
 <h4 className="text-primary h4 text-center "> Built by Myself</h4>
 </div>
 <br />
 </div>
  );
}
 
export default SubfooterPage;