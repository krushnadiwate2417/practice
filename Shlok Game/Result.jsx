import { useParams } from "react-router-dom";

const Result = () => {
  const { score } = useParams();
  const arr = score.split("");
  const per =
    ((Number(arr[0]) - Number(arr[1])) / (Number(arr[0]) + Number(arr[1]))) *
    100;
  return (
    <>
      <div className="result-flex">
        <div className="result-grid">
          <h1>RESULT</h1>
          <div className="flex-div-result">
            <h2>Correct Played : {arr[0]}</h2>
            <h2>Wrong Played : {arr[1]}</h2>
          </div>
          <h2>Percentage : {per.toFixed(2)}%</h2>
          <h1 className={per < 35 ? "red" : "green"}>
            {per < 35 ? "FAIL" : "PASS"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Result;
