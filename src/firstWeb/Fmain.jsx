
import { useState } from "react";
import arr from "./fwebjava"
function Fmain(){
// const arr=[{

//     name: "Osama",
//     age:50,
//     job: "Web Developer",
//     img: "https://placehold.co/200x140",
//     style:"osama"
// },

// {
//     name:"Amira",
//     age: 40,
//     job: "E-commerce",
//     img:"https://placehold.co/200x140",
//     style:"amira"
// },

// {
    
//     name:"Omar",
//     age: 17,
//     job: "E-commerce",
//     img:"https://placehold.co/200x140",
//     style: "omar"

// },

// {
    
//     name:"Sofia",
//     age: 9,
//     job: "E-commerce",
//     img:"https://placehold.co/200x140",
//     style: "omar"

// },

// {
    
//     name:"Maria",
//     age: 14,
//     job: "E-commerce",
//     img:"https://placehold.co/200x140",
//     style: "omar"

// },

// ];

const[count, setCount] = useState(0)

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
      <h1>{count}</h1>
      <button type="submit" onClick={() => setCount(count + 1)}>Clicc Me</button>
      <button type="submit" onClick={() => (count > 0)? setCount(count - 1):null}>Clicc Me</button>
    </div>
  ))}
</div>
        </>
    )
}

export default Fmain