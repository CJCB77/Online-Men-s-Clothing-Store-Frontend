import { useEffect, useState } from 'react'


export default function useWindowDimension() {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)

  }, [setWindowWidth])

  return windowWidth
}
