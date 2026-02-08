import React from 'react'
import TransactionList from './TransactionList'

const TransactionContainer = () => {
  return (
    <div className='transactionContainer mt-32 flex flex-col gap-10  overflow-x-hidden overflow-y-auto '>

        <TransactionList/>

        <TransactionList/>

        <TransactionList/>
        <TransactionList/>
    </div>
  )
}

export default TransactionContainer