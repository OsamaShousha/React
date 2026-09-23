
 import Ass from "./Ass"
 
function Assinment({name, job, src})
{
    return (
        <>
             < Ass/>
         <div className="Assinment-card">
        <h1>{name}</h1>
        <img src= {src} alt="" />
        <h2 className="Job">{job}</h2>
    </div>
        </>
   
    )
}

export default Assinment