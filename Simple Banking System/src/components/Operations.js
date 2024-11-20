import { useReducer, useState } from "react";

const Operations = () => {
  const [editBalance, setEditBalance] = useState(0);
  const [loan, setLoan] = useState(0);

  let initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "Deposit") {
      return state + Number(editBalance);
    }
    if (action.type === "Withdraw") {
      return state - Number(editBalance);
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
      <h1>Balance : {state}</h1>
      <h3 className="hide" id="loan">
        You have Loan of {loan}
      </h3>

      <div>
        <button>Deposit Money</button>
        <input
          placeholder="ENter Amount"
          onChange={(e) => {
            setEditBalance(e.target.value);
          }}
        />
        <button
          onClick={() => {
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
            setEditBalance(e.target.value);
          }}
        />
        <button
          onClick={() => {
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
            setLoan(e.target.value);
          }}
        />
        <input placeholder="Enter Purpose" />
        <button
          onClick={() => {
            dispatch({ type: "Loan" });
            const loan = document.getElementById("loan");
            loan.classList.remove("hide");
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
            setEditBalance(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setLoan(loan - editBalance);
          }}
        >
          Pay Loan
        </button>
      </div>
    </div>
  );
};

export default Operations;
