import {MouseEventHandler} from 'react'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useTheme from '../../../hooks/useTheme'
import {AppDispatch} from '../../../stores'
import {Feedback, FeedbackActionType} from '../../../stores/feedback/feedback.type'
import FeedbackTypeBadge from '../../atoms/FeedbackTypeBadge/FeedbackTypeBadge'
import VoteHandler from '../../molecules/VoteHandler/VoteHandler'
import s from './FeedbackCard.module.scss'
type Props = Feedback & {}

const FeedbackCard = ( props: Props ) => {
  const {theme} = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleDelete: MouseEventHandler = ( e ) => {
    e.stopPropagation()
    dispatch( {type:FeedbackActionType.remove, payload:{feedback:props}} )
  }

  const handleEdit: MouseEventHandler = ( e ) => {
    e.stopPropagation()
    navigate( `/dashboard/feedbacks/form/${props._id}`, {state: props} )
  }

  const handleView: MouseEventHandler = () => {
    navigate( `/dashboard/feedbacks/${props._id}`, {state: props} )
  }

  return (
    <article className={s[theme]} onClick={handleView}>
      <section className={s.content}>
        <section className={s.top}>
          <section className={s.heading}>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.right}>
              <AiOutlineDelete className={s.icon} onClick={handleDelete} />
              <AiOutlineEdit className={s.icon} onClick={handleEdit} />
            </div>
          </section>
        </section>
        <section className={s.bottom}>
          <VoteHandler {...props} />
          <FeedbackTypeBadge type={props.type} />
        </section>
      </section>
    </article>
  )
}

export default FeedbackCard