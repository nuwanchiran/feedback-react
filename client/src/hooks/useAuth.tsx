import {ChangeEventHandler, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {AppDispatch, RootState} from '../stores'
import {reset} from '../stores/auth/auth.slice'
import {login, register} from '../stores/auth/auth.thunk'
import {User} from '../stores/auth/auth.type'

const useAuth = () => {
  const authState = useSelector( ( state: RootState ) => state.auth )
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const {user, isError, isSuccess} = authState

  const [form, setForm] = useState<User>( {
    name: '',
    email: '',
    password: ''
  } )

  const [confirmPassword, setConfirmPassword] = useState( '' )

  // listen to event changes
  useEffect( () => {
    if ( isError ) toast.error( "Error submitting the form..." )

    if ( isSuccess && user ) navigate( '/dashboard' )

    dispatch( reset() )
  }, [dispatch, isError, isSuccess, navigate, user] )

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