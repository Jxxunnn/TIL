import { useRef } from "react";
import React from "react";
import "./card.css";
import ProductImage from "./ProductImage/ProductImage";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";

export default function Card({ productName, price, thumbnailImg }) {
  //https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
  const likeBtn = useRef();
  function handleLikeBtn(e) {
    console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle("on");
  }
  return (
    <li>
      <div>
        <ProductImage {...{ thumbnailImg, productName }} />
      </div>
      <ProductName {...{ productName }} />
      <button ref={likeBtn} onClick={handleLikeBtn}>
        버튼
      </button>
      <div>
        <ProductPrice {...{ price }} />
      </div>
    </li>
  );
}
