import React, { useState, username, password, confirmPassword } from "react";

const Signup_Form = () => {
  const [data, setData] = useState({ hello: "hey" });
  // onChange Event Handler
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert("username must be at least 5 character");
    } else if (password !== confirmPassword) {
      alert("passwords are not matching");
    } else {
      console.log(data);
    }
  };
  return (
    <div style={{ backgroundColor: "red" }}>
      <center>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            placeholder="ConfirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            value="submit"
            name="submit"
            onClick={submitHandler}
          />
        </form>
      </center>
    </div>
  );
};

export default Signup_Form;
