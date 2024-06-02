import React, { useState } from 'react'

const LoginForm = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const id = React.useId();
    const userNameId = id+"-username"
    const passwordId = id+"-password";
   //console.log(userNameId,passwordId); 
  return (
    <div className='loginDiv'>
        <form className='formDiv'>
            <label htmlFor={userNameId}>user name:</label>
            <input id={userNameId} type='text' input={userName} onChange={(event)=>{setUserName(event.target.input)}}></input>
            <label htmlFor={passwordId}>Password:</label>
            <input id={passwordId}type='text' input={password} onChange={(event)=>{setPassword(event.target.input)}}></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm