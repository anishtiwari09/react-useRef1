import { useEffect, useRef, useState } from "react";
export default function Example2({ title }) {
  console.log("calling...", Date.now());
  const refTimerRef = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    handleStart();
  }, []);
  const handlePause = () => {
    clearInterval(refTimerRef.current);
    refTimerRef.current = null;
  };
  const handleStart = () => {
    if (!refTimerRef.current)
      refTimerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  };
  const handleReset = () => {
    handlePause();
    setCount(0);
  };
  console.log(refTimerRef.current, Date.now());
  return (
    <>
      <h3>{title}</h3>
      <div>
        <h2>{count}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
