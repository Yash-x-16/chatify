import { useState } from 'react';
import { Mail, MessageCircle,Lock,  Eye, EyeOff } from 'lucide-react';
import InputBox from '../components/ui/InputBox';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';
import { authStore } from '../store/authStore';
import {  useNavigate } from 'react-router-dom';
function SigninPage() { 
  const {isSigninUp,login}=authStore()
  const [visible,setVisible]= useState(false)
  const [data,setData]= useState({
    email:"" , 
    password:""
  })
  const navigate = useNavigate()
  function validate (){
    if(data.email===""||data.password===""){
      toast.error("empty field not allowed")
      return false
    }else{
      return true
    }
  }
  return (
    <div className='h-auto bg-white rounded-xl p-8 w-full max-w-md'>
    <div className='flex flex-col  items-center'>
      <div>
          <div className='bg-linear-to-br mt-5 from-[#FF5722] to-[#FF7043] size-16 mb-10  rounded-xl transform rotate-45 p-4 flex justify-center items-center'>
            <MessageCircle size={"70px"} className='transform -rotate-45 text-white'/>
          </div>
      </div>
     
      <div className='flex flex-col justify-center items-center gap-3 mb-5'>
        <h1 className='text-3xl font-bold '>
          Log in !
        </h1>
        <span className=' text-gray-500'>
          Log in to see your chats
        </span>
      </div>
      </div>
      <div className='gap-6 flex  flex-col'>   
        
        <InputBox plcaeholder=' xyz@gmail.com' 
        onchange={(e)=>{
          setData({...data,email:e.target.value})
        }}
        label='Email'
         type='text' isWidthFull={true}
          iconOnstart={<Mail size={"22px"}/>}/>
       
        <InputBox plcaeholder='••••••••' 
        
        onchange={(e)=>{
          setData({...data,password:e.target.value})
        }}

        label='Password'
         type={visible?"text":"password"} isWidthFull={true}
          iconOnstart={<Lock size={"20px"}/>} 
          iconOnEnd={visible?<EyeOff size={"22px"} onClick={()=>{setVisible(!visible)}}/>:<Eye size={"22px"} onClick={()=>{setVisible(!visible)}}/>}/>
      </div>
      <div className='mt-7'>
        <Button 
        disabled={isSigninUp}
        type='button'
         onClick={()=>{
          if(validate()){
            login(data)
          }
         }}
         variant='primary'
          isWidthFull={true}  label="logIn"/>
      </div> 
      <div className='flex mt-5 items-center justify-center text-gray-400 gap-3'>
        <div className=' border-t border-t-gray-300 w-44'>
        </div> 
        <span>
          or
        </span> 
        <div className='border-t border-t-gray-300 w-44'>
        </div> 
      </div>
      <div className='flex items-center justify-center text-gray-700 mb-2 mt-3'>
        <span>
          new to chatify?
        </span>
        <span
        onClick={()=>{
          navigate('/signup')
        }}
        className='text-orange-500 font-sans cursor-pointer font-semibold'>
          sign up 
        </span>
      </div>
    </div>
  )
}

export default SigninPage