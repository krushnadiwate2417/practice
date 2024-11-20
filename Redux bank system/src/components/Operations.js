import Payment from "./Payment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyLoan, deposit, payLoan, withdraw } from "../slices/balanceSlice";

const forms = ["Deposit Money", "Withdraw Money", "Apply for Loan", "Pay Loan"];
const Operations = () => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleDeposit = (amount) => {
    dispatch(deposit(amount));
  };

  const handleWithdraw = (amount) => {
    dispatch(withdraw(amount));
  };

  const handleloan = (amount) => {
    dispatch(applyLoan(amount));
  };

  const handlePayLoan = (amount) => {
    dispatch(payLoan(amount));
  };

  return (
    <div id="operations">
      <div>
        <label>Deposit Money : </label>
        <input
          placeholder="Type here..."
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button onClick={() => handleDeposit(amount)}>Deposit</button>
      </div>

      <div>
        <label>Withdraw Money : </label>
        <input
          placeholder="Type here..."
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button onClick={() => handleWithdraw(amount)}>Withdraw</button>
      </div>

      <div>
        <label>Apply for Loan : </label>
        <input
          placeholder="Type here..."
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <input placeholder="PURPOSE..." />
        <button
          onClick={() => {
            handleloan(amount);
            const loan = document.getElementById("loan");
            loan.classList.remove("hide");
          }}
        >
          Apply
        </button>
      </div>

      <div>
        <label>Pay Loan : </label>
        <input
          placeholder="Type here..."
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button onClick={() => handlePayLoan(amount)}>Pay</button>
      </div>
      <div>
        {forms.map((val) => {
          <div>
            {console.log(val)}
            <Payment labelHeading={val} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Operations;
