import React, { useEffect, useState } from 'react'

const CleanUp = () => {
    const [btn , setBtn] = useState(true);
    const [isOn,setIsOn] = useState(true)
    //console.log(isOn)
    const [position,setPositon] = useState({X:0,Y:0});
    useEffect(()=>{
        if(btn){
        const cursorChange= (event)=>{
            setPositon(
                {
                    X:event.clientX,
                    Y:event.clientY,
                }
            )
        }
        window.addEventListener("mousemove",cursorChange);
        return (
            ()=>{
                window.removeEventListener("mousemove",cursorChange);
            }
        )}
    },[btn])
    useEffect(()=>{
        if(!isOn){
            setTimeout(()=>{
                setIsOn(!isOn);
            },1000);
        }
    })
    const handleBtn = ()=>{
        setBtn(!btn);
    }
  return (
    <div>
        <p>In this we will learn abt clean up in useEffect() hook</p>
        <h3>how this works</h3>
        <li>when an useEffect() is renderd in the window on top of it cleanup will be formed creating like stack so to make viable before again rendering the effect the before cleaup runs</li>
        <p>we will solve the same example above of the cursors x and y coordinates with some changes</p>
        <p> in this if we click the button then the cursor x and y dont changes </p>
        <button onClick={handleBtn}>Toggle Me</button>
        <p> X :{position.X} Y:{position.Y}</p>
        <h2>now this looks simple but here there are many thing to learn</h2>
        <h3> this is the process how the render and effect works</h3>
        <p> <h2>initial render</h2>   RENDER -- EFFECT</p> (AFTER THIS IF AGAIN EFFECT RENDERS DUE TO PAGE RELOAD OR DEPENDENCIES THEN IT LOOKS LIKE THIS)
        <p><h2>subsequent renders</h2>RENDER -- CLEANUP -- EFFECT</p>
        <p><h2>time of unmount</h2>RENDER -- CLEANUP</p>
        <p>we will write the cleanup only when there is an event attached to it orelse there is no need to write clean up</p>
        <input type='checkbox' checked={isOn} onChange={(event)=>{setIsOn(event.target.checked)}} onClick={()=>{setIsOn(!isOn)}}></input>
        
    </div>
  )
}

export default CleanUp