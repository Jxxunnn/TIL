import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function App() {
  console.log(
    React.createElement("h1", { id: "recipe-0" }, "구운 연어") ===
    <h1 id="recipe-0">구운 연어</h1>
  );
  return <div></div>;
}
