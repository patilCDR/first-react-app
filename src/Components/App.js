import React from "react";
import Class_Components from "./Class_Components";
import Css_Styling from "./Css_Styling";
import Filter_Function from "./Filter_Function";
import Function_Components from "./Function_Components";
import { Increment_Decrement } from "./Increment_Decrement";
import Login_Form from "./Login_Form";
import Map_Function from "./Map_Function";
import OnChange_EventHandler from "./OnChange_EventHandler";
import OnSubmit_handler from "./OnSubmit";
import { On_Click } from "./On_Click";
import Signup_Form from "./Signup_Form";
import StateAndProps from "./StateAndProps";
import Use_Effect from "./Use_Effect";
import { Use_State } from "./Use_State";
import Calc from "./Calc";

const App = () => {
  return (
    <div>
      <Class_Components />
      <Function_Components />
      <StateAndProps />
      <Css_Styling />
      <On_Click />
      <Use_State />
      <Increment_Decrement />
      <Use_Effect />
      <OnChange_EventHandler />
      <OnSubmit_handler />
      <Map_Function />
      <Filter_Function />
      <Signup_Form />
      <Login_Form />
      <Calc />
    </div>
  );
};
export default App;
