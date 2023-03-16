import {ChangeEventHandler, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {AppDispatch, RootState} from '../stores'
import {login, register} from '../stores/auth/auth.thunk'
import {User} from '../stores/auth/auth.type'

const useAuth = () => {
  const authState = useSelector( ( state: RootState ) => state.auth )
  const dispatch = useDispatch<AppDispatch>()

  const [form, setForm] = useState<User>( {
    name: '',
    email: '',
    password: ''
  } )

  const [confirmPassword, setConfirmPassword] = useState( '' )

  // handle form change
  const handleFormChange: ChangeEventHandler<HTMLInputElement> = ( e ) => {
    setForm( prev => ( {...prev, [e.target.name]: e.target.value} ) )
  }

  // handle confirm password change
  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = ( e ) => {
    setConfirmPassword( e.target.value )
  }

  // login
  const handleLogin = () => {
    if ( form.email && form.password ) dispatch( login( form ) )
  }

  // register
  const handleRegister = () => {
    const {email, password, name} = form

    if ( password !== confirmPassword ) {
      return toast.error( "Passwords don't match." )
    }

    if ( email && password && name ) dispatch( register( form ) )
  }

  return {
    ...authState,
    form,
    handleFormChange,
    handleLogin,
    handleRegister,
    confirmPassword,
    handleConfirmPasswordChange
  }
}

export default useAuth