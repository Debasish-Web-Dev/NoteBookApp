import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom";
import Courses from './Cour/Courses';
import Login from './componands/Login';
import SignUp from './componands/Signup';
function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Course' element={<Courses />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<SignUp/>} />
      </Routes>



    </div>
  )
}

export default App
