import { useEffect, useState } from "react";
import Product from "./components/Product";
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:8000/products");
        if (!res.ok) throw new Error("Cannot able to fetch the products data!");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}
      {!loading && !error && (
        <div className="max-w-xl mx-auto rounded-2xl py-7 shadow-lg">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
