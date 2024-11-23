import Form from "./Form";
import AccountContext from "./Contexts/AccountContext";
import { useContext } from "react";

const forms = ["Deposit", "Withdraw", "Apply for Loan", "Pay Loan"];

const Operations = () => {
  const { balance, amount, loan } = useContext(AccountContext);

  return (
    <>
      <div>
        <h1>{balance}</h1>
        <h2>{loan}</h2>
        {forms.map((val, index) => {
          return <Form key={index} operation={val} />;
        })}
      </div>
    </>
  );
};

export default Operations;
