import Navbar from "../components/Navbar";
import Figures from "../components/HomeFigure";
import Figures2 from "../components/HomeFigure2";
export default function index() {


 
  return (
    <div>
      <Navbar />
      <div>
   <Figures/>
     <Figures2 />
        
      </div>
      <div id="one" className="shape trans"></div>

    
    </div>
  )
};
