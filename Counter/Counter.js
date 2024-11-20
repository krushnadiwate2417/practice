import { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [randomNum, setRandomNum] = useState(0);
  const [hide, setHide] = useState("hide");
  const [num, setNum] = useState(0);
  const inputs = useRef(null);

  const handleInput = () => {
    if (num % 2) {
      inputs.current.value = "";
      setRandomNum(0);
    }
  };

  return (
    <div className="main-div">
      <div className="grid-c">
        <div className="addVal">
          <div className="val">
            <input
              className={hide}
              ref={inputs}
              id="inp"
              placeholder="Enter Value..."
              onChange={(e) => {
                setRandomNum(e.target.value);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                setNum(num + 1);
                setCount(count + Number(randomNum));
                hide == "hide" ? setHide("") : setHide("hide");
                handleInput();
              }}
            >
              Add
            </button>
          </div>
        </div>
        <button
          className="decbtn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Dec -
        </button>
        <h1>{count}</h1>
        <button
          className="incbtn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Inc +
        </button>

        <button
          className="clear btn"
          onClick={() => {
            setCount(0);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Counter;
