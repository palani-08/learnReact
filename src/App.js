import React from "react";
import Welcome from "./Welcome";
import Welcomeclass from "./WelcomeClass";
import Button from "./Button";
import Counter from "./Counter";
import ConditionalOne from "./ContitionalOne";
import NameList from "./NameList";
import FormInp from "./FormInp";
function App() {
  return (
    <div>
      <FormInp />
      {/* <NameList /> */}
      {/* <Welcome name="palani" fullName="palani pavan" /> here we are passing props which can be accessed in welcome.js */}
      {/* <Welcomeclass />  */}
      {/* <Button /> */}
      {/* <Counter /> */}
      {/* <ConditionalOne /> */}
    </div>
  );
}

export default App;
