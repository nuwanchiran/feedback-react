import {AiOutlineDashboard, AiOutlinePoweroff} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import {AppDispatch} from '../../../stores'
import {logout} from '../../../stores/auth/auth.thunk'
import AppProfile from '../../atoms/AppProfile/AppProfile'
import s from './Header.module.scss'

type Props = {}

const UserLinks = ( props: Props ) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {user} = useAuth()

  const handleLogout = () => {
    dispatch( logout() )
    navigate( '/' )
  }

  const styleChange = ( {isActive}: {isActive: boolean} ) => isActive ? s.activeLink : s.link

  return user ? (
    <>
      <li>
        <NavLink className={styleChange} to={'/dashboard'}>
          <AiOutlineDashboard /> Dashboard
        </NavLink>
      </li>
      <li onClick={handleLogout}>
        <AiOutlinePoweroff />
        <AppProfile text={user.name} size={35} />
      </li>
    </>
  ):<></>
}

export default UserLinks