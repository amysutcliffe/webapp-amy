import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { Card } from "./Card/card.jsx";
import { Hooks } from "./Card/Hooks/Hooks.jsx";
import "./styles.css";
import Vacation from "./Vacation.jsx";
import Conversion from "./Conversion.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/hooks",
        element: <Hooks />,
      },
      {
        path: "/elements",
        element: <App />,
      },
      {
        path: "/selectors",
        element: (
          <Card
            title={"React"}
            link={"https://react.dev"}
            logo={<img src={reactLogo} />}
          />
        ),
      },
      {
        path: "/vacation",
        element: <Vacation />,
      },
      {
        path: "/conversion",
        element: <Conversion />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// hier inhalt von navigation
