import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi'
import useTheme from '../../../hooks/useTheme'
import s from './AppThemeSwitch.module.scss'

type Props = {}

const AppThemeSwitch = ( props: Props ) => {
  const {theme, setTheme} = useTheme()

  const changeTheme = () => {
    if ( theme === 'light' ) setTheme( "dark" )
    if ( theme === 'dark' ) setTheme( 'light' )
  }
  return (
    <div className={s[theme]}>
      <div className={s.bar} onClick={changeTheme}>
        <div className={s.circle}>
          {theme === "dark" && <HiOutlineMoon className={s.icon} />}
          {theme === "light" && <HiOutlineSun className={s.icon} />}
        </div>
      </div>
    </div>
  )
}

export default AppThemeSwitch