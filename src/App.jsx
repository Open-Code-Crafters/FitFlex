import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import NotFound from "./views/NotFound.jsx";
import BackToTopButton from "./components/BacktoTop.jsx";
import HealthTips from "./components/healthtips.jsx"; // Import Back to Top Button
import PrivacyPolicy from "./views/PrivacyPolicy.jsx";
import TermsOfUse from "./views/Terms.jsx";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Home = lazy(() => import("./views/Home.jsx"));
const Contact = lazy(() => import("./views/Contact.jsx"));
const Register = lazy(() => import("./views/Register.jsx"));
const Login = lazy(() => import("./views/Login.jsx"));
const ForgotPassword = lazy(() => import("./views/ForgotPassword.jsx"));
{
  ("forgot password location");
}

const About = lazy(() => import("./views/About.jsx"));
const Profile = lazy(() => import("./views/Profile.jsx"));
const Plans = lazy(() => import("./views/Plans.jsx"));
const Workout = lazy(() => import("./views/Workout.jsx"));
// const HealthTips = lazy(() => import("./components/Healthtips.jsx"));
// import HealthTips from './components/HealthTips'; // Make sure this path is correct
const Blog = lazy(() => import("./views/Blog.jsx"));
const Services = lazy(() => import("./views/Services.jsx"));


import ProgressBar from "./components/ProgressBar.jsx";
import DietRecommendation from "./components/DietRecommendation.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import UploadBlog from "./views/uploadBlog.jsx";
import Contributors from "./views/Contributors.jsx";
import { BlogProvider } from "../context/blogContext.jsx";
// import  BlogProvider  from "../context/blogContext.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const [textcolor, settextcolor] = useState("black");

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111118";
      document.body.style.color = "#ffffff";
      settextcolor("white");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      settextcolor("black");
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 80,
    });
  }, [])


  return (
    <>
      <Suspense fallback={<Loader />}>
        <BlogProvider>
          <BrowserRouter>
            <ProgressBar />
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
              <Route path="/contact" element={<Contact mode={mode} />} />
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
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              />{" "}
              {"forgot password path"}

              <Route path="/*" element={<NotFound />} />
              <Route path="/healthtips" element={<HealthTips />} />
              <Route
                path="/blog"
                element={<Blog mode={mode} textcolor={textcolor} />}
              />
              <Route

                path="/Contributors"
                element={<Contributors mode={mode} textcolor={textcolor} />}
              />
              <Route
                path="/services"
                element={<Services mode={mode} textcolor={textcolor} />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/dietrecommendation"
                element={<DietRecommendation />}
              />
              <Route path="/dietrecommendation" element={<DietRecommendation />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/uploadBlog" element={<UploadBlog />} />
            </Routes>
            <Footer />
            <BackToTopButton />

            {/* <FItFlexChatBot/> */}
          </BrowserRouter>
        </BlogProvider>
      </Suspense>
    </>
  );
}

export default App;
