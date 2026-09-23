
import Profile from "./Profile";

function App(){

    const obj = [
{
        id:1,
        name:"N1" ,
        work:"web developer",
        age: 34,
        isPresent:true
        },

        {name:"N2" ,
        work:"web devel",
        age: 34,
        isPresent:true
        }


    ];
    return(
        <>
        <Profile name="N3" 
        work="web developer"
        age= {34}
        isPresent={true}

     
       
         />

      <Profile name="Name4" 
        work="web developer"
        age= {34}
        isPresent={true}

     
       
         />
         
         obj.map((data)=>{
            <ProApp
            {data.name}
            />
         });
        </>
    )
}
export  default App 