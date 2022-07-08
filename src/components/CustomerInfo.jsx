import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import appContext from '../context/context';
import { Link } from 'react-router-dom';

const CustomerInfo = () => {
  const {customerData, setCustomerData} = useContext(appContext);

  const nextStep = (e) => {
    e.preventDefault();
    console.log('Next Step');
  }
  const handleChange = ({name, value}) => {
    setCustomerData(old => ({
      ...old,
      [name]: value,
    }))
  }

  return (
    <div>
      <form onSubmit={nextStep}>
        <div className="d-flex flex-column gap-4 mb-3">
          <div className='d-flex flex-column'>
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              value={customerData.name}
              onChange={({target}) => handleChange(target)}
              autoComplete='off'
              name='name'
              placeholder='Full Name'
              id="name"/>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              value={customerData.email}
              onChange={({target}) => handleChange(target)}
              autoComplete='off'
              name='email'
              placeholder='email@example.com'
              id="email"/>

          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='zip'>Zip/Post</label>
            <input
              type="text"
              value={customerData.zip}
              onChange={({target}) => handleChange(target)}
              autoComplete='off'
              name='zip'
              placeholder='170721'
              id="zip"/>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='notes'>Order notes</label>
            <textarea
              name="notes"
              value={customerData.notes}
              onChange={({target}) => handleChange(target)}
              autoComplete='off'
              placeholder='Text any notes'
              id="notes"
              cols="30"
              rows="5" />
          </div>
        </div>
        <div className='d-flex justify-between'>
          <Link to="/cart">
            <button
              className='btn info'>
              <FontAwesomeIcon
                className="me-2"
                icon="chevron-left" />
              Go back to cart</button>
          </Link>
          <button
            type='submit'
            disabled={
              !customerData.name ||
              !customerData.email ||
              !customerData.zip
            }
            className='btn success'>
            Place Order
            <FontAwesomeIcon
              className="ms-2"
              icon="receipt" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default CustomerInfo