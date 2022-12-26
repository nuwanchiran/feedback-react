import {FaSignInAlt, FaUser} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'

type Props = {}


const AuthLinks = ( props: Props ) => {

  const styleChange = ( {isActive}: {isActive: boolean} ) => isActive ? s.activeLink : s.link

  return (
    <>
      <li>
        <NavLink className={styleChange} to={'/login'}>
          <FaSignInAlt /> Login
        </NavLink>
      </li>
      <li>
        <NavLink className={styleChange} to={'/register'}>
          <FaUser /> Register
        </NavLink>
      </li>
    </>
  )
}

export default AuthLinks