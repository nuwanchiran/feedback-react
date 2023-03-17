import TimeAgo from 'javascript-time-ago'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/organisms/Header/Header'
import ThemeContextProvider from './contexts/ThemeContext'

import en from 'javascript-time-ago/locale/en.json'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

TimeAgo.addDefaultLocale(en)

type Props = {}

const App = ( props: Props ) => {
  return (
    <>
      <ThemeContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </ThemeContextProvider>
      <ToastContainer />
    </>
  )
}

export default App
