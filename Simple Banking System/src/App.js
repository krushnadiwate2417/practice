import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./components/UserContext";

import CreateUser from "./components/CreateUser";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [balance, setBalance] = useState(0);
  const [loan, setLoan] = useState(0);

  return (
    <UserContext.Provider
      value={{
        user: userName,
        setUserName,
        userId: userId,
        setUserId,
        balance: balance,
        setBalance,
        loan: loan,
        setLoan,
      }}
    >
      <div>
        <CreateUser />
      </div>
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
