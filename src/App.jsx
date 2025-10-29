import { useContext } from "react";
import Product from "./components/Product";
import { ProductContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContext";

export default function App() {
  const { loading, error, products } = useContext(ProductContext);
  const { cart, displayCart, setDisplayCart } = useContext(CartContext);
  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
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
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {cart.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="loading-spinner"></div>
            <p className="mt-4 text-text-secondary text-lg">
              Loading products...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-error p-6 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center">
              <span className="text-2xl mr-3">⚠️</span>
              <div>
                <h3 className="text-lg font-semibold text-error">Error</h3>
                <p className="text-text-secondary mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            {displayCart && (
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
                
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-text-secondary text-lg">Your cart is empty</p>
                    <p className="text-text-secondary text-sm mt-2">Add some products to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
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
                          <h3 className="font-semibold text-lg text-text-primary">{item.name}</h3>
                          <p className="text-text-secondary text-sm mt-1">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="badge bg-primary text-white">
                            Qty: {item.qty}
                          </span>
                          <span className="font-bold text-xl text-text-primary">
                            ${(item.price * item.qty).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t border-border pt-4 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-text-primary">Total:</span>
                        <span className="text-3xl font-extrabold text-primary">
                          ${cart.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2)}
                        </span>
                      </div>
                      <button className="btn-primary w-full mt-4 text-lg">
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
