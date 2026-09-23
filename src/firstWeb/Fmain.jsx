

function Fmain(){
const arr=[{

    name: "Osama",
    age:50,
    job: "Web Developer",
    img: "https://placehold.co/200x140",
    style:"osama"
},

{
    name:"Amira",
    age: 40,
    job: "E-commerce",
    img:"https://placehold.co/200x140",
    style:"amira"
},

{
    
    name:"omar",
    age: 40,
    job: "E-commerce",
    img:"https://placehold.co/200x140",
    style: "omar"

}

];

    return (
        <>
    
  <div className="cards">
  {arr.map((person) => (
    <div
      key={person.name}
      className={`card ${person.style}`}
    >
      <img src={person.img} alt={person.name} />
      <h1>{person.name}</h1>
      <p>{person.age}</p>
      <p>{person.job}</p>
    </div>
  ))}
</div>
        </>
    )
}

export default Fmain