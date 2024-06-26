import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Router, Route, Outlet, BrowserRouter } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Home = lazy(() => import("./views/Home.jsx"));
const Contact = lazy(() => import("./views/Contact.jsx"));
const About = lazy(() => import("./views/About.jsx"));
const Profile = lazy(() => import("./views/Profile.jsx"));
const Plans = lazy(() => import("./views/Plans.jsx"));
const Workout = lazy(() => import("./views/Workout.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans:plansId" element={<Plans />} />
            <Route path="/workout:workoutId" element={<Workout />} />
            <Route path="/progress" element={<Profile />} />
            <Route path="/login" element={<Contact />} />
            <Route path="/signup" element={<Contact />} />
            <Route path="/*" element={<div>404 page not found</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
