import {lazy, Suspense, useMemo, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import useDebounce from '../../../../hooks/useDebounce'
import useEffectOnce from '../../../../hooks/useEffectOnce'
import useFeedback from '../../../../hooks/useFeedback'
import {AppDispatch} from '../../../../stores'
import {getAllFeedbacks} from '../../../../stores/feedback/feedback.thunk'
import AppButton from '../../../../components/atoms/AppButton/AppButton'
import AppInput from '../../../../components/atoms/AppInput/AppInput'
import s from './FeedbackList.module.scss'
import {Feedback} from '../../../../stores/feedback/feedback.type'

const FeedbackCard = lazy( () => import( '../../../../components/organisms/FeedbackCard/FeedbackCard' ) )

type Props = {}

const FeedbackList = ( _props: Props ) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {feedbacks} = useFeedback()
  const {user} = useAuth()

  const [search, setSearch] = useState<string>( '' )
  const debounceSearch = useDebounce( search )

  // init data load
  useEffectOnce( () => {
    dispatch( getAllFeedbacks() )
  } )

  const searchResults = useMemo( () =>
    feedbacks?.filter( (fb:Feedback) => fb.title.toLowerCase().includes( debounceSearch.toLowerCase() ) ),
    [debounceSearch, feedbacks] )

  return (
    <div className={s.container}>
      <section className={s.heading}>
        <div className={s.left}>
          <h1>Welcome {user && user.name}</h1>
          <p>Feedback Dashboard</p>
        </div>
        <div className={s.right}>
          <AppButton onClick={() => navigate( '/dashboard/feedbacks/form' )}>Add Feedback</AppButton>
        </div>
      </section>
      <div className={s.searchContainer}>
        <AppInput type={'search'} value={search} placeholder='Search' onChange={( e ) => setSearch( e.target.value )} />
      </div>
      <section className={s.list}>
        <Suspense fallback={<div>loading...</div>}>
          {searchResults?.map( (fb:Feedback) => <FeedbackCard {...fb} key={fb._id} /> )}
        </Suspense>
      </section>
    </div>
  )
}

export default FeedbackList