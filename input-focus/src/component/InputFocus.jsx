import { useRef } from "react";

export default function InputFocus({ title }) {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current && inputRef.current.focus();
  };
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <button onClick={handleFocus}>Click To Focus</button>
        <input type="text" ref={inputRef} />
      </div>
    </div>
  );
}
