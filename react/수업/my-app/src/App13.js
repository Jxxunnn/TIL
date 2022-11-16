import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <StarRating style={{ backgroundColor: "lightblue" }} />
    </div>
  );
}

/* StarRating */
const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return [
    <div
      onDoubleClick={(e) => alert("doble Click")}
      style={{ backgroundColor: "lightblue" }}
    >
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
    </div>,
  ];
}
function Star({ selected = false, onSelect = (f) => f }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}
