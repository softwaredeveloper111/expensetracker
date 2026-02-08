import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";


const Regsiter = () => {
  

  const {register,reset,handleSubmit,formState:{errors}} =useForm()
  
  function formSubmitEventHandler(data){
    console.log(data)
    reset()
  } 

  return (
    <div className='register w-screen min-h-screen bg-zinc-900 px-5 sm:px-10 lg:px-30 py-10'>
         <h1 className='text-2xl text-sky-300 flex items-center gap-2'> <i className="ri-account-circle-line text-3xl sm:text-4xl"></i> Create a new Account</h1>

         <form className='form w-[320px] sm:w-100 mt-20 flex flex-col gap-6' onSubmit={handleSubmit(formSubmitEventHandler)}>
          
          <div className='flex flex-col'>
          <input {...register("name",{
            required:{value:true,message:"name is required"},
            minLength:{value:4 , message:"minimum 4 characters required"},
            maxLength:{value:20, message:"maximum 20 characters exceed"}
          })} 
          aria-invalid={!!errors.name}
          autoComplete='off'
          aria-describedby='name-error'
          className='px-3 py-3 border border-sky-400 w-full text-white rounded-md outline-none' 
          type="text" 
          placeholder='name goes here.' />
          {errors.name && <span className='text-red-700 text-sm'>{errors.name.message}</span>}
          </div>
          

          <div className='flex flex-col'>
          <input {...register("email",{
            required:{value:true,message:"email is required"},
            pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,message:"email format is invalid"}
          })} 
          aria-invalid={!!errors.email}
          autoComplete='off'
          aria-describedby='email-error'
          className='px-3 py-3 border border-sky-400 w-full text-white rounded-md outline-none' 
          type="email" 
          placeholder='email goes here.' />
          {errors.email && <span className='text-red-700 text-sm'>{errors.email.message}</span>}
          </div>

          
          <div className='flex flex-col'>

          <input {...register("password",{
            required:{value:true,message:"password is required"},
            pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/ , message:"follow the given password format"}
          })} 
           aria-invalid={!!errors.password}
          aria-describedby='email-error'
          className='px-3 py-3 border border-sky-400 w-full text-white rounded-md outline-none' 
          type="password" 
          autoComplete='off'
          placeholder='password goes here.' />
          {errors.password && <span className='text-red-700 text-sm'>{errors.password.message}</span>}
          </div>

          <button type='submit' className='px-3 py-2 bg-sky-300 rounded-md w-fit cursor-pointer inline-block mx-auto lg:mx-0 mt-4 '>Create Account</button>
         </form>

         <div className='mt-20'>
            <span className='text-xl text-zinc-500 text-semibold block mb-2'>Password Rules:</span>
            <ul className='text-zinc-300 text-sm list-disc pl-4.5'>
              <li>Minimum 8 characters</li>
              <li>At least one lowercase letter</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>At least one special character: @$!%*?&</li>
            </ul>
         </div>

         <span className='mt-20 text-sm text-zinc-400 block sm:text-base'>Already have an account,please <Link to="/login" className='text-sky-400 border-b border-zinc-500'>login</Link></span>
    </div>
  )
}

export default Regsiter