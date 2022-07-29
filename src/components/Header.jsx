import styles from "./Header.module.css";
import { BsFillCartFill } from "react-icons/bs";
export function Header({ cart }) {

const totalPrice = cart.reduce((acc, current) => acc + current.id, 0)
console.log(cart);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="src/assets/logoRm.png" width={55}></img>
          <h1>The Rick and Morty</h1>
        </div>
        <div className={styles.shopcart}>
          <span>
            {cart.length} {cart.length <= 1 ? " Card" : " Cards"} no  <BsFillCartFill />
          </span>
          <span>
           
           Total:  R$ {totalPrice}
          </span>
        </div>
      </nav>
    </header>
  );
}
