import { useContext } from "react";
import Product from "./components/Product";
import { ProductContext } from "./context/ProductContext";
export default function App() {
  const { loading, error, products } = useContext(ProductContext);
  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-5 underline">
        🏬 Product Catalog
      </h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
