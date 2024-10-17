import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import NotFound from "./views/NotFound.jsx";
import BackToTopButton from "./components/BacktoTop.jsx";
import HealthTips from "./components/healthtips.jsx"; // Import Back to Top Button

import Preloader from "./components/PreLoader";

import { color } from "framer-motion";
import PrivacyPolicy from "./views/PrivacyPolicy.jsx";
import TermsOfUse from "./views/Terms.jsx";


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

      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ProgressBar/>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route
              path="/"
              element={<Home mode={mode} textcolor={textcolor} />}
            />
            <Route
              path="/home"
              element={<Home mode={mode} textcolor={textcolor} />}
            />
            <Route path="/contact" element={<Contact mode={mode}/>} />
            <Route
              path="/about"
              element={<About mode={mode} textcolor={textcolor} />}
            />
            <Route
              path="/plans"
              element={<Plans mode={mode} textcolor={textcolor} />}
            />
            <Route
              path="/plans/:plansId"
              element={<Plans mode={mode} textcolor={textcolor} />}
            />
            <Route
              path="/workout/:workoutId"
              element={<Workout mode={mode} textcolor={textcolor} />}
            />
            <Route path="/progress" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/healthtips" element={<HealthTips />} />
            <Route
              path="/blog"
              element={<Blog mode={mode} textcolor={textcolor} />}
            />
            <Route
              path="/services"
              element={<Services mode={mode} textcolor={textcolor} />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
          <Footer />
          <BackToTopButton />
          <FItFlexChatBot/>
        </BrowserRouter>
      </Suspense>

    </>
  );
}

export default App;
