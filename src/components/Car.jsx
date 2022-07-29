import React from 'react'
import styles from './Car.module.css'
import { BsFillCreditCardFill, BsBagXFill } from "react-icons/bs";
import { Item } from '../pages/Item';

function Car({ cart, handleRemoveItemFromCart }) {
  return (
  <>
  <div className={styles.car}>
  <div>
    <h3>Lista de Produtos</h3>
      <ul>
        {cart.map((cartItem, index) =>(
          <Item key={index} itemIndex={index} name={cartItem.name} price={cartItem.price}
            handleRemoveItemFromCart={handleRemoveItemFromCart} />
         
        ))}
      </ul>
    </div>
  
  </div>
  <div className={styles.carButton}>
  
  <button >Pagar Agora <BsFillCreditCardFill/></button> 
  </div>
 
  </>
  )
}

export default Car