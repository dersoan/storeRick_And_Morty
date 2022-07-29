import React from 'react'
import { BsBagXFill } from "react-icons/bs";
import styles from '../pages/Item.module.css' 

export function Item({name, price, itemIndex, id, handleRemoveItemFromCart }) {
  return (
    <div className={styles.cardList}>
        <h4 className={styles.font}>{name}</h4>
        <h4 className={styles.font}>R$ {price}</h4>
        <button onClick={() => handleRemoveItemFromCart(itemIndex)} ><BsBagXFill/></button> 
   
      </div>
    )
}


