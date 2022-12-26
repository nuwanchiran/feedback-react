import {Link} from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import useTheme from '../../../hooks/useTheme'
import AppThemeSwitch from '../../atoms/AppThemeSwitch/AppThemeSwitch'
import Container from '../../templates/Container/Container'
import AuthLinks from './AuthLinks'
import s from './Header.module.scss'
import UserLinks from './UserLinks'

type Props = {}

const Header = ( props: Props ) => {
  const {theme} = useTheme()
  const {user} = useAuth()

  return (
    <nav className={s[theme]}>
      <Container>
        <section className={s.container}>
          <div className={s.logo}>
            <Link className={s.link} to='/'>FeedbackHub</Link>
          </div>
          <ul>
            {user ? <UserLinks /> : <AuthLinks />}
            <li>
              <AppThemeSwitch />
            </li>
          </ul>
        </section>
      </Container>
    </nav>
  )
}

export default Header
