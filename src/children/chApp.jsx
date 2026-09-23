
import Demo from "./child"
function App()
{
    return(
        <>
        
           <Demo>
            <h1>Hello Demo1</h1>
            <h2>Hello Demo 2</h2>
        </Demo>

           <Demo>
            <h1>Hello Demo11</h1>
            <img src="https://placehold.co/200x140" alt="" />
            <h2>Hello Demo 22</h2>
        </Demo>

          <Demo>
            <h1>Hello Demo11</h1>
            <img src="https://placehold.co/200x140" alt="" />
            <img src="https://placehold.co/200x140" alt="" />
            <img src="https://placehold.co/200x140" alt="" />
            <h2>Hello Demo 22</h2>
        </Demo>
        </>
     
     
    )
}
export default App;