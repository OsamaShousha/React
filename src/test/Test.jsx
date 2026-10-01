
function Test()
{
    const test = 
    [
      {
           name:"osama", agr: 34, img: "placeholder/...",job: "WEb Deveoloper"
      }
    ];

    return(
        <>
          {test.map((person)=>(
             <div key={person.name}>
                 <img src="{person.img}" alt="" />
                <h1>{person.name}</h1>
                <p>{person.ag}</p>
               

             </div>
          ))}
        </>
    );
}
 export default Test
