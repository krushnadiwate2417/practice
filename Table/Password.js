import { useState } from "react";

const Password = () => {
  const [show, setShow] = useState("password");
  const [showing, setShowing] = useState("Show Password");

  const handleClick = () => {
    if (showing === "Show Password") {
      setShowing("Hide Password");
      setShow("text");
    } else if (showing === "Hide Password") {
      setShowing("Show Password");
      setShow("password");
    }
  };

  return (
    <div>
      <input type={`${show}`} placeholder="Password.." />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {showing}
      </button>
    </div>
  );
};

export default Password;
