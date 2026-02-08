import React, { useEffect }  from 'react'
import Nav from '../components/Nav'
import TransactionContainer from '../components/TransactionContainer'
import Footer from '../components/Footer'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {

   const location = useLocation();
  
   
   useEffect(()=>{
    if(location.state?.fromLogin){  
       toast.success("login sucessfully")
   }
   if(location.state?.fromRegister){  
       toast.success("user registration sucessfully")
   }
   },[location.state])

  return (
    <div className='relative home w-screen min-h-screen bg-black px-5 sm:px-10 lg:px-30 py-5'>
     <ToastContainer/>
     <Nav/>
     <TransactionContainer/>
     <Footer/>
    </div>
  )
}

export default Home