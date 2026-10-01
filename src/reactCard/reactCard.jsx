
// import reactLogo from "./assets/react.svg";
import "./reactCard.css";
import reactLogo from "../assets/react.svg";
function ReactCard(){
    return(
        <div className="card">
        
          <div className="head">
             
             <img src={reactLogo}alt="React logo" className="logo" />
              <h2>Rules of JSX</h2>
          </div>
            <ul>
                <li>Must have enclose JSX in a React Element</li>
                <li>Close the Tag Property</li>
                <li> use className for css class as class is reservsed word i JS</li>
                <li>use camelCase for atrtibutes</li>
                <li>use flowers for JS</li>
            </ul>


        </div>
    )

    
}
export default ReactCard