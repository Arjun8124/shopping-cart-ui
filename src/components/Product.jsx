export default function Product({ product }) {
  return (
    <div
      className="bg-gray-200 shadow-lg p-7 rounded-lg m-5 flex flex-col justify-center"
      key={product.id}
    >
      <img className="mb-3" src={product.image} alt={product.name} />
      <h1 className="font-bold text-2xl mb-3">{product.name}</h1>
      <h1 className="text-xl font-bold mb-3">Category : {product.category}</h1>
      <p className=" mb-3">{product.description}</p>
      <h2 className="text-2xl mb-3 font-extrabold">${product.price}</h2>
      <h3 className=" mb-3">Quantity : {product.quantity}</h3>
      <h2 className=" mb-3">Rating : {product.rating}</h2>
    </div>
  );
}
