import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Payment = ({
  labelHeading,
  setAmount,
  amount,
  handleDeposit,
  handleWithdraw,
  handleloan,
  handlePayLoan,
}) => {
  const [payLoanBtn, setPayLoanBtn] = useState(true);
  const loan = useSelector((state) => state.account.loan);
  useEffect(() => {
    if (loan > 0) {
      setPayLoanBtn(false);
    } else setPayLoanBtn(true);
  }, [loan]);

  const handleTransactions = () => {
    console.log(labelHeading);
    if (labelHeading == "Deposit Money") {
      handleDeposit(amount);
    }
    if (labelHeading == "Withdraw Money") {
      handleWithdraw(amount);
    }
    if (labelHeading == "Apply for Loan") {
      handleloan(amount);
    }
    if (labelHeading == "Pay Loan") {
      handlePayLoan(amount);
    }
  };

  return (
    <>
      <label>{labelHeading}</label>
      <input
        placeholder="Enter Amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        disabled={labelHeading == "Pay Loan" ? payLoanBtn : null}
        onClick={() => handleTransactions(amount)}
      >
        {labelHeading}
      </button>
    </>
  );
};

export default Payment;
