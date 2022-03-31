import React, { useEffect, useState } from 'react'

export default function useBodyScrollLock() {

  const [lockScroll, setLockScroll] = useState(false)

  useEffect(() => {
    const body = document.querySelector("body")
    if(lockScroll){
      body.style.overflow = "hidden"
    }
    
    return () => {
      body.style.overflow = ""
    }

  }, [lockScroll])

  return (
    [lockScroll,setLockScroll]
  )
}