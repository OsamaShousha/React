
import "./profile.css";
function Profile({name, work, age, isPresent })
{
    return(
       
        <>
     <div class="app-container">
     <header>
<h1>TaskFlow</h1>
     </header>
       <p className="name">{name}</p>

     <main> 
     <section class="input-section">
     <h2>Add New Task</h2>
     </section>
     <section class="list-section">
     <h2>My Tasks</h2>
     </section>
     </main>

 

     </div>

       
       
        </>
    )
}

export default Profile