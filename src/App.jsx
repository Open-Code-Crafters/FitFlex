import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loading from "./components/Loading.jsx";
import NotFound from "./views/NotFound.jsx";
import BackToTopButton from "./components/BacktoTop.jsx";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Home = lazy(() => import("./views/Home.jsx"));
const Contact = lazy(() => import("./views/Contact.jsx"));
const Register = lazy(() => import("./views/Register.jsx"));
const Login = lazy(() => import("./views/Login.jsx"));
const About = lazy(() => import("./views/About.jsx"));
const Profile = lazy(() => import("./views/Profile.jsx"));
const Plans = lazy(() => import("./views/Plans.jsx"));
const Workout = lazy(() => import("./views/Workout.jsx"));
const Blog = lazy(() => import("./views/Blog.jsx"));
const Services = lazy(() => import("./views/Services.jsx"));
const Packages = lazy(() => import("./views/Packages.jsx")); // Main Packages component
const PackageDetails = lazy(() => import("./views/PackageDetails.jsx")); // New route for package details

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
            <Route path="/workout/:workoutId" element={<Workout />} />
            <Route path="/progress" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} /> {/* Main Packages page */}
            <Route path="/packages/:type" element={<PackageDetails />} /> {/* Dynamic package details */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
          <BackToTopButton />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
