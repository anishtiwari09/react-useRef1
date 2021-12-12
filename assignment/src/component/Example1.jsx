import { useEffect, useState } from "react";

export default function Example1({ title }) {
  console.log(title);
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  });
  const handleClick = () => {
    setCount(count + 2);
  };
  return (
    <>
      <h3>{title}</h3>
      <div>
        <h4>{count}</h4>
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}
