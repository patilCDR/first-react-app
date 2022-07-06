import React, { useState } from "react";

export const Increment_Decrement = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </center>
    </div>
  );
};
