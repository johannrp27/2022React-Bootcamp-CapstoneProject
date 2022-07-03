import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import appContext from '../context/context';
import styles from '../styles/ShoppingCart.module.scss';

const ShoppingCart = () => {
  const { productsInCart, removeItem, totalPriceProducts, modifyAmount } = useContext(appContext);

  return (
    <>
      {
        !productsInCart.size
        ? ( <h4>No items in cart</h4>)
        : (
          <div className='container'>
            <div className='d-flex flex-column gap-5 justify-content-center'>
              <table
                className="table d-block"
                border="1"
                frame="void"
                rules="rows">
                <thead>
                  <tr className={styles.tr}>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    [...productsInCart].map(([key, {data, amount}]) => (
                      <tr
                        key={key}
                        className={styles.tr}>
                        <th scope="col">
                          <img
                            className={styles.img}
                            src={data.mainimage.url}
                            alt={data.mainimage.alt} />
                        </th>
                        <th scope="col">{data.name}</th>
                        <th scope="col">${data.price}</th>
                        <th scope="col">
                          <div className="relative">
                            <input
                              type="number"
                              name="amountProduct"
                              id="amountProduct"
                              className='text-center'
                              onChange={({target}) => modifyAmount(key, target.value)}
                              min={0}
                              value={amount} />
                            {
                              amount === data.stock && (
                                <p className='absolute left-0 right-0 small fw-bold'>
                                  You selected all stock
                                </p>
                              )
                            }
                          </div>
                        </th>
                        <th scope="col">${data.price * amount}</th>
                        <th scope="col">
                          <button
                            onClick={() => removeItem(key)}
                            className={`${styles.removeBtn} btn`}>
                            <FontAwesomeIcon
                              className={styles.removeItem}
                              icon="trash-can" />
                          </button>
                        </th>
                      </tr>
                    ))
                  }
                </tbody>
                <tfoot>
                  <tr className={styles.tr}>
                    <th
                      colSpan="4"
                      className='text-end'>
                      Total:
                    </th>
                    <th
                      colSpan="1"
                      className='text-center'>
                      ${totalPriceProducts}
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className='text-end'>
                <button className='btn'>Proceed to checkout</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ShoppingCart