import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './Cour/Courses';
import Login from './componands/Login';
import SignUp from './componands/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Contact from './Contact/Contact';
function App() {
  const [ authUser, setAuthUser ] = useAuth();
  console.log(useAuth);
  

  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Course' element={<Courses />} /> */}
        <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />

        <Route path='/contact' element={<Contact/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<SignUp/>} />
      </Routes>
      <Toaster />



    </div>
  )
}

export default App
