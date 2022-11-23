import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";
import { data } from "../../database/data";
import "./homepage.css";
import React from "react";

export default function HomePage() {
  return (
    <main>
      {data !== null ? (
        <>
          <ul>
            {data.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </ul>
          <Cart />
        </>
      ) : (
        <FailLoadData />
      )}
    </main>
  );
}
