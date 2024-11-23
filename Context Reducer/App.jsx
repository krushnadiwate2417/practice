import AccountContext from "./Contexts/AccountContext";
import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import WelcomePage from "./WelcomePage";
import UserContext from "./Contexts/UserContext";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [loan, setLoan] = useState(0);
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");

  const initialBalance = 0;

  const reducer = (balance, action) => {
    switch (action.type) {
      case "Deposit":
        return balance + Number(amount);
      case "Withdraw":
        return balance - Number(amount);
      case "Apply for Loan":
        setLoan(loan + Number(amount));
        return balance + Number(amount);
      case "Pay Loan":
        setLoan(loan - Number(amount));
      default:
        return balance;
    }
  };

  // const reducer = (balance, action) => {
  //   if (action.type === "Deposit") {
  //     console.log("in DEpo");
  //     return balance + Number(amount);
  //   }
  //   if (action.type === "Withdraw") {
  //     return balance - Number(amount);
  //   }
  //   if (action.type === "Loan") {
  //     return balance + Number(loan);
  //   }
  //   return balance;
  // };

  const [balance, dispatch] = useReducer(reducer, initialBalance);

  return (
    <UserContext.Provider value={{ userName, setUserName, userId, setUserId }}>
      <AccountContext.Provider
        value={{ balance, dispatch, setAmount, setLoan, amount, loan }}
      >
        <WelcomePage />
      </AccountContext.Provider>
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
