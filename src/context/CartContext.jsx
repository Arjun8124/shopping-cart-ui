import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  function handleAddCart(newProduct) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === newProduct.id);

      if (existing) {
        return prev.map((item) =>
          item.id === newProduct.id
            ? { ...item, qty: Number(item.qty + 1) }
            : item
        );
      }
      return [...cart, { ...newProduct, qty: Number(1) }];
    });
  }

  return (
    <CartContext.Provider
      value={{ handleAddCart, cart, displayCart, setDisplayCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
