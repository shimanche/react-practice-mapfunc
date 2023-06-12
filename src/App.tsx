import { useState } from "react";
import "./styles.css";
import { User } from "./user";
import { UserData } from "./data/userdata";

export const App = () => {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>

      <User />
    </>
  );
};

// const user2 = {
//   admin: false,
//   email: "eric@test.com",
//   id: "1111fWSEqxJFRIqin8q",
//   name: "eric ken"
// };
