import { LoginComponent } from "../components/Auth/Login";
import { useState } from "react";
import { SignupComponent } from "../components/Auth/Signup";
import { AnimatePresence, motion } from "framer-motion";

export function AuthPage(){
const variants = {
  enterFromRight: { x: 100, opacity: 0 },
  enterFromLeft: { x: -100, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exitToLeft: { x: -100, opacity: 0 },
  exitToRight: { x: 100, opacity: 0 },
};
    const[active,inactive] = useState(false)

    return <div className="flex animate-glow   relative justify-center items-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 h-full w-full ">

        <div className="min-h-screen w-96    flex flex-col">

            <div className="flex flex-col justify-center items-center mt-10 " >
                <h1 className="text-4xl font-medium  text-transparent bg-clip-text inline-block bg-gradient-to-br from-emerald-200 to-emerald-500">
                    NexusChat
                </h1> 
                <span className="text-white font-medium mt-3">
                    where conversation spark connections
                </span>
            </div> 
            <div className="mt-5 h-max w-full  flex flex-col shadow-2xl p-4 rounded-2xl relative overflow-hidden transition-all duration-500 hover:shadow-3xl hover:bg-white/15 bg-white/10">
                <div className={`flex w-full p-3  bg-white/20 rounded-xl justify-between relative overflow-hidden  `}> 
                <div className={`absolute top-1 bottom-1  ${active ? 'left-1.5 right-1/2 mr-0.75' : 'right-1.5 left-1/2 mr-0.5'}'  bg-gradient-to-r from-emerald-400 to-teal-400  shadow-lg  w-1/2 transition-all duration-500 ease-out rounded-xl`}>
                </div>
                    <button
                     className="w-1/2   flex  z-10  justify-center py-1 rounded-md  transition-all delay-100"
                    > 
                        <span className="text-white cursor-pointer " onClick={()=>{inactive(true)}}> 
                            Login
                        </span>
                    </button>
                    <button  
                    className=" flex w-1/2 justify-center   z-10 py-1 rounded-md  transition-all delay-100"> 
                        <span className="text-white cursor-pointer" onClick={()=>{inactive(false)}}>
                                Signup
                        </span>
                    </button>
                </div> 
             
<AnimatePresence mode="wait">
  {active ? (
    <motion.div
      key="login"
      initial="enterFromLeft"
      animate="center"
      exit="exitToLeft"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <LoginComponent />
    </motion.div>
  ) : (
    <motion.div
      key="signup"
      initial="enterFromRight"
      animate="center"
      exit="exitToRight"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <SignupComponent />
    </motion.div>
  )}
</AnimatePresence>
               
            </div>
        </div>
    </div>
}