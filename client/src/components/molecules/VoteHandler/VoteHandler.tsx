import {MouseEventHandler, useState} from 'react';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stores';
import {Feedback, FeedbackActionType} from '../../../stores/feedback/feedback.type';
import s from './VoteHandler.module.scss'

type Props = Feedback & {
}

const VoteHandler = ( props: Props ) => {
  const dispatch = useDispatch<AppDispatch>()
  const [voted, setVoted] = useState( false )

  const voteUp:MouseEventHandler = (e) => {
    e.stopPropagation()
    dispatch( {
      type:FeedbackActionType.edit,
      payload:{
        feedback: {...props, votes: ( props.votes as number ) + 1}
      }
    } )
    setVoted( true )
  }

  const voteDown:MouseEventHandler = (e) => {
    e.stopPropagation()
    dispatch( {
      type:FeedbackActionType.edit,
      payload:{
        feedback: {...props, votes: ( props.votes as number ) - 1}
      }
    } )
    setVoted( true )
  }
  return (
    <section className={s.votes}>
      <small>{props.votes} votes</small>
      {!voted && <div className={s.btns}>
        <IoIosArrowUp onClick={voteUp} className={s.btn} />
        <IoIosArrowDown onClick={voteDown} className={s.btn} />
      </div>}
    </section>
  )
}

export default VoteHandler