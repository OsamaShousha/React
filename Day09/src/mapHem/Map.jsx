

function Map()
{
    const arr = [
        {
            name: "Osama", age: 50, job: "Web Developer"
        },
        
    ];



    return(
        <>
            {
            arr.map((person)=>(
                <div>
                    <h1>{person.name}</h1>
                     <h1>{person.age}</h1>
                </div>
            ))
        }

       
        </>
    
    );
}

export default Map