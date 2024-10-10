
import "./App.css";
import { Suspense, lazy, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loading from "./components/Loading.jsx";
import NotFound from "./views/NotFound.jsx";
import BackToTopButton from "./components/BacktoTop.jsx";
import HealthTips from "./components/healthtips.jsx"; // Import Back to Top Button
import { color } from "framer-motion";


// Lazy load components
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Home = lazy(() => import('./views/Home.jsx'));
const Contact = lazy(() => import('./views/Contact.jsx'));
const Register = lazy(() => import('./views/Register.jsx'));
const Login = lazy(() => import('./views/Login.jsx'));
const About = lazy(() => import('./views/About.jsx'));
const Profile = lazy(() => import('./views/Profile.jsx'));
const Plans = lazy(() => import('./views/Plans.jsx'));
const Workout = lazy(() => import('./views/Workout.jsx'));
const Blog = lazy(() => import('./views/Blog.jsx'));
const Services = lazy(() => import('./views/Services.jsx'));
const LogMeal = lazy(() => import('./components/Nutrition/LogMeal.jsx')); // Make sure the path is correct

function App() {

  const [mode,setMode] = useState('light') ;
  const [textcolor,settextcolor] = useState('black') ;

  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark') ;
      document.body.style.backgroundColor = '#111118';
      document.body.style.color = '#ffffff';
      settextcolor('white') ;
    }
    else{
      setMode('light') ;
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      settextcolor('black') ;
    }
  };

  return (
    <Router>
      <Suspense fallback={<Loading />}>

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/log-meal" element={<LogMeal />} />
          <Route path="/healthtips" element={<HealthTips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTopButton /> {/* Add Back to Top Button here */}

      </Suspense>
    </Router>
  );
}

export default App;
