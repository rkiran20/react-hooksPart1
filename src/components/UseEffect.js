import React, { useEffect, useRef, useState } from 'react'
import CleanUp from './CleanUp';

const UseEffect = () => {
    // initially its {currrent:undefined}
    const searchRef = useRef(); //after binding this to the input then it became {current:<input>}
    // now we can directly use searchRef.current.focus() but initially its undefined so we cannot use so for that we will use useEffect
    const [btn,setBtn] = useState(true);
    
    const [coordinates,setCoordinates] = useState({
        x:0,
        y:0,
    })
    const [dimensions,setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    
    useEffect(()=>{
        const changeCoordinates = (event)=>{
            setCoordinates({
                x:event.clientX,
                y:event.clientY,
            })
        }
        document.addEventListener("mousemove",changeCoordinates)
    },[])
    useEffect(()=>{
        if(btn){
        const changeDimensions = ()=>{
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize",changeDimensions)
       return (()=>{window.removeEventListener("resize",changeDimensions)})}
    },[btn])
    useEffect(()=>{
        searchRef.current.focus()
    },[]);
    const handleBtn=()=>{
        setBtn(!btn);
    }
  return (
    <div className='useEffectDiv'>
        <p>In this we will dive into useEffect hook </p>
        if we want to make a focus on yhe input button after the reload of the page then we can do this by using useRef and useEffect hook
        <form>
            <input id='search-form' ref={searchRef}></input>
            <label>Search</label>
        </form>
        <p>in this the input button is focused. initially when we declared useRef its undefined so we cant do ref.current.focus(). this gives an error as (ref.current is undefined) so for this we used useEffect </p>
        <p>as we know that useEffect is rendered after all the component by that time it binds to the tag which will not be undefined</p>
        <p>we will do another small rask using useEffect i.e we will update the cursor x,y values</p>
        <p>X:{coordinates.x} Y:{coordinates.y}</p>
        the x and y coordinates changes when ever the mouse/cursor is moved
        <p>Window X-dimension:{dimensions.width} window Y dimension:{dimensions.height}</p>
        <button onClick={handleBtn}>toggle btn</button>
        <CleanUp />
    </div>
  )
}

export default UseEffect