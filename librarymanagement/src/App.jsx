import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Component/LandingPage'
import AdminPortal from './Component/Admin/AdminPortal'
import UsersPortal from './Component/User/UsersPortal'

const App = () => {
  return (
   <>
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage/>} path='/' />
                <Route element={<AdminPortal/>} path='/adminportal/*'/>
                <Route element={<UsersPortal/>} path='/usersportal/*'/>
            </Routes>
        </BrowserRouter>
   </>
  )
}

export default App