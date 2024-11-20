import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./components/UserContext";

import CreateUser from "./components/CreateUser";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider
      value={{
        user: userName,
        setUserName,
        userId: userId,
        setUserId,
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
