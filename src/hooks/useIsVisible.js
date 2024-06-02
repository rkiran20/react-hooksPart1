import React, { useEffect, useState } from 'react'

const useIsVisible = (wrapper) => {
    const [isVisible, setIsVIsible] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const [entry] = entries;
            setIsVIsible(entry.isIntersecting)
        })
        observer.observe(wrapper.current)
        return (()=>{
            observer.disconnect();
        })
    },[wrapper])
  return isVisible;
}

export default useIsVisible