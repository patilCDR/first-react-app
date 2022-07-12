import React, { useState } from "react";

const Reg = () => {
  const [data, setData] = useState();

  const fruit = (name = "Jackfruit") => {
    console.log("my name is " + name);

    // if ("mango") {
    //   alert("yes");
    // }

    const one = 1;
    const two = 2;

    const sum = one + two;

    return <h1>{"my name is " + name + sum}</h1>;
  };

  // fruit("orange");

  const veg = (name = "tomato") => {
    //defining veg function
    return (
      <div>
        {fruit("grape")}
        <h1>{name}</h1> //return veg function
      </div>
    );
  };

  return (
    <div>
      <h4>{veg("potato")}</h4> //calling veg function
      <div>
        <h2>asdkfjaslkfjasdlfjsadflkjs</h2>
      </div>
    </div>
  );
};

export default Reg;
