import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const Home = React.lazy(() => import("./views/Home.jsx"));
import "./index.css";
import {Route,  Router, Routes, createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Contact from "./views/Contact.jsx";
import { FirebaseProvider } from "./context/Firebase.jsx";
import Profile from "./views/Profile.jsx";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      
      {
        path: "plans/",
        element: <div>Plans</div>,
      },
      {
        path: "workout/:day",
        element: <div>workout day,huihui</div>,
      },
      {
        path: "plans/:planId",
        element: <div>Plans id</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: <Profile />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
      <ToastContainer />
    </FirebaseProvider>

  </React.StrictMode>
);

