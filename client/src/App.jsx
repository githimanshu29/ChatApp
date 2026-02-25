import { Routes, Route } from 'react-router-dom'
import Login from './Pages/authentication/Login'
import SignUp from './Pages/authentication/SignUp'
import Home from './Pages/home/Home'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginUserThunk } from './store/slice/user/user.thunk'
 import {Toaster } from 'react-hot-toast'
 
function App() {
  const { isAuthenticated } = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log(isAuthenticated)

  useEffect(() => {
    dispatch(loginUserThunk());
  }, []) // ✅ dependency added

  return (
    <>
         <Toaster
        position="top-center"
        reverseOrder={false}
      />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App

