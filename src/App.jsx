import { useContext } from "react";
import Product from "./components/Product";
import { ProductContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContext";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Header from "./components/Header";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  const { loading, error, products } = useContext(ProductContext);
  const { displayCart } = useContext(CartContext);

  return (
    <div className="min-h-screen pb-12">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {loading && <Loading />}
        {error && <Error />}
        {!loading && !error && (
          <>
            {displayCart && <CartDisplay />}
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
