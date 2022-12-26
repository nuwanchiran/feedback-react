import {useSelector} from 'react-redux'
import {RootState} from '../stores'

const useComments = () => {
  return useSelector((state:RootState)=>state.comment)
}

export default useComments