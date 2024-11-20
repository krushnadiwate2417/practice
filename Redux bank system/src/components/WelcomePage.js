import { useSelector } from "react-redux";
import Operations from "./Operations";

const WelcomePage = () => {
  const uName = useSelector((state) => state.user.name);
  const uId = useSelector((state) => state.user.id);
  const balance = useSelector((state) => state.account.balance);
  const loan = useSelector((state) => state.account.loan);
  return (
    <div className="hide" id="welcome">
      <div className="welcomeHeader">
        <div>
          <h1>Welcome {uName}</h1>
          <h2>User Id : {uId}</h2>
        </div>
        <div>
          <h1>Account Balance : {balance} </h1>
          <h3 id="loan" className="hide">
            YOu have loan of {loan}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
