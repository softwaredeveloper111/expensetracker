import React from 'react'

const Transaction = () => {
  return (
    <div className='transaction w-full flex justify-between items-center'>
      <div className='left flex gap-2 items-center'>
        <span className='w-8 h-8 flex justify-center items-center bg-yellow-300 rounded-full'><i class="ri-briefcase-line text-white"></i></span>
        <span className='font-semibold text-white text-[14px]'>Shopping</span>
      </div>
      <span className='right text-white'>
        10,000
      </span>
    </div>
  )
}

export default Transaction