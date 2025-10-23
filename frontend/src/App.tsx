import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import HomePage from "./pages/HomePage"
import { authStore } from "./store/authStore"
import { useEffect } from "react"
function App() { 
  const {isAuthChecking,authUSer,isauthUSer} = authStore()
  useEffect(()=>{
    isauthUSer()
    console.log(isAuthChecking)
    console.log(authUSer)
  },[authUSer])
  return <Routes>
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path="/signin" element={<SigninPage/>}/>
    <Route path="/home" element={<HomePage/>}/>
    </Routes>
}

export default App