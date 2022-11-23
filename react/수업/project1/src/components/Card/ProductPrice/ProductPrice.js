import React from "react";

export default function ProductPrice({ productPrice }) {
  return (
    <strong>
      {productPrice}
      <span>원</span>
    </strong>
  );
}
