import { User } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-4xl mx-auto my-10 flex flex-col gap-16   '>
      <h1 className='auth_headlines'>CREATE AN ACCOUNT</h1>
      <div className='flex '>
        <div  className='border-r border-gray-300 pr-32 flex-1'>
          <h2 className='auth_subtitle'>Sign in with email address</h2>
          <form className='flex flex-col gap-8 py-5'>

            
            <div className='input_container'>
              <input type='text' className='input_register' aria-required="true" required />
              <label className='lable'>
                Email Addresse
              </label>
            </div>
            <div className='input_container'>
              <input type='password' className='input_register' aria-required="true" required />
              <label className='lable' >
                Password
              </label>
            </div>
            <div className='flex items-center gap-6'>

              <input type='submit' value="SIGN IN" className='flex-1 py-3 font-semibold hover:opacity-60 px-5 bg-[#222] text-[#ffffff] cursor-pointer max-w-[60%]'/>
              <a className='text-xs flex-1 hover:underline cursor-pointer' href='#'>Forget password?</a>
            </div>
          </form>
        </div>
        <div className='pl-32 flex flex-col gap-8 '>
          <h1 className='auth_subtitle'>Sign up with social media</h1>
          <div className='logwith'>
            <img src='https://eg.hm.com/themes/custom/transac/alshaya_white_label/imgs/social-icons/facebook-login-logo.svg'/>
            <p className='logwith_text'>Sign in with Facebook</p>
          </div>
          <div className='logwith'>
            <img src='https://eg.hm.com/themes/custom/transac/alshaya_white_label/imgs/social-icons/google-login-logo.svg'/>
            <p className='logwith_text'>Sign in with Google</p>
          </div>
          <p>Don't have an account?</p>
          <a  className='flex items-center font-light px-3 py-1 hover:opacity-70 cursor-pointer max-w-[140px] text-sm gap-1  border-[1px] border-black'>
            <User className='w-5'/>
            Sign up here</a>
        </div>
      </div>
    </div>
  )
}

export default page