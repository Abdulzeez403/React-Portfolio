import NavbarPage from "./components/Pages/Navbar/Navbar"
import HomePage from "./components/Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillPage from "./components/Pages/SkillPage/SkillsPage";
import AboutPage from "./components/Pages/About/About";
import ServicePage from "./components/Pages/Servicess/servicePage";
import FooterPage from "./components/Pages/Footer/Footer";
import SubfooterPage from "./components/Pages/Subfooter/subfooter";


const App = () => {
 return (
  <div className="container bg-dark">
   <NavbarPage />
   <HomePage/>
   <SkillPage/>
   <AboutPage/>
   <ServicePage/>
   <FooterPage/>
   <SubfooterPage/>

  </div>
   );
}
 
export default App;