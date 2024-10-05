import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loading from "./components/Loading.jsx";
import NotFound from "./views/NotFound.jsx";
import BackToTopButton from "./components/BacktoTop.jsx";
import HealthTips from "./components/Healthtips.jsx"; // Import Health Tips

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Home = lazy(() => import("./views/Home.jsx"));
const Contact = lazy(() => import("./views/Contact.jsx"));
const Register = lazy(() => import("./views/Register.jsx"));
const Login = lazy(() => import("./views/Login.jsx"));
const About = lazy(() => import("./views/About.jsx"));
const Profile = lazy(() => import("./views/Profile.jsx"));
const Plans = lazy(() => import("./views/Plans.jsx"));
const Workout = lazy(() => import("./views/Workout.jsx"));
// Import the Blog component (make sure the path is correct)
const Blog = lazy(() => import("./views/Blog.jsx"));

function App() {
  return (
    <>
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
            <Route path="/healthtips" element={<HealthTips />} />
            {/* Add route for the blog section */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <Footer />
          <BackToTopButton /> {/* Add Back to Top Button here */}
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
