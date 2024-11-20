import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName, userId } from "../slices/userSlice";
import WelcomePage from "./WelcomePage";
import Operations from "./Operations";

const UserPage = () => {
  const [username, setuserName] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const handleName = (username) => {
    dispatch(userName(username));
  };
  const handleId = (id) => {
    dispatch(userId(id));
  };

  return (
    <div>
      <div className="userInput">
        <label>Username : </label>
        <input
          type="text"
          placeholder="Type here..."
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <label>UserId : </label>
        <input
          placeholder="Type here..."
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleName(username);
            handleId(id);
            const welcome = document.getElementById("welcome");
            welcome.classList.remove("hide");
            const operations = document.getElementById("operations");
            operations.classList.remove("hide");
          }}
        >
          Enter
        </button>
      </div>
      <div>
        <WelcomePage />
      </div>
      <div>
        <Operations />
      </div>
    </div>
  );
};

export default UserPage;
