import { InputBox } from "./components/ui/inputBox"
import { SiAdblock } from "react-icons/si";
function App() {
  

  return <div className="flex animate-glow  justify-center items-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 h-screen w-screen">
    <InputBox text="Enter Your Email" type="text">
    <SiAdblock size={"24px"}></SiAdblock>
    </InputBox>  

  </div>
}

export default App
