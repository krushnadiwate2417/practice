import React from "react";
import ReactDOM from "react-dom/client";
import Letter from "./Letter";

const App = () => {
  return (
    <div>
      <Letter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
