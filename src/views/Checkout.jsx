import React from 'react'
import CustomerInfo from '../components/CustomerInfo'
import SummaryTable from '../components/SummaryTable'

const Checkout = () => {
  return (
    <div className='container d-grid grid1-2'>
      <SummaryTable />
      <CustomerInfo />
    </div>
  )
}

export default Checkout