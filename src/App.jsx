import { Header } from "./components/Header";
import { Magazines } from "./pages/Magazines";

import { useState } from "react";
import styles from "../App.module.css";
import "./styles/global.css";
import { Showcase } from "./pages/Showcase";
import { Footer } from "./components/Footer";
import Car from "./components/Car";

export function App() {
  const [cart, setCart] = useState([]);

  function handleAddItemToCard(image, name, id, price) {
    const itemObject = { image, name, id, price };
    setCart([...cart, itemObject]);
  }
  function handleRemoveItemFromCart(clickedItemIndex) {
   
    const filterredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filterredCart);
  }

  return (
    <>
      <Header cart={cart} />
      <div className={styles.wrapper}>
        <main>
          <Showcase handleAddItemToCard={handleAddItemToCard} />
        </main>
        <aside>
          <Car
            cart={cart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </aside>
      </div>
      <Footer />
    </>
  );
}
