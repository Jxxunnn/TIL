import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";
import { data } from "../../database/data";
import "./homepage.css";
import React, { useEffect, useState, useContext } from "react";
import { callAPIResponse } from "../../database/callAPI";

export default function HomePage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [loadData, setLoadData] = useState(null);

  useEffect(() => {
    console.log("로딩중...");
  }, []);

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
