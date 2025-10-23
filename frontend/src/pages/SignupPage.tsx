import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import InputBox from '../components/ui/InputBox';
import Button from '../components/ui/Button';

function SignupPage() {
  const [visible,setVisible] = useState(false) 

  return (
    <div className='h-auto bg-white rounded-xl p-4 w-full max-w-md'>
    <div className='flex flex-col  items-center'>
      <div>
          <div className='bg-linear-to-br mt-5 from-[#FF5722] to-[#FF7043] size-16 mb-10  rounded-xl transform rotate-45 p-4 flex justify-center items-center'>
            <User size={"70px"} className='transform -rotate-45 text-white'/>
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
         type='text' isWidthFull={true}
          iconOnstart={<User size={"22px"}/>}/>
       
        <InputBox plcaeholder=' xyz@gmail.com' label='Email'
         type='text' isWidthFull={true}
          iconOnstart={<Mail size={"22px"}/>}/>
       
        <InputBox plcaeholder='••••••••' label='Password'
         type={visible?"text":"password"} isWidthFull={true}
          iconOnstart={<User size={"22px"}/>} 
          iconOnEnd={visible?<EyeOff size={"22px"} onClick={()=>{setVisible(!visible)}}/>:<Eye size={"22px"} onClick={()=>{setVisible(!visible)}}/>}/>
      </div>
      <div className='mt-5'>
        <Button type='button' variant='primary' isWidthFull={true}  label='Create Account'/>
      </div>
    </div>
  );
}

export default SignupPage