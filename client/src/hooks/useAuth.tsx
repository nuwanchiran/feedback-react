import {ChangeEventHandler, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {AppDispatch, RootState} from '../stores'
import {AuthActionType, User} from '../stores/auth/auth.type'

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
    if ( form.email && form.password ) 
      dispatch( {type:AuthActionType.login,payload:{user:form}} )
  }

  // register
  const handleRegister = () => {
    const {email, password, name} = form

    if ( password !== confirmPassword ) {
      return toast.error( "Passwords don't match." )
    }

    if ( email && password && name ) 
      dispatch( {type:AuthActionType.register,payload:{user:form}} )
  }

  // logout
  const handleLogout = () => { 
    dispatch({type:AuthActionType.logout})
  }

  return {
    ...authState,
    form,
    handleFormChange,
    handleLogin,
    handleRegister,
    handleLogout,
    confirmPassword,
    handleConfirmPasswordChange
  }
}

export default useAuth