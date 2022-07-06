import React, { useState } from "react";

const Function_Components = () => {
  const [name, setName] = useState("Telugu Skillhub !!!");
  return (
    <div>
      <h1>Welcome To {name}</h1>
    </div>
  );
};

export default Function_Components;
