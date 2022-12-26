import {useContext} from 'react'
import {themeContext} from '../contexts/ThemeContext'

const useTheme = () => {
  const context = useContext( themeContext )
  if ( !context ) throw new Error( "Context is not available" )
  return context
}

export default useTheme