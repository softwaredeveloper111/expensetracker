import React from 'react'
import Transaction from './Transaction'

const TransactionList = () => {
  return (
    <div className=''>
       <div className="upper flex justify-between items-center mb-3 text-zinc-400 text-[11px]">
        <span>8Feb Sunday</span>
        <span>Expenses: 8,555 &nbsp;&nbsp; income: 10,000</span>
       </div>
       <div className='lower flex flex-col gap-5'>
    
              <Transaction/>
              <Transaction/>
              <Transaction/>
              <Transaction/>
         
       </div>
    </div>
  )
}

export default TransactionList