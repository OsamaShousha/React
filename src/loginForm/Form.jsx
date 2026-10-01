
 import "./login.css"
function Form(){
    return(
          < form className="form">
        <h1>Login Form</h1>
        <label htmlFor="" className="lable">Username </label>
        <input type="text" />
       

        <label htmlFor="" className="lable">PassWord </label>
        <input type="password" />
       

        <button className="button">Log In</button>
       
    </form>
    )
  
}

export default Form