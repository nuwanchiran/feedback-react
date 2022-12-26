import {FormEventHandler} from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import AppButton from '../../components/atoms/AppButton/AppButton';
import AppInput from '../../components/atoms/AppInput/AppInput';
import Container from '../../components/templates/Container/Container';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';
import s from './Login.module.scss';

type Props = {}

const Login = ( props: Props ) => {
  const {theme} = useTheme()

  const {isLoading, form, handleFormChange, handleLogin} = useAuth()
  const {email, password} = form

  const handleSubmit: FormEventHandler = ( e ) => {
    e.preventDefault()
    handleLogin()
  }

  return (
    <article className={s[theme]}>
      <Container>
        <section className={s.container}>
          <section className={s.heading}>
            <FaSignInAlt color='#666' size={32} className={s.headingIcon} />
            <h1 className={s.headingTitle}>Login and give us feedbacks</h1>
          </section>
          <form onSubmit={handleSubmit}>
            <AppInput
              required
              value={email}
              onChange={handleFormChange}
              type={'email'}
              title='Email'
              name='email'
            />
            <AppInput
              required
              value={password}
              onChange={handleFormChange}
              type={'password'}
              title='Password'
              name='password'
            />
            <br />
            <AppButton theme='submit'>{isLoading ? "loading..." : "Submit"}</AppButton>
          </form>
        </section>
      </Container>
    </article>
  )
}

export default Login