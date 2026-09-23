import { useState } from "react"
import "./Counters.css"


function Counter()
{
    // let count = 0;

   const [count, setCount] = useState(10);

    function increasCounter()
    {
        // count = count + 1;
         setCount(count + 1);
        console.log("Count is Now: " + count)
    }

       function decreaseCounter()
    {
        // count = count + 1;
        if (count > 0){
             setCount(count -1);
        console.log("Count is Now: " + count)
        }
        
    }


     function resetCounter()
    {
        // count = count + 1;
          setCount( 0);
        console.log("Count is Now: " + count)
    }


    



    return (
        <div className="counter">
            <div>{count}</div>
            <button className=""  onClick={increasCounter}>increasCounter</button>
            <button className=""  onClick={decreaseCounter}>decreaseCounter</button>
            <button className=""  onClick={resetCounter}>resetCounter</button>

        </div>
    )
}
 export default Counter