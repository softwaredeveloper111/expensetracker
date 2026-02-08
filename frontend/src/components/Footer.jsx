import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full z-50 bg-zinc-900 flex justify-between items-center h-17  px-5 sm:px-10 lg:px-30 pt-8 pb-10'>
         
        <div className='flex flex-col text-center'>
          <span><i className="ri-history-line text-xl text-zinc-500"></i></span>
          <span className='text-sm text-zinc-500'>Records</span>
        </div>

        <div className='flex flex-col text-center'>
          <span><i className="ri-pie-chart-fill text-xl text-zinc-500"></i></span>
          <span className='text-sm text-zinc-500'>Charts</span>
        </div>
        

        <div className=''>
          <span className='w-12 h-12 bg-yellow-300 flex justify-center items-center rounded-full relative bottom-5'><i class="ri-add-large-fill text-zinc-900 font-bold text-lg"></i></span>
        </div>


        <div className='flex flex-col text-center'>
          <span><i className="ri-book-open-line text-xl text-zinc-500"></i></span>
          <span className='text-sm text-zinc-500'>Reports</span>
        </div>

        <div className='flex flex-col text-center text-xl'>
          <span><i className="ri-user-line text-zinc-500"></i></span>
          <span className='text-sm text-zinc-500'>Me</span>
        </div>

    </div>
  )
}

export default Footer