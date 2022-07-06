import React from "react";

function Map_Function() {
  //   const arr = ["React JS", "Node JS", "Express JS", "Angular JS"];
  const arr = [
    {
      id: 1,
      title: "React JS",
    },
    {
      id: 2,
      title: "Node JS",
    },
    {
      id: 3,
      title: "Express JS",
    },
    {
      id: 4,
      title: "Angular JS",
    },
  ];
  return (
    // <div>
    //   {arr.map((value, index) => (
    //     <li key={index}>{value}</li>
    //   ))}
    // </div>
    <div>
      {arr.map((value) => (
        <li key={value.id}>{value.title}</li>
      ))}
    </div>
  );
}

export default Map_Function;
