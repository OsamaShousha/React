
import "./FirstProS.css";
import "./FristProJ.js"

function First({name} )
const obj =[name, age];

{
    return(
           <>
           <nav className="nav">
            <ul className="list">
                <li><a haref="#">CURRUCULUM VITAE</a></li>
                <li><a haref="#">About</a></li>
                <li><a haref="#">RESUME</a></li>
                <li><a haref="#">CONTACT</a></li>
            </ul>
           </nav>

          <main className="Main">

         
           <section className="Section">
            <h1>{name}</h1>
            <p className="Praghraph" >Web Developer</p>
             <img  className="Sidbar"  src="https://placehold.co/200x140" />
    <button id="btn">Click</button>
           </section >
        


   
   
          

            </main>

           


           </>
    )
}
export default First