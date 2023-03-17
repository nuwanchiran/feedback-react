import {ChangeEventHandler, FormEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import AppButton from '../../../../components/atoms/AppButton/AppButton'
import AppInput from '../../../../components/atoms/AppInput/AppInput'
import AppSelect from '../../../../components/atoms/AppSelect/AppSelect'
import AppTextarea from '../../../../components/atoms/AppTextArea/AppTextarea'
import useFeedback from '../../../../hooks/useFeedback'
import {AppDispatch} from '../../../../stores'
import {Feedback, FeedbackActionType} from '../../../../stores/feedback/feedback.type'
import s from './FeedbackForm.module.scss'

type Props = {}

const initForm: Feedback = {
  title: '',
  type: 'bug'
}

const FeedbackForm = ( props: Props ) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {isLoading} = useFeedback()
  const {state} = useLocation()

  const [form, setForm] = useState<Feedback>( () => state || initForm )

  const handleChange: ChangeEventHandler<any> = ( e ) => {
    setForm( prev => ( {...prev, [e.target.name]: e.target.value} ) )
  }

  const handleSubmit = ( e: FormEvent ) => {
    e.preventDefault()

    if ( form._id ) {
      dispatch( {type: FeedbackActionType.edit,payload:{feedback:form}} )
    } else {
      dispatch( {type: FeedbackActionType.add,payload:{feedback:form}} )
    }

    navigate( '/dashboard' )
  }

  return (
    <section className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <AppInput
          required
          type={'text'}
          value={form.title}
          name="title"
          onChange={handleChange}
          title="Title"
          placeholder='Title'
        />
        <AppSelect
          onChange={handleChange}
          value={form.type}
          name={'type'}
          title="Type" required
        >
          <option value={'bug'}>Bug</option>
          <option value={'modification'}>Modification</option>
          <option value={'new_feature'}>New Feature</option>
        </AppSelect>
        <AppTextarea
          title='Description'
          value={form.description}
          onChange={handleChange}
          name="description"
        />
        <AppButton disabled={isLoading} theme='submit'>{isLoading ? "Loading..." : "Save"}</AppButton>
      </form>
    </section>
  )
}

export default FeedbackForm