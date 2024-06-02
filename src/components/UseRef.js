import React, { useEffect, useRef, useState } from 'react'
import useIsVisible from '../hooks/useIsVisible';

const UseRef = () => {
    const paraRef = useRef();  //{current : undefined} -- initial  after binding this to <p> tag then then this becomes {current: <p>}
    const handleClick= ()=>{
        paraRef.current.className = "final";
        console.log(paraRef.current.className)
    }
    const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef();
   // console.log(ref)
  const handleBtn=()=> {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    handleVideo(nextIsPlaying);
  }
  const handleVideo = (data)=>{
    if(data){
      ref.current.play();
    }
    else ref.current.pause();
  }
  var itsVisible = false;
  console.log(itsVisible)
  useEffect = ()=>{
    const addingKey = (event)=>{
      if(event.code === 'space'){
        setIsPlaying((data)=>{return !data})  // we can also  write take an other variale and assign isPlaying to that and after giving this to setisPlaying()
      }
    }
    window.addEventListener("keydown",addingKey);
    /*return (()=>{
      window.removeEventListener('keydown',addingKey)
    })*/
  }
    return (
    <div className='refDiv'>
        <p>in this we will know about UseRef hook </p>
        <p>the video is visible: {itsVisible} false</p>
        <p ref={paraRef} className='initial'> this will only be there when u click on the click button</p>
        <button onClick={handleClick}>click me</button>
        after clicking this button the size decrease(we have done this by using useRef() hook)
        <p>we will look more</p>

        <button onClick={handleBtn}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default UseRef