import { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import Operations from "./Operations";

const CreateUser = () => {
  const [hidingCred, setHidingCred] = useState("");
  const [hidingWel, setHidingWel] = useState("hide");
  const [hidingLoan, setHidingLoan] = useState("hide");
  const { user, setUserName, userId, setUserId, balance, loan } =
    useContext(UserContext);

  useEffect(() => {
    if (loan > 0) {
      setHidingLoan("");
    }
  }, [loan]);

  return (
    <div>
      <div id="Credentials" className={hidingCred}>
        <label>Username</label>
        <input
          placeholder="Type here ..."
          type="text"
          className="userName-Input"
          value={user}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>UserID</label>
        <input
          placeholder="Type here ..."
          className="userId-Input"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setHidingCred("hide");
            setHidingWel("");
          }}
        >
          Create
        </button>
      </div>
      <div id="Welcome" className={hidingWel}>
        <div className="info">
          <div>
            <h1>Welcome {user}</h1>
            <h2>UserID : {userId}</h2>
          </div>
          <div className="balanceDiv">
            <h1>Account Balance : {balance}</h1>
            <h2 className={hidingLoan}>You Have Loan Of : {loan}</h2>
          </div>
        </div>
        <Operations />
      </div>
    </div>
  );
};

export default CreateUser;
