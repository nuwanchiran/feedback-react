import {useSelector} from 'react-redux'
import {RootState} from '../stores'

const useFeedback = () => {
  return useSelector( ( state: RootState ) => state.feedback )
}

export default useFeedback