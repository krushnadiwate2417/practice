import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [child, setChild] = useState("");
  const navigation = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("child ", child);
    sessionStorage.setItem("childname", child);
    navigation("/game");
  }
  return (
    <>
      <div className="login-flex">
        <div className="login-grid">
          <label>Enter Name of Child</label>
          <input
            placeholder="Type here..."
            value={child}
            className="loginInput"
            onChange={(e) => setChild(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={!child}>
            Play
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
