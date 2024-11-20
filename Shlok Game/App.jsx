import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import Game from "./Game";
import Result from "./Result";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/result/:score",
        element: <Result />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
