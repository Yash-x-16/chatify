import {  Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import HomePage from "./pages/HomePage"
import { authStore } from "./store/authStore"
import { useEffect } from "react"
import PageLoader from "./components/PageLoader"
import { Toaster } from "react-hot-toast"
function App() { 
  const {isAuthChecking,authUser,isauthUSer} = authStore()

  // useEffect(()=>{
  //   isauthUSer()
  // },[isauthUSer])

  // if(isAuthChecking)
  //   return <div className="min-h-screen bg-[#efefed] flex items-center justify-center p-4 text-white">
  //    <PageLoader/>
  //   </div>
  
  return <div className="min-h-screen bg-[#efefed] flex items-center justify-center ">

    <Routes>  
    <Route path="/signup" element={!authUser?<SignupPage/>:<HomePage/>}/>
    <Route path="/signin" element={!authUser?<SigninPage/>:<HomePage/>}/>
    <Route path="/home" element={<HomePage/>}/>
    </Routes>
     <Toaster/>
    </div>
}

export default App