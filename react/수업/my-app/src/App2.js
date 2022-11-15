import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;
// const ContentsContainer = ()
function List() {}

function Navbar() {
  const [listName, setListName] = useState("about");
  const handleChangeId = (e) => {
    setListName(e.target.id);
  };
  const styleList = (id) => {
    return id === listName ? { color: "red" } : { color: "black" };
  };

  return (
    <>
      <ul>
        <li id="about" style={styleList("about")} onClick={handleChangeId}>
          About
        </li>
        <li id="product" style={styleList("product")} onClick={handleChangeId}>
          Product
        </li>
        <li
          id="cart"
          style={listName === "cart" ? { color: "red" } : { color: "black" }}
          onClick={handleChangeId}
        >
          Cart
        </li>
        <li
          id="contact"
          style={listName === "contact" ? { color: "red" } : { color: "black" }}
          onClick={handleChangeId}
        >
          Contact
        </li>
      </ul>
    </>
  );
}
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
