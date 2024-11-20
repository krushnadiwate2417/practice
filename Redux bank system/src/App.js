import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import UserPage from "./components/UserPage";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <UserPage />
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
