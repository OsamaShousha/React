

function ArrMap()
{
    const arr = [
        {
          id: 1,  name:"Osama", age: 50, work: "Developer", isActive: true, place: "cairo"
        }, 
        {
            id: 2,  name:"Amira", age: 40, work: "E-commearce", isActive: true
        },
        {
            id: 3,  name:"Mar", age: 17, work: "Student", isActive: true
        }
    ]

    return(
        <>
         {arr.map((person)=>(
            <div key={person.id}>
                <h1>{person.name}</h1>
                <p>{person.age}</p>
                <p>{person.work}</p>
                <p>Active:{person.isActive? "Yes": "No"}</p>

            </div>
         )
        )}
        </>
    );
}
export default ArrMap;