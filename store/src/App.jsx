import './App.css'
import FilterProductTable from './components/FilterProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const products = [
  //sporting goods
  {name: Tennis, price: 99.9, type: 1},
  {name: Tennis, price: 99.9, type: 1},
  {name: Tennis, price: 99.9, type: 1},

  //electronic goods
  {name: Laptop, price: 89.9, type: 2},
  {name: Laptop, price: 89.9, type: 2},
  {name: Laptop, price: 89.9, type: 2},
]

const headers = ["Sporting Goods", "Electronic Goods"]

function App() {
  return <FilterProductTable>
    <SearchBar />
    <ProductTable headers={headers} products={products} />
  </FilterProductTable> 
  
  
}

export default App
