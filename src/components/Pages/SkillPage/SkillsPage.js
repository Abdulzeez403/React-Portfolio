import { GrSettingsOption } from "react-icons/gr";
import { BsServer,  BsCodeSlash} from "react-icons/bs";



const SkillPage = () => {
 return ( 
  <div className="container mt-5 mb-5">
   <div classNam="">
   <h4 className="text-white text-center h3 ">Skills</h4>
   <p className="text-white text-opacity-50 text-center">Get to know my stack!</p>
  </div>

<div className="row bg-black bg-opacity-500 w-75 m-auto p-3 " style={{borderRadius: "10px"}} >
 <div className="col-sm-8 col-md-8 col-lg-4 m-auto p-5 mb-4  bg-warning text-center " style={{width: "300px", borderRadius:"10px"}}>
  <h4 className="m-auto">
<GrSettingsOption  color="white" size={40}  />
</h4>
<br/>
  <p className="text-white text-opacity-50 h5 text-center ">
   Active Listening, communicaion skill, Leadership, Time management, problem Solving, Critical thinking. Analysis Skill.
   </p>
 </div>



 <div className="col-sm-8 col-md-8 col-lg-4 m-auto p-5  mt-4  text-center bg-dark "  style={{width: "300px", borderRadius:"10px"}}>
  <h4 className="m-auto">
<BsCodeSlash color="white" size={40}  />
</h4>
<br/>
<br/>
  <p className="text-white text-opacity-50 h5 text-center">
HTML (HTML5) | CSS, (CSS5) |  JAVASCRIPT | REACT JS | SCSS | TAILWIND, BOOTSTRAP | MATERAIL UI | JQUERY | 


   </p>
 </div>

 <div className="col-sm-8 col-md-8 col-lg-4 m-auto p-5  mt-4 bg-primary text-center " style={{width: "300px", borderRadius:"10px"}}>
  <h4 className="m-auto">
<BsServer  color="white" size={40}  />
</h4>
<br/>
<br/>
  <p className="text-white text-opacity-50 h5 text-center">
   MONGODB, MYSQL, NOSQL, APACHE,  BASIC OF NODE JS |  PHP 
   </p>
 </div>
</div>



  </div>
  );
}
 
export default SkillPage;