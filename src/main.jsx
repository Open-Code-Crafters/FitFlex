import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root.jsx";
import Navbar from "./components/Navbar.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/home",
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plans/",
    element: <div>Plans</div>,
  },
  {
    path: "/workout/:day",
    element: <div>workout day,huihui</div>,
  },
  {
    path: "/plans/:planId",
    element: <div>Plans id</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/progress",
    element: <div>profile</div>,
    errorElement: <div>404 Not Found</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
