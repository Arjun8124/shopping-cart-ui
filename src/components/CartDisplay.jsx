import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDisplay() {
  const { setDisplayCart, cartLength, cart, handleRemoveItem, resetCart } =
    useContext(CartContext);
  return (
    <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
          <span className="text-3xl">🛒</span>
          Shopping Cart
        </h2>
        <button
          onClick={() => setDisplayCart(false)}
          className="text-text-secondary hover:text-text-primary transition-colors text-2xl"
        >
          ✕
        </button>
      </div>

      {cartLength > 0 ? (
        <div className="space-y-4">
          <button
            onClick={resetCart}
            className="bg-red-500 px-3 py-2 rounded-lg text-white cursor-pointer"
          >
            Clear List
          </button>
          {cart.map((item) =>
            item.qty > 0 ? (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-surface-alt p-4 rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-text-primary">
                    {item.name}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-4xl bg-red-500 rounded-2xl text-white px-3 cursor-pointer"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    -
                  </span>
                  <span className="badge bg-primary text-white">
                    Qty: {item.qty}
                  </span>
                  <span className="font-bold text-xl text-text-primary">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">Your cart is empty</p>
          <p className="text-text-secondary text-sm mt-2">
            Add some products to get started!
          </p>
        </div>
      )}
    </div>
  );
}
