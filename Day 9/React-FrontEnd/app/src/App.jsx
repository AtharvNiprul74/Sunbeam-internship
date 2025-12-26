import { Route, Router, Routes } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import {ToastContainer,toast} from 'react-toastify'

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
