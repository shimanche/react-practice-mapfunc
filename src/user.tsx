import { useState } from "react";
import { UserData } from "./data/userdata";

const { user1, user2 } = UserData();

const users = [user1, user2];
console.log(user1.data);

console.log("user1", user1);
console.log("users", users);

users.map((user) => console.log("usermap", user));
users.map((user) => console.log("usermap.data", user.data));
users.map((user) => console.log("usermap.id", user.id));

console.log("users", { ...user1.data, id: user1.id });

users.map((user) =>
  console.log("usermap.spread", { ...user.data, id: user.id })
);

// setUserLists(userdata);
// setUserLists(users.map((user) => ({ ...user.data, id: user.id })));

export const User = () => {
  const [userLists, setUserLists] = useState([]);
  const userdata = users.map((user) => ({ ...user.data, id: user.id }));
  console.log("userdata", userdata);

  return (
    <>
      <h2>userdata page</h2>
    </>
  );
};
