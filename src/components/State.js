import React, { useState } from 'react'
import { initialObj } from '../data'

const State = () => {
    const [user , setUser] = useState(initialObj)
    const handleBtn = ()=>{
        const dummyObj = {
            name:"kiran",
        }
        setUser(dummyObj);
        initialObj.push(dummyObj);
        //console.log(initialObj , user)
    }
  return (
    <div className='stateDiv'>
        in this we wil loook how the state changes and about reference of the state in the computer/react
        <p>initially we have a object where the is name of random person and we will update this with our useState hook</p>
        <button onClick={handleBtn}>update the user</button>
        
    </div>
  )
}

export default State