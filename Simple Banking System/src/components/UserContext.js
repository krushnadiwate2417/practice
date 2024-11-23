import { createContext } from "react";

const UserContext = createContext({
  user: "",
  userId: 0,
  balance: 0,
  loan: 0,
});

export default UserContext;
