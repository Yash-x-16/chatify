import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import Yash from "./components/cards/learningCard";
function App() {  
  return <BrowserRouter>
  <Routes>
    <Route element={<Yash onLogout={()=>{}} onOpenChat={()=>{}}/>} path="m"/>
    <Route element={<Homepage/>} path="/dashboard"/>
  </Routes>
  </BrowserRouter> 
  
}

export default App
