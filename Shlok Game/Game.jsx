import { useState, useEffect, useRef } from "react";
import sound from "./sounds/wow.mp3";
import ohno from "./sounds/ohno.mp3";
import happy from "./Videos/monkeyHappy.mp4";
import sad from "./Videos/monkeySad.mp4";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [refresh, setRefresh] = useState(0);
  const [alpha, setalpha] = useState("");
  const [put, setPut] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [loggedChild, setLoggedChild] = useState("");
  const [hide, setHide] = useState("hide");
  const [hideSad, setHideSad] = useState("hide");
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const navigation = useNavigate();

  useEffect(() => {
    const child = sessionStorage.getItem("childname");
    if (!child) {
      navigation("/");
    } else {
      setLoggedChild(child);
    }
    console.log("IN GAME ", sessionStorage.getItem("childname"));
  }, []);

  useEffect(() => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    const random = Math.floor(Math.random() * 26);
    setalpha(alphabets[random]);
  }, [refresh]);

  useEffect(() => {
    if (put.length > 0 && put.toLowerCase() === alpha) {
      setCorrect(correct + 1);
      new Audio(sound).play();
      setHide("");
      videoRef.current.play();
      setTimeout(() => {
        setHide("hide");
        setPut("");
        setRefresh(refresh + 1);
      }, 2500);
    } else if (put.length > 0 && put.toLowerCase() != alpha) {
      setWrong(wrong + 1);
      new Audio(ohno).play();
      setHideSad("");
      videoRef2.current.play();
      setTimeout(() => {
        setHideSad("hide");
        setPut("");
        setRefresh(refresh + 1);
      }, 2500);
    }
  }, [put]);

  return (
    <div className="grid-c">
      <div>
        <video ref={videoRef} controls className={hide} id="happyMonkey">
          <source src={happy} type="video/mp4" />
        </video>
      </div>
      <div className="flex-c">
        <h1>WELCOME {loggedChild.toUpperCase()}</h1>
        <div className="alpha-div">
          <h1 className="alpha">{alpha.toUpperCase()}</h1>
        </div>
        <input
          value={put.toUpperCase()}
          className="gameInput"
          id="text"
          maxLength={1}
          onChange={(e) => {
            setPut(e.target.value);
          }}
        />

        <h1>Score 🏆</h1>
        <div className="correct">
          <h2>✅ Correct : {correct}</h2>
          <h2>❌ Wrong : {wrong} </h2>
        </div>
        <div>
          <button
            onClick={() => {
              setCorrect(0);
              setWrong(0);
              document.getElementById("text").value = "";
            }}
          >
            RESET
          </button>
          <button
            onClick={() => {
              correct > 0 || wrong > 0
                ? navigation("/result/" + correct + wrong)
                : alert("Play First!");
            }}
          >
            RESULT
          </button>
        </div>
      </div>
      <div>
        <video ref={videoRef2} controls className={hideSad} id="sadMonkey">
          <source src={sad} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Game;
