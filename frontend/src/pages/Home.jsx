import React from 'react'
import Nav from '../components/Nav'
import TransactionContainer from '../components/TransactionContainer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='relative home w-screen min-h-screen bg-black px-5 sm:px-10 lg:px-30 py-5'>
     <Nav/>
     <TransactionContainer/>
     <Footer/>
    </div>
  )
}

export default Home