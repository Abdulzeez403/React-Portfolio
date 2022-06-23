import {FiPhoneCall} from "react-icons/fi";
import {BiCurrentLocation} from "react-icons/bi";
import { MdOutlineMarkEmailRead} from "react-icons/md";
import ContactPage from "../contact/contactPage";

const FooterPage = () => {
 return ( 
  <div className="container p-5 m-auto"  id="Contact">
   <div classNam="">
  <h4 className="text-white text-center h2 ">Contact</h4>
  <p className="text-white text-opacity-50 text-center">lets talk a business</p>
 </div>

   <div className="row d-flex  justify-content-between">
    <div className=" col-sm-8 col-md-6  col-lg-4  mt-3">
    <div className="d-flex">
    <FiPhoneCall color="white" size={35}  />
    <div>
    <h4 className="text-white h4 mx-3 "> Call Me</h4>
  <p className="text-white h6 mx-3 ">  (+234)08064249490 </p>
    </div>
    </div>
   </div>

<div className=" col-sm-8 col-md-6 col-lg-4 mt-3">
    <div className="d-flex">
    <MdOutlineMarkEmailRead color="white" size={35}  />
    <div>
    <h4 className="text-white h4 mx-3 ">  Email:</h4>
 <p className="text-white h6 mx-3 "> abdulazeezsodiq@gmail.com</p>
    </div>
   </div>
    </div>

    <div className="col col-sm-8 col-md-8 col-lg-4 mt-3">
 <div className="d-flex">
 <BiCurrentLocation color="white" size={35}  />
 <div>
  <h4 className="text-white h4 mx-3 ">  Location</h4>
  <p className="text-white h6 mx-3 "> NO 60, Zone B Apalara Area Ilorin, Kwara State</p>
 </div>
 </div>
 </div>
<br />
  </div>
  <ContactPage/>
  </div>
  );
}
 
export default FooterPage;