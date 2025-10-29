import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product({ product }) {
  const { handleAddCart } = useContext(CartContext);

  return (
    <article
      className="bg-surface rounded-2xl shadow-md overflow-hidden card-hover border border-border"
      key={product.id}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-surface-alt">
        <img 
          className="product-image hover:scale-105 transition-transform duration-300" 
          src={product.image} 
          alt={product.name} 
        />
        {product.quantity < 10 && (
          <span className="absolute top-3 right-3 bg-error text-white badge">
            Low Stock
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="badge bg-primary-light text-primary mb-3">
          {product.category}
        </span>

        {/* Product Name */}
        <h2 className="font-bold text-2xl mb-2 text-text-primary line-clamp-2">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-text-secondary mb-4 line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={i < Math.floor(product.rating) ? "rating-star" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-text-secondary font-medium">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Price and Stock Info */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div>
            <p className="text-3xl font-extrabold text-text-primary">
              ${product.price}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-secondary">In Stock</p>
            <p className="text-sm font-semibold text-text-primary">
              {product.quantity} units
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="btn-primary w-full flex items-center justify-center gap-2"
          onClick={() => handleAddCart(product)}
        >
          <span className="text-xl">🛒</span>
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
}
