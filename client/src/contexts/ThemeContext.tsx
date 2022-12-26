import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

type Props = {
  children: ReactNode
}

type Theme = "light" | "dark"

type ContextType = {
  theme: Theme,
  setTheme: Dispatch<SetStateAction<Theme>>
}
export const themeContext = createContext<ContextType>( {
  theme: 'light',
  setTheme: () => {}
} )

const ThemeContextProvider = ( props: Props ) => {
  const [theme, setTheme] = useState<Theme>( 'dark' )
  return (
    <themeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider