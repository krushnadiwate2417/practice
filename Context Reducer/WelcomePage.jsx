import { useContext, useEffect, useId, useState } from "react";
import UserContext from "./Contexts/UserContext";
import Operations from "./Operations";

const WelcomePage = () => {
  const [hiding, sethiding] = useState("hide");
  const [hidingINP, sethidingINP] = useState("");
  const [inpStatus, setInpStatus] = useState(true);
  const { userName, setUserName, userId, setUserId } = useContext(UserContext);

  useEffect(() => {
    userName.length > 0 && userId.length > 0
      ? setInpStatus(false)
      : setInpStatus(true);
  }, [userName, userId]);

  return (
    <>
      <div className={hidingINP}>
        <input
          placeholder="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          placeholder="userId"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <button
          onClick={() => {
            sethiding("");
            sethidingINP("hide");
          }}
          disabled={inpStatus}
        >
          Proceed
        </button>
      </div>
      <div className={hiding}>
        <div>
          <h1>User : {userName}</h1>
          <h1>Id : {userId}</h1>
        </div>
        <Operations />
      </div>
    </>
  );
};

export default WelcomePage;
