import {AiOutlineDashboard, AiOutlinePoweroff} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import AppProfile from '../../atoms/AppProfile/AppProfile'
import s from './Header.module.scss'

type Props = {}

const UserLinks = ( props: Props ) => {
  const {user,handleLogout} = useAuth()

  const logout = () => {
    handleLogout()
  }

  const styleChange = ( {isActive}: {isActive: boolean} ) => isActive ? s.activeLink : s.link

  return user ? (
    <>
      <li>
        <NavLink className={styleChange} to={'/dashboard'}>
          <AiOutlineDashboard /> Dashboard
        </NavLink>
      </li>
      <li onClick={logout}>
        <AiOutlinePoweroff />
        <AppProfile text={user.name} size={35} />
      </li>
    </>
  ):<></>
}

export default UserLinks