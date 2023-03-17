import {ChangeEventHandler, FormEventHandler, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {Comment, CommentActionType} from '../../../stores/comment/comment.type'
import AppButton from '../../atoms/AppButton/AppButton'
import AppInput from '../../atoms/AppInput/AppInput'
import s from './CommentForm.module.scss'

type Props = {}

const CommentForm = (props: Props) => {
  const {state} = useLocation()
  const dispatch = useDispatch()

  const [form, setForm] = useState<Comment>({
    description: '',
    feedback: state._id,
  })

  const handleFormChange:ChangeEventHandler<any> = (e) => { 
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit:FormEventHandler = (e) => { 
    e.preventDefault()

    if(!form.feedback) return
    dispatch({type: CommentActionType.add, payload: {comment:form}})
  }
  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <span><AppInput value={form.description} name='description' onChange={handleFormChange} placeholder='Comment here...'/></span>
      <span><AppButton type='submit'>Send</AppButton></span>
    </form>
  )
}

export default CommentForm