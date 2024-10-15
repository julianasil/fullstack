import { useEffect, useState } from "react";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/products/ProductCard";
import Button from "./components/products/Button";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  useEffect(() => {
    // call the api
    const getProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();

    // Run when this component is destroyed or unmount
    return () => {};
  }, []);

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />
      {!loading ? (
        <div className="flex flex-col gap-4">
          {products.map((product) => (
			<><ProductCard imageSrc={product.image}
				  name={product.title}
			  ></ProductCard></>
          ))}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </FilterProductTable>
  );
}

export default App;