import { useState } from 'react';
import { Mail, MessageCircle,Lock, User, Eye, EyeOff } from 'lucide-react';
import InputBox from '../components/ui/InputBox';
import Button from '../components/ui/Button';
import { authStore } from '../store/authStore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [visible,setVisible] = useState(false) 
  const {isSigninUp,signup}= authStore()
  const[data,setData] = useState({
    username:"" , 
    password:"" , 
    email:""
  }) 
  const navigate = useNavigate()
  function validate(){
    if(data.email===""|| data.username===""||data.password===""){
      console.log("value of data from inside validation is ",data)
      toast.error("empty fields are not allowed") 
      return false ; 
    }else{
      return true ; 
    }
  }

  return (
    <div className='min-h-scree w-screen  flex justify-center items-center p-4'>

    
    <div className='h-auto bg-white rounded-xl p-8 w-full max-w-md shadow-md'>
    <div className='flex flex-col  items-center'>
      <div>
          <div className='bg-linear-to-br mt-5 from-[#FF5722] to-[#FF7043] size-16 mb-10  rounded-xl transform rotate-45 p-4 flex justify-center items-center'>
            <MessageCircle size={"70px"} className='transform -rotate-45 text-white'/>
          </div>
      </div>
     
      <div className='flex flex-col justify-center items-center gap-3 mb-5'>
        <h1 className='text-3xl font-bold '>
          Create Account
        </h1>
        <span className=' text-gray-500'>
          Join us today and Start your Journey
        </span>
      </div>
      </div>
      <div className='gap-6 flex  flex-col'>
        <InputBox plcaeholder='don' label='Username' 
        onchange={(e)=>{
          setData({...data,username:e.target.value})
        }}
         type='text' isWidthFull={true}
          iconOnstart={<User size={"22px"}/>}/>
       
        <InputBox
        onchange={(e)=>{
          setData({...data,email:e.target.value})
        }}
         plcaeholder='xyz@gmail.com' 
         label='Email'
         type='text' 
         isWidthFull={true}
          iconOnstart={<Mail size={"22px"}/>}/>
       
        <InputBox
         onchange={(e)=>{
          setData({...data,password:e.target.value})
        }}
         plcaeholder='••••••••' label='Password'
         type={visible?"text":"password"} isWidthFull={true}
          iconOnstart={<Lock size={"20px"}/>} 
          iconOnEnd={visible?<EyeOff size={"22px"} onClick={()=>{setVisible(!visible)}}/>:<Eye size={"22px"} onClick={()=>{setVisible(!visible)}}/>}/>
      </div>
      <div className='mt-7'>
        <Button type='button'
        onClick={()=>{ 

          if(validate()){
            signup(data)
          }else{
            console.log("data after",data)
          }
        }}
        disabled={isSigninUp}
        variant='primary' 
        isWidthFull={true}
          label='Create Account'/>
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
      <div className='flex items-center justify-center text-gray-700 mb-2  mt-3'>
        <span>
          Already have an account ?    
        </span>
        <span 
        onClick={()=>{
          navigate('/signin')
        }}
        className='text-orange-500 font-sans cursor-pointer font-semibold'>
           sign in 
        </span>
      </div>
    </div>
   </div> 
  );
}

export default SignupPage