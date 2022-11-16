import React from "react";

export default function App() {
  const data = { name: "j U ne", age: 18 };
  return (
    <div>
      <Menu {...data} />
    </div>
  );
}

function Menu({ name, age }) {
  return (
    <>
      <h1 id={name.toLowerCase().replaceAll(/ /g, "-")}>{name}</h1>
      <p>{age}</p>
    </>
  );
}
