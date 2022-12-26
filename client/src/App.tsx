import TimeAgo from 'javascript-time-ago'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/organisms/Header/Header'
import ThemeContextProvider from './contexts/ThemeContext'

import en from 'javascript-time-ago/locale/en.json'
import {lazy, Suspense} from 'react'

const Home = lazy(()=>import('./pages/Home/Home'))
const Login = lazy(()=>import('./pages/Login/Login'))
const Register = lazy(()=>import('./pages/Register/Register'))
const Dashboard = lazy(()=>import('./pages/Dashboard/Dashboard'))

TimeAgo.addDefaultLocale(en)


type Props = {}

const App = ( props: Props ) => {
  return (
    <>
      <ThemeContextProvider>
        <Router>
          <Header />
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path='*' element={<Home />} />
              <Route path='/dashboard/*' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeContextProvider>
      <ToastContainer />
    </>
  )
}

export default App
