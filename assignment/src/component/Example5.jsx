import { useRef } from "react";

export const Example5 = () => {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const handleMoveTop = () => {
    if (ref.current) ref.current.scrollTop = 0;
  };
  const handleFocus = () => {
    if (inputRef.current) inputRef.current.focus();
  };
  return (
    <div>
      <div>
        <button onClick={handleFocus}>Focus</button>
        <input type="text" ref={inputRef} />
      </div>
      <button onClick={handleMoveTop}>Move To Top</button>
      <div
        ref={ref}
        style={{
          margin: "1rem",
          border: "1px solid black",
          maxHeight: 200,

          overflow: "scroll",
          width: "210px",
          padding: 20
        }}
      >
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            height: "1024px"
          }}
        ></div>
      </div>
    </div>
  );
};
