import React from "react";

function Filter_Function() {
  //   const names = ["James", "Jhon", "paul", "Ringo", "George"];
  // const filtered = names.filter((name) => name.includes("J"));
  const arr = [10, 20, 30, 40, 50, 60, 70, 80];
  const filtered = arr.filter((item) => item > 40);
  return (
    // <div>
    //   {filtered.map((item) => (
    //     <li>{item}</li>
    //   ))}
    // </div>
    <div>
      {filtered.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default Filter_Function;
