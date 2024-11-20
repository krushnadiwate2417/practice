import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WelcomePage = () => {
  const [hiding, setHiding] = useState("hide");
  const uName = useSelector((state) => state.user.name);
  const uId = useSelector((state) => state.user.id);
  const balance = useSelector((state) => state.account.balance);
  const loan = useSelector((state) => state.account.loan);

  useEffect(() => {
    if (loan > 0) {
      setHiding("");
    }
  }, [loan]);

  return (
    <div className="hide" id="welcome">
      <div className="welcomeHeader">
        <div>
          <h1>Welcome {uName}</h1>
          <h2>User Id : {uId}</h2>
        </div>
        <div>
          <h1>Account Balance : {balance} </h1>
          <h3 id="loan" className={hiding}>
            YOu have loan of {loan}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
