import React from "react";
import AAA from "./Components/AAA/AAA";

const App = () => {
  return (
    <>
      <h1>안녕!</h1>
      <AAA />
      <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
