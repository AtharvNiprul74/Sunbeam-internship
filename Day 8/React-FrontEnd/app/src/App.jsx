import { Route, Router, Routes } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
