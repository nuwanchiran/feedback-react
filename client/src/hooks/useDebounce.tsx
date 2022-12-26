import {useEffect, useState} from 'react'


const useDebounce = <T,>( value: T, delay?: number ) => {
  const [debouncedValue, setDebouncedValue] = useState<T>( value )

  useEffect( () => {
    const timeout = setTimeout( () => {
      setDebouncedValue( value )
    }, delay || 400 )

    return () => {
      clearInterval( timeout )
    }
  }, [delay, value] )

  return (
    debouncedValue
  )
}

export default useDebounce