import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboar from './pages/Dashboar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/dashboard' element={<Dashboar/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
