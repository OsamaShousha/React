
import "./Third.css"
function Third({name, src="https://placehold.co/200x140", age, isPresent})
{
    return  (
        <>
        
          <div className="contanier">
            <h1 className="heading">{name}</h1>
            <img src={src} alt="" className="foto" />
            <h1>{age}</h1>
          {isPresent ? <p>Is available</p>:<h2>is false</h2>}
          
          </div>
        </>
    )
}

export  default Third