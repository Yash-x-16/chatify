import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
function App() {  
  return <BrowserRouter>
  <Routes>
    <Route element={<Homepage/>} path="/dashboard"/>
  </Routes>
  </BrowserRouter> 
  
}

export default App
