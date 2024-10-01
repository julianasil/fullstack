import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const products = [
  // Sporting Goods
  { id: 1, name: "Tennis", price: 99.9, type: 1 },
  { id: 2, name: "Badminton", price: 59.9, type: 1 },
  { id: 3, name: "Basektball", price: 100, type: 1 },
  { id: 4, name: "Soccer", price: 65, type: 1 },

  // Electronics
  { id: 4, name: "IPod Touch", price: 99.99, type: 2 },
  { id: 5, name: "Iphone 5", price: 399.99, type: 2 },
  { id: 6, name: "Nexus 7", price: 199.9, type: 2 },
];

const headers = ["Sporting Goods", "Electronics"];

function App() {
  return (
    <FilterProductTable>
      <SearchBar />

      <ProductTable headers={headers} products={products} />
    </FilterProductTable>
  );
}

export default App;