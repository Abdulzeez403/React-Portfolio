import { RiListSettingsFill} from "react-icons/ri";
import { BsFillPeopleFill} from "react-icons/bs";
import { SiCodeproject} from "react-icons/si";
import { FaDownload} from "react-icons/fa";




const AboutPage = () => {
 return ( 
<div className="container p-5" id="About">
<div classNam="">
  <h4 className="text-white text-center h3 ">About Me</h4>
  <p className="text-white text-opacity-50 text-center">Get to know me!</p>
 </div>

 <div className="col-sm-8 col-md-6 col-lg-3  mt-5  m-auto  ">
 <img src="./photos/img1.jpg" alt="Port"
 className="" style={{width:"300px", borderRadius: "10px", transform: "rotate(30de)"}}/>
</div>

<div className="row p-5 mt-4 " >
 <div className="col-sm-10 col-md-8 col-lg-3 bg-primary bg-opacity-100 p-3 m-auto my-3" style={{borderRadius: "10px"}}>
  <div className="text-center">
  <RiListSettingsFill backgroudColor="white" size={50}/>
  <h2 className=" text-center text-white h2"> Experience</h2>
 <p className="text-white h6"> +3 years in Programming</p>

  </div>
 </div>

 <div className="  col-sm-8 col-md-8 col-lg-3 bg-primary bg-0pacity-400 p-3  m-auto my-3" style={{borderRadius: "10px"}}>
 <div className="text-center">
 <BsFillPeopleFill backgroudColor="white" size={50}/>
 <h2 className=" text-center text-white h2"> Client</h2>
 <p className="text-white h6"> -100 clients</p>

 </div>
</div>

<div className="col-sm-10 col-md-8 col-lg-3 bg-primary p-3  m-auto my-3" style={{borderRadius: "10px"}}>
 <div className="text-center">
 <SiCodeproject backgroudColor="white" size={50}/>
 <h2 className=" text-center text-white h2"> Project</h2>
 <p className="text-white h6"> +20 Personal Projects </p>

 </div>
</div>

</div>
<div className=" bg-black h5 p-3 w-75 m-auto rounded-9">
 <p className='text-white'>Ability to develop and design software under tight deadlines. Experience in Web development, customer needs anaylsis and programm debugging. great intellectural curiosity and ability to adapt to new IT development.</p>
 <button  className="bg-danger btn-lg text-white mt-2" download > <span className="h5"> Download CV </span>  <FaDownload color="white" size={22}/> </button>

</div>
</div>
  );
}
 
export default AboutPage;