export default function Product({ product }) {
  return (
    <div className="bg-gray-200 shadow-lg p-7 " key={product.id}>
      <img className="w-lg mb-3" src={product.image} alt={product.name} />
      <h1 className="font-bold text-3xl mb-3">
        {product.name} Category : {product.category}
      </h1>
      <p className="text-2xl mb-3">{product.description}</p>
      <h2 className="text-2xl mb-3">Price : ${product.price}</h2>
      <h3 className="text-2xl mb-3">Quantity : {product.quantity}</h3>
      <h2 className="text-2xl mb-3">Rating : {product.rating}</h2>
    </div>
  );
}
