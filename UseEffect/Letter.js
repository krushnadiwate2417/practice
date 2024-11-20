import { useState, useEffect } from "react";

const Letter = () => {
  const [count, setCount] = useState(0);
  const [alpha, setAlpha] = useState("");
  const [changeAlpha, setChangeAlpha] = useState(0);

  useEffect(() => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    const random = Math.floor(Math.random() * 26);
    setAlpha(alphabets[random]);
  }, [changeAlpha]);

  return (
    <div className="grid-c">
      <div className="alpha">
        <div className="box">
          <h1>{alpha.toUpperCase()}</h1>
        </div>
        <button
          onClick={() => {
            setChangeAlpha(changeAlpha + 1);
          }}
        >
          Change Alphabet
        </button>
      </div>
      <div className="num">
        <div className="box">
          <h1>{count}</h1>
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Change Number
        </button>
      </div>
    </div>
  );
};

export default Letter;
