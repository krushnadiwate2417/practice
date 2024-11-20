const Payment = ({ labelHeading }) => {
  return (
    <>
      <label>{labelHeading}</label>
      <input placeholder="Enter Amount" />
      <button>{labelHeading}</button>
    </>
  );
};

export default Payment;
