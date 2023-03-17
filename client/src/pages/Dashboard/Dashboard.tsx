import {Route, Routes, useNavigate} from 'react-router-dom'
import AppButton from '../../components/atoms/AppButton/AppButton'
import Container from '../../components/templates/Container/Container'
import useAuth from '../../hooks/useAuth'
import useTheme from '../../hooks/useTheme'
import s from './Dashboard.module.scss'
import FeedbackForm from './Feedbacks/FeedbackForm/FeedbackForm'
import FeedbackList from './Feedbacks/FeedbackList/FeedbackList'
import FeedbackView from './Feedbacks/FeedbackView/FeedbackView'

type Props = {}

const Dashboard = ( props: Props ) => {
  const {theme} = useTheme()
  const {user} = useAuth()
  const navigate = useNavigate()

  return (
    <article className={s[theme]}>
      <Container>
        {user?
          <div className={s.content}>
            <Routes>
              <Route path='/' element={<FeedbackList />} />
              <Route path='/feedbacks/form/:id' element={<FeedbackForm />} />
              <Route path='/feedbacks/form/' element={<FeedbackForm />} />
              <Route path='/feedbacks/:id' element={<FeedbackView />} />
            </Routes>
          </div>
          :
          <AppButton onClick={()=>navigate("/login")}>signin</AppButton>
        }
      </Container>
    </article>
  )
}

export default Dashboard