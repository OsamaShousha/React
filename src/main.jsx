

import { createRoot } from "react-dom/client"
import App from "./firstWeb/FwebApp"

const root = createRoot(document.getElementById("root"))

root.render(
    <div className="Container">
        {/* <h1>Hello React From main </h1>
        <h1>Hello I am From Fweb</h1> */}


        <App/>
    </div>
  
)