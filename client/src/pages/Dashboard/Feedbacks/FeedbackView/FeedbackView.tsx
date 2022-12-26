import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import FeedbackTypeBadge from '../../../../components/atoms/FeedbackTypeBadge/FeedbackTypeBadge'
import CommentForm from '../../../../components/organisms/CommentForm/CommentForm'
import CommentList from '../../../../components/organisms/CommentList/CommentList'
import useEffectOnce from '../../../../hooks/useEffectOnce'
import {AppDispatch} from '../../../../stores'
import {getCommentsByFeedback} from '../../../../stores/comment/comment.thunk'
import {Feedback} from '../../../../stores/feedback/feedback.type'
import s from './FeedbackView.module.scss'

type Props = {}

const FeedbackView = ( props: Props ) => {
  const {state} = useLocation()
  const{title,createdAt,description,type} = state as Feedback

  const dispatch = useDispatch<AppDispatch>()

  useEffectOnce(()=>{
    dispatch(getCommentsByFeedback(state))
  })

  return (
    <article className={s.container}>
      <section className={s.heading}>
        <h1>{title}</h1>
        <div className={s.subInfo}>
          <small>
            <ReactTimeAgo date={createdAt as Date} locale="en-US"/>
          </small>
          <FeedbackTypeBadge type={type}/>
        </div>
      </section>
      <p>{description}</p>
      <section>
        <CommentForm/>
        <CommentList/>
      </section>
    </article>
  )
}

export default FeedbackView