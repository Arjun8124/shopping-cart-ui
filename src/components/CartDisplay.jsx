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
          {/* Clear Cart Button */}
          <div className="flex justify-end">
            <button
              onClick={resetCart}
              className="bg-error hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold cursor-pointer transition-all hover:shadow-md flex items-center gap-2"
            >
              <span className="text-lg">🗑️</span>
              Clear Cart
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-3">
            {cart.map((item) =>
              item.qty > 0 ? (
                <div
                  key={item.id}
                  className="flex gap-4 items-center bg-surface-alt p-4 rounded-xl border border-border hover:shadow-lg transition-all duration-200 hover:border-primary/30"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg shadow-sm"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-text-primary truncate">
                      {item.name}
                    </h3>
                    <p className="text-text-secondary text-sm mt-1">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  {/* Quantity and Price Controls */}
                  <div className="flex items-center gap-4">
                    {/* Remove Button */}
                    <button
                      className="w-10 h-10 bg-error hover:bg-red-600 rounded-full text-white font-bold text-2xl flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-md"
                      onClick={() => handleRemoveItem(item.id)}
                      title="Remove one item"
                    >
                      −
                    </button>

                    {/* Quantity Badge */}
                    <div className="flex flex-col items-center">
                      <span className="badge bg-primary text-white text-base px-4 py-1">
                        Qty: {item.qty}
                      </span>
                    </div>

                    {/* Total Price */}
                    <div className="text-right min-w-[80px]">
                      <p className="text-xs text-text-secondary mb-1">Total</p>
                      <span className="font-bold text-xl text-primary">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* Cart Summary */}
          <div className="border-t-2 border-border pt-6 mt-6">
            <div className="bg-primary-light rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-text-primary">
                  Subtotal:
                </span>
                <span className="text-2xl font-bold text-text-primary">
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
          </div>
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
