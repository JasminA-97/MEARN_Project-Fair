import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboar from './pages/Dashboar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './context/AuthContext'


function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/projects' element={isAuthorised? <Projects/> : <Navigate to={'/login'}/>}/>
        <Route path='/dashboard' element={isAuthorised? <Dashboar/> : <Navigate to={'/login'}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
