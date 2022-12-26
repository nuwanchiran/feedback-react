import {AiOutlinePlusCircle, AiOutlineSetting} from 'react-icons/ai'
import {FaBug} from 'react-icons/fa'
import {FeedbackType} from '../../../stores/feedback/feedback.type'
import s from './FeedbackTypeBadge.module.scss'

type Props = {
  type: FeedbackType
}

function FeedbackTypeBadge( props: Props ) {
  const {type} = props
  return (
    <article className={s[type]}>
      {type === "bug" && <FaBug />}
      {type === "modification" && <AiOutlineSetting />}
      {type === "new_feature" && <AiOutlinePlusCircle />}
      {type.replace( '_', ' ' )}
    </article>
  )
}

export default FeedbackTypeBadge