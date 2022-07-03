import React, { useContext } from 'react'
import appContext from '../context/context';
import styles from '../styles/ShoppingCart.module.scss';

const SummaryTable = () => {
  const { productsInCart, totalPriceProducts } = useContext(appContext);

  return (
    <div>
      <table
        className="table d-block"
        border="1"
        frame="void"
        rules="rows">
        <thead>
          <tr className={styles.tr}>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {
            [...productsInCart].map(([key, {data, amount}]) => (
              <tr
                key={key}
                className={styles.tr}>
                <th scope="col">{data.name}</th>
                <th scope="col">{amount}</th>
                <th scope="col">${data.price * amount}</th>
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr className={styles.tr}>
            <th
              colSpan="2"
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
    </div>
  )
}

export default SummaryTable