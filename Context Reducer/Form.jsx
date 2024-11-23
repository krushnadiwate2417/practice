import AccountContext from "./Contexts/AccountContext";
import { useContext } from "react";

const Form = ({ operation }) => {
  const { setAmount, setLoan, dispatch, amount, loan } =
    useContext(AccountContext);

  return (
    <>
      <div>
        <label>{operation} Money</label>
        <input
          placeholder="Enter Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        {operation === "Apply for Loan" ? (
          <input placeholder="Purpose " />
        ) : null}
        <button
          onClick={() => {
            dispatch({ type: operation });
            // operation == "Apply for Loan" ? setLoan(loan + Number(amount)) : null;
          }}
        >
          {operation}
        </button>
      </div>
    </>
  );
};

export default Form;
