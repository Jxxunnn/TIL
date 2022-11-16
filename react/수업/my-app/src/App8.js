//npx create-react-app my-app --template basic-react
//cd my-app
// npm install styled-components styled-reset

import React from "react";
import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import shoppingCart from "./assets/shoppingCart.svg";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
    }
    span{
      color: red;
      font-size: 12px;
    }    
    a {
      text-decoration: none;
      color: inherit;
    }
    button {
      border: none;
      cursor: pointer;
    }

    /* 유틸리티 코드 + reset 코드 + 커스텀 reset 코드 */
    /* 한 줄 말줄임 */
    /* 두 줄 말줄임 */
`;
const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;
const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;
const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`;
const IconShoppingCart = styled.a`
  background: black url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`;
export default function App() {
  return (
    <ContainerMain>
      <GlobalStyle />
      <ProductList />
      <ShoppingCart />
    </ContainerMain>
  );
}

function ProductList() {
  async function request() {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    throw new Error("에러났다규");
  }
  const [productListData, setProductListData] = useState([]);
  useEffect(() => {
    request().then((res) => setProductListData(res));
  }, []);
  return (
    <ContainerProductList>
      {productListData.map((product, i) => (
        <ProductListItem key={i} {...product} />
      ))}
    </ContainerProductList>
  );
}
function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <ItemProductList>
      <ImgProduct
        src={"http://test.api.weniv.co.kr/" + thumbnailImg}
        alt={productName}
      />
      <p>{productName}</p>
      <span>하트</span>
      <p>{price}</p>
    </ItemProductList>
  );
}
function ShoppingCart() {
  return <IconShoppingCart href="#">쇼핑카트</IconShoppingCart>;
}
