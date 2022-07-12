import React, { useState } from "react";

const Registration = () => {
  const [data, setData] = useState();

  //   const number = (name = "default values", value = 100, male = false) => {
  //     console.log("the name is " + name + "My age is " + value + male);
  //     if (!male) {
  //       console.log("male");
  //     } else {
  //       console.log("female");
  //     }

  //     return (
  //       <div>
  //         <h1>{"The name is " + name + "My age is " + value + male}</h1>
  //       </div>
  //     );
  //   };
  //   number("vamshi", 23, true);
  //   number(32);
  //   number(undefined, 200);
  //   number("Reshma", 24, false);

  return (
    <div>
      <form>
        <center>
          <input name="username" value="username" />
          <input name="password" value="password" />
        </center>
      </form>
    </div>
  );
};

export default Registration;
