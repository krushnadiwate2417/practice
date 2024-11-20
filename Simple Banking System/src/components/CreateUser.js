import { useContext } from "react";
import UserContext from "./UserContext";
import Operations from "./Operations";

const CreateUser = () => {
  const { user, setUserName, userId, setUserId } = useContext(UserContext);

  return (
    <div>
      <div id="Credentials">
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
            const Credentials = document.getElementById("Credentials");
            Credentials.classList.add("hide");
            const Welcome = document.getElementById("Welcome");
            Welcome.classList.remove("hide");
          }}
        >
          Create
        </button>
      </div>
      <div id="Welcome" className="hide">
        <div className="info">
          <div>
            <h1>Welcome {user}</h1>
            <h2>UserID : {userId}</h2>
          </div>
        </div>
        <Operations />
      </div>
    </div>
  );
};

export default CreateUser;
