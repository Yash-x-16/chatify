import { Navigate, Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import HomePage from "./pages/HomePage"
import { authStore } from "./store/authStore"
import { useEffect } from "react"
function App() { 
  const {isAuthChecking,authUser,isauthUSer} = authStore()

  useEffect(()=>{
    isauthUSer()
    console.log(isAuthChecking)
    console.log(authUser)
  },[authUser])
  
  // if(isAuthChecking)
  //   return <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center p-4 text-white">
  //     loading ...
  //   </div>
  
  return <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center p-4">

    <Routes>
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path="/signin" element={!authUser?<SigninPage/>:<HomePage/>}/>
    <Route path="/home" element={authUser?<HomePage/>:<Navigate to={'/signin'}/>}/>
    </Routes>
    </div>
}

export default App