import React, { useState } from "react";

export const Use_State = () => {
  const [name, setName] = useState("Skillhub");
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <button onClick={() => setName("Telugu Skillhub")}>Change</button>
      </center>
    </div>
  );
};
