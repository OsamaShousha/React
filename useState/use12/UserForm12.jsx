
import React, { useState } from 'react'

const UserForm12 = () => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[age, setAge]=useState(0);
    const[isAvalabil, setIsAvilable]=useState(false)
  return (
     <>
     <div style={{backgroundColor:"black",
        padding:"2rem", borderRadius:"10px",
        boxShadow:"120px 10px 100px rgb(100, 50, 150)"
     }}>
       <form >
        <div>
            <label >User Name</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder='User Name'
            style={{width:"100%", height:"2rem"}}
            />
        </div>
        <div>
            <label >User Email</label>
            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}placeholder='User Email'
            style={{width:"100%", height:"2rem"}}
            />
        </div>
        <div>
            <label >User Age</label>
            <input type="Number" min="0" value={age} onChange={(e) => setAge(age?(e.target.value):0)} placeholder='User Age'
            style={{width:"100%", height:"2rem"}}
            />
        </div>
        <div>
            <label >Check</label>
            <input type="checkbox" checked={isAvalabil} onChange={(e) =>  setIsAvilable(e.target.checked )}
            style={{width:"100%", height:"2rem"}}
            />
        </div>
       </form>
     </div>


     <div style={{boxShadow:"10px 12px 100px rgb(0,0,0)",
          border:"1px solid yellow",
          padding:"2rem",
          borderRadius:"30px",
          }}>
        <p style={{fontSize:"20px"}}>Your Name:{name} </p>
        <p style={{fontSize:"20px"}}>Your Email:{email} </p>
        <p style={{fontSize:"20px"}}>Your Age: {age}</p>
        <p style={{fontSize:"20px"}}>Your  setIsAvilable:{ !isAvalabil?"YES":"NO"}</p>
     </div>
     </>
    
   
  )
}

export default UserForm12