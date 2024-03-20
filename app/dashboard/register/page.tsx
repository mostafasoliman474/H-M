import React from 'react'

const page = () => {
  return (
    <div className='max-w-4xl mx-auto my-10 flex flex-col gap-8 '>
      <h1 className='font-normal text-xl pb-2 border-b border-gray-300 text-[#222]'>CREATE AN ACCOUNT</h1>
      <div className='flex '>
        <div >
          <h2 className='font-semibold text-base'>Sign up with email address</h2>
          <form className='flex flex-col gap-4'>

            <div className='input_container'>
              <input type='text' className='input_register' aria-required="true" required />
              <label className='lable'>
                Full Name
              </label>
            </div>
            <div className='input_container'>
              <input type='email' className='input_register' aria-required="true" required />
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
            <div className='flex gap-4 items-center'>
              <input type='checkbox' className='transformscale'/>
              <label className='font-medium text-xs max-w-[60%]'>I would like to receive exclusive deals from H&M</label>
            </div>
            <p className='text-xs max-w-[60%]'>By registering you agreed to <a className='underline opacity-50 hover:opacity-85'>our Terms & Conditions</a> and <a>Privacy Policy.</a></p>
            <input type='submit' value="CREATE AN ACCOUNT" className='py-3 font-semibold  px-5 bg-[#222] text-[#ffffff] cursor-pointer max-w-[60%]'/>
          </form>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default page