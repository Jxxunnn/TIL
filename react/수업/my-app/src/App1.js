import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "개발자 무릎 담요", price: 17500 },
    { id: 2, title: "디발자 무릎 담요", price: 27500 },
    { id: 3, title: "누발자 무릎 담요", price: 37500 },
    { id: 4, title: "호발자 무릎 담요", price: 47500 },
  ]);
  return (
    <div className="App">
      <ProductList items={items}></ProductList>
    </div>
  );
}
function ProductList({ items }) {
  return items.map(({ id, title, price }, i) => (
    <Product key={id} title={title} price={price} index={i}></Product>
  ));
}
function Product({ id, title, price, index }) {
  console.log(id, title);
  return (
    <>
      <h2>{`${index + 1} ${title}`}</h2>
      <p>{price}원</p>
    </>
  );
}

export default App;
