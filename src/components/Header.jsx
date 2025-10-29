import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart, setDisplayCart, displayCart, cartLength } =
    useContext(CartContext);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-3">
            <div className="text-5xl">🏬</div>
            <div>
              <h1 className="text-3xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Product Catalog
              </h1>
              <p className="text-text-secondary text-sm mt-0.5">
                Discover amazing products
              </p>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setDisplayCart(!displayCart)}
            className="relative btn-primary flex items-center gap-2 group"
          >
            <span className="text-xl">🛒</span>
            <span className="font-semibold">Cart</span>
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {cart.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
