import React from "react";
import ReactDOM from "react-dom/client";
import Table from "./Table";
import Password from "./Password";

const App = () => {
  return (
    <div>
      <Table />
      <Password />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
