import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [displayCart, setDisplayCart] = useState(false);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartLength(cart.reduce((total, item) => total + item.qty, 0));
  }, [cart]);

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

  function handleRemoveItem(id) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  }

  function resetCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <CartContext.Provider
      value={{
        handleAddCart,
        cart,
        displayCart,
        setDisplayCart,
        handleRemoveItem,
        cartLength,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
