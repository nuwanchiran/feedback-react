import {FaTrash} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import useTheme from '../../../hooks/useTheme'
import {AppDispatch} from '../../../stores'
import {deleteComment} from '../../../stores/comment/comment.thunk'
import {Comment} from '../../../stores/comment/comment.type'
import AppProfile from '../../atoms/AppProfile/AppProfile'
import s from './CommentItem.module.scss'

type Props = Comment&{}

const CommentItem = (props: Props) => {
  const {theme} = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  
  const handleRemoveComment = () => { 
    dispatch(deleteComment(props))
  }

  return (
    <article className={s[theme]}>
      <div className={s.info}>
        <AppProfile text={(props.owner as any)?.name as string} size={30}/>
        <p>{(props.owner as any)?.name}: {props.description}</p>
      </div>
      <FaTrash onClick={handleRemoveComment} className={s.trashIcon} size={12}/>
    </article>
  )
}

export default CommentItem