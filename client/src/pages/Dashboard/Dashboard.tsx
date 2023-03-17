import {lazy, Suspense, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Container from '../../components/templates/Container/Container'
import useAuth from '../../hooks/useAuth'
import useTheme from '../../hooks/useTheme'
import s from './Dashboard.module.scss'

const FeedbackList = lazy(()=>import('./Feedbacks/FeedbackList/FeedbackList'))
const FeedbackForm = lazy(()=>import('./Feedbacks/FeedbackForm/FeedbackForm'))
const FeedbackView= lazy(()=>import('./Feedbacks/FeedbackView/FeedbackView'))

type Props = {}

const Dashboard = ( props: Props ) => {
  const {theme} = useTheme()
  const navigate = useNavigate()
  const {user} = useAuth()

  useEffect( () => {
    if ( !user ) navigate( '/login' )
  }, [user, navigate] )

  return (
    <article className={s[theme]}>
      <Container>
        <div className={s.content}>
          <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path='/' element={<FeedbackList />} />
            <Route path='/feedbacks/form/:id' element={<FeedbackForm />} />
            <Route path='/feedbacks/form/' element={<FeedbackForm />} />
            <Route path='/feedbacks/:id' element={<FeedbackView />} />
          </Routes>
          </Suspense>
        </div>
      </Container>
    </article>
  )
}

export default Dashboard