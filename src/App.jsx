import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loading from "./components/Loading.jsx";
import NotFound from "./views/NotFound.jsx";
import BackToTopButton from "./components/BacktoTop.jsx";
import HealthTips from "./components/healthtips.jsx"; // Import Back to Top Button
import Preloader from "./components/PreLoader";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Home = lazy(() => import("./views/Home.jsx"));
const Contact = lazy(() => import("./views/Contact.jsx"));
const Register = lazy(() => import("./views/Register.jsx"));
const Login = lazy(() => import("./views/Login.jsx"));
const About = lazy(() => import("./views/About.jsx"));
const Profile = lazy(() => import("./views/Profile.jsx"));
const Plans = lazy(() => import("./views/Plans.jsx"));
const Workout = lazy(() => import("./views/Workout.jsx"));

function App() {
  // Preloader logic
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000); // Preloader visible for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/plans/:plansId" element={<Plans />} />
              <Route path="/workout/:workoutId" element={<Workout />} />
              <Route path="/progress" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/healthtips" element={<HealthTips />} />
            </Routes>
            <Footer />
            <BackToTopButton />
          </BrowserRouter>
        </Suspense>
      )}
    </>
  );
}

export default App;
