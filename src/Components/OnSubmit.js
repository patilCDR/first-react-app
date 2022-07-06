import React, { useState, axios } from "react";

function OnSubmit_handler() {
  const [data, setData] = useState({});
  const { username, password } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    axios.post("", data);
  };

  return (
    <div>
      <center>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange="{onChange}"
            placeholder="username"
          />
          <br />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChange}
            placeholder="Password"
          />
          <br />

          <input type="submit" name="submit " />
        </form>
      </center>
    </div>
  );
}

export default OnSubmit_handler;
