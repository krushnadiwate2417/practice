import { createContext } from "react";

const UserContext = createContext({
  user: "",
  userId: 0,
});

export default UserContext;
