import React, { useState } from "react";

const Login_Form = () => {
  const [data, setData] = useState({});
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <center>
        <form>
          <input
            type="text"
            name={username}
            value={data.username}
            onChange={changeHandler}
          />
          <br />
          <input
            type="text"
            name={password}
            value={data.password}
            onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="submit"
            onClick={submitHandler}
          />
        </form>
      </center>
    </div>
  );
};

export default Login_Form;
