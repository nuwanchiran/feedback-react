import {FormEventHandler} from 'react';
import {FaUser} from 'react-icons/fa';
import AppButton from '../../components/atoms/AppButton/AppButton';
import AppInput from '../../components/atoms/AppInput/AppInput';
import Container from '../../components/templates/Container/Container';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';
import s from './Register.module.scss';

type Props = {}

const Register = ( props: Props ) => {
  const {theme} = useTheme()

  const {
    form,
    isLoading,
    handleFormChange,
    handleRegister,
    handleConfirmPasswordChange,
    confirmPassword
  } = useAuth()

  const {name, email, password} = form

  const handleSubmit: FormEventHandler = ( e ) => {
    e.preventDefault()
    handleRegister()
  }

  return (
    <article className={s[theme]}>
      <Container>
        <section className={s.container}>
          <section className={s.heading}>
            <FaUser color='#666' size={32} className={s.headingIcon} />
            <h1 className={s.headingTitle}>Register User</h1>
          </section>
          <form onSubmit={handleSubmit}>
            <AppInput
              required
              value={name}
              type={'text'}
              title='Name'
              name='name'
              onChange={handleFormChange}
            />
            <AppInput
              required
              type={'email'}
              title='Email'
              name='email'
              value={email}
              onChange={handleFormChange}
            />
            <AppInput
              required
              type={'password'}
              title='Password'
              name='password'
              value={password}
              onChange={handleFormChange}
            />
            <AppInput
              required
              type={'password'}
              title='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <br />
            <AppButton theme='submit'>{isLoading ? "loading..." : "Submit"}</AppButton>
          </form>
        </section>
      </Container>
    </article>
  )
}

export default Register