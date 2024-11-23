import { useReducer, useState, useContext } from "react";
import UserContext from "./UserContext";

const Operations = () => {
  // const [editBalance, setEditBalance] = useState(0);
  // const [loan, setLoan] = useState(0);

  const { setBalance, setLoan, balance, loan } = useContext(UserContext);
  const [amount, setAmount] = useState(0);
  let initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "Deposit") {
      return state + Number(balance);
    }
    if (action.type === "Withdraw") {
      return state - Number(balance);
    }
    if (action.type === "Loan") {
      return state + Number(loan);
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      {/* <h1>Balance : {state}</h1>
      <h3 className="hide" id="loan">
        You have Loan of {loan}
      </h3> */}

      <div>
        <button>Deposit Money</button>
        <input
          placeholder="ENter Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setBalance(amount);
            dispatch({ type: "Deposit" });
          }}
        >
          Deposit
        </button>
      </div>

      <div>
        <button onClick={() => {}}>Withdraw Money</button>
        <input
          placeholder="ENter Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setBalance(amount);
            dispatch({ type: "Withdraw" });
          }}
        >
          Withdraw
        </button>
      </div>

      <div>
        <button onClick={() => {}}>Loan Money</button>
        <input
          placeholder="ENter Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <input placeholder="Enter Purpose" />
        <button
          onClick={() => {
            setBalance(amount);
            dispatch({ type: "Loan" });
          }}
        >
          Apply
        </button>
      </div>

      <div>
        <button onClick={() => {}}>Pay Loan Money</button>
        <input
          placeholder="ENter Amount"
          onChange={(e) => {
            setBalance(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setLoan(loan - balance);
          }}
        >
          Pay Loan
        </button>
      </div>
    </div>
  );
};

export default Operations;
