import useComments from '../../../hooks/useComments'
import CommentItem from '../../molecules/CommentItem/CommentItem'
import s from './CommentList.module.scss'

type Props = {}

const CommentList = (props: Props) => {
  const {comments} = useComments()

  return (
    <ul className={s.container}>
      {comments.map(cmt=>{
        return <CommentItem key={cmt._id} {...cmt}/>
      })}
    </ul>
  )
}

export default CommentList