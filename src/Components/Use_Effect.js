import React, { useState, useEffect } from "react";

function Use_Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("clicked"), [count]);

  return (
    <div>
      <center>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </center>
    </div>
  );
}
export default Use_Effect;
