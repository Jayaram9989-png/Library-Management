import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import AddUsers from './AddUsers'
import Users from '../Users'

const AdminPortal = () => {
  return (
    <>
        <div>
            <Navbar/>
            <Routes>
              <Route element={ <Home/> } path='/' />
              <Route element= {<Books/>} path='/books/'/>
              <Route element={<ReadBooks/>} path='/readbooks/:id'/>
              <Route element={<AddBooks/>} path='/addbooks/' />
              <Route element={<AddUsers/>} path='/addusers/'/>
              <Route element={<Users/>} path='/users/' />
            </Routes>
        </div>
    </>
  )
}

export default AdminPortal