import { Grid, Typography, Box } from "@mui/material";
import homeImg1 from "../assets/home/homeImg1.jpg";
import "../styles/shared.css";

import homeImg2 from "../assets/home/homeImg2.avif";
import homeImg3 from "../assets/home/homeImg3.jpg";
import homeImg4 from "../assets/home/homeImg4.jpg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeSlider from "../components/HomeSlider";
import banImg1 from "../assets/home/banner2_1.jpg";
import flexible from "../assets/home/flexible.jpg";
import fitbody from "../assets/home/getinshape.jpg";

import workhard from "../assets/home/hardworkout.jpg";
import { useLocation } from "react-router-dom";
import gsap from 'gsap'

import {
  faDharmachakra,
  faDumbbell,
  faFire,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import FAQSection from "../components/FAQ";
import SuccessStories from "../components/SuccessStories";
import {
  Card,
  CardContent,
} from "../components/ui/card"
function Home({ mode, textcolor }) {
  const [fontVarient, setFontVarient] = useState("h1");
  const hehe = [
    {
      image: fitbody,
      title: "Get in shape today",
    },
    {
      image: banImg1,
      title: "It never gets easier",
    },
    {
      image: workhard,
      title: "Maximize your workout.",
    },
    {
      image: flexible,
      title: "Improve flexibility",
    },
  ];
  useEffect(() => {
    document.title = "FitFlex Zone-Home";
  }, []);
  const Imgs = [homeImg1, homeImg2, homeImg3, homeImg4];
  const TopMessage = [
    "Bring the Gym Home",
    "Build your dream muscles",
    "Lets Yoga lead our health",
    "Shape Your Best Self",
  ];
  const BottomMessage = [
    "Discover the best workout routines to stay fit without leaving your house.",
    "Build any muscle you want with our personalized workout plans.",
    "Find balance and inner peace with our home yoga guides.",
    "Sculpt a lean and flexible body with personalized exercise routines.",
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((count) => (count + 1) % 4);
    }, 4000);
    return () => clearInterval(time);
  }, [count]);

  useEffect(() => {
    const x = window.innerWidth;
    if (x < 900) {
      setFontVarient("h4");
    } else {
      setFontVarient("h3");
    }
  }, [window.innerWidth]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  //gsap starts

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure initial styles are set to scale 1 and opacity 1

      // Timeline for animation

      gsap.fromTo(
        ".homeGsap",
        {
          scale: 5, // Small size to simulate starting from a distance (z-axis)
          // Start from above the viewport
          opacity: 0, // Hidden initially
        },
        {
          scale: 1, // Full size upon impact
          y: 0, // Drop to its final position
          opacity: 1, // Fade in
          duration: 0.2, // Duration of the drop
          ease: "bounce.inOut",
          delay: 0.5,// Bounce effect on landing
          onComplete: () => {
            // Optional: Apply squash/stretch effect on impact
            gsap.to(".homeGsap", {
              scaleX: 0.5,
              scaleY: 0.5,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: "bounce.inOut",
            });
          },
        }
      );









    });

    // Cleanup GSAP context
    return () => {
      ctx.revert();
    };
  }, []);

  //gsap ends

  return (
    <div className=" relative overflow-hidden">
      <div className="grid  grid-cols-1 md:grid-cols-12 h-screen w-screen overflow-hidden">
        {/* Left section */}
        <div className=" md:col-span-5  bg-gradient-to-br from-[#FDC830] to-[#F37335] flex items-center justify-center">
          <div className="w-full px-8 text-center py-10 md:py-0">
            <h3 className="text-white text-4xl md:text-5xl font-bold mb-4">Welcome to</h3>
            <h1 className="text-white text-6xl md:text-8xl font-extrabold">FitFlex</h1>
            <h1 className="text-white text-6xl md:text-8xl font-semibold -mt-4">Zone</h1>
            <h4 className="text-white text-xl md:text-3xl font-semibold leading-8 mt-6">
              Transform Your Space, Transform Your Body
            </h4>
          </div>
        </div>

        {/* Right section */}
        <div className="col-span-12 md:col-span-7 flex items-center justify-center">
          <div
            className="w-full h-[55vh] md:h-full bg-cover bg-center flex flex-col items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(253, 200, 48, 0.5), rgba(243, 115, 53, 0.1)), url(${Imgs[count]})`,
            }}
          >
            <div className="relative z-10 p-2 md:p-5 backdrop-blur-sm">
              <h2 className="text-white text-4xl font-extrabold">
                {TopMessage[count]}
              </h2>
              <h4 className="text-white text-lg font-semibold leading-7">
                {BottomMessage[count]}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
          marginTop: "10px",
          paddingTop: "10px",
          paddingBottom: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            height: "6px",
            width: "20vw",
            background: "linear-gradient(45deg, #FDC830 0%,#F37335 100%)",
          }}
          data-aos="fade-right"
          data-aos-delay="500"
        ></div>
        {/* cusotmn css button */}

        {/* do not touch below code, idk how it works, {ps: just added marginTop, marginBottom} */}
        <div
          className="wrapper"
          style={{ marginTop: "50px", marginBottom: "50px" }}
          data-aos="fade-right"
          data-aos-delay='400'
        >
          <NavLink to="/plans" className="cta">
            <span className="transform skew-x-15"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              Start Exercise
              <FontAwesomeIcon icon={faFire} />
            </span>
            <span>
              <svg
                width="66px"
                height="43px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="arrow"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    className="two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    className="three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </span>
          </NavLink>
        </div>
        {/* okay now u may thouch below code */}

        <div
          style={{
            height: "6px",
            width: "20vw",
            background: "linear-gradient(45deg, #FDC830 0%,#F37335 100%)",
          }}
          data-aos="fade-right"
          data-aos-delay='300'
        ></div>
      </Box>
      <div className="flex flex-col items-center justify-center w-full">
        <div className=" md:text-4xl text-3xl w-full flex space-x-2 flex-col items-center justify-center text-center md:flex-row">
          <span className=" text-gray-600 sapce-x-4">Experience the</span>
          <span
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F37335] to-[#FDC830]"
          >
            #Transform With FitFlex
          </span>
        </div>


        <div className="w-full text-center p-4  text-base  md:text-xl  text-gray-500  font-semibold">
          Join our fitness program and transform your body and mind. Our expert trainers and supportive community will help you reach your goals, whether you're a beginner or an experienced athlete. Start your transformation with FitFlex today!
        </div>

        <div className="w-full py-24 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-24">
          {/* Variety Card */}
          <Card className="bg-gradient-to-b from-purple-500 to-purple-400 text-center p-6 shadow-md rounded-lg">
            <CardContent className="flex flex-col items-center text-white">
              <FontAwesomeIcon icon={faStar} size="5x" style={{ color: "orange" }} />
              <Typography className="text-3xl font-bold mt-4" style={{ fontSize: '35px' }}>
                Variety
              </Typography>
              <Typography className="mt-2">
                From HIIT to yoga, strength training to dance, explore a diverse range of workouts to keep your routine exciting and effective.
              </Typography>
            </CardContent>
          </Card>

          {/* Flexibility Card */}
          <Card className="bg-gradient-to-b from-indigo-500 to-indigo-400 text-center p-6 shadow-md rounded-lg">
            <CardContent className="flex flex-col items-center text-white">
              <FontAwesomeIcon icon={faDharmachakra} size="5x" style={{ color: "orange" }} />
              <Typography className="text-3xl font-bold mt-4" style={{ fontSize: '35px' }}>
                Flexibility
              </Typography>
              <Typography className="mt-2">
                Enjoy the freedom to exercise whenever it fits your day. No gym hours, no commutes—just you and your fitness goals.
              </Typography>
            </CardContent>
          </Card>

          {/* Motivation Card */}
          <Card className="bg-gradient-to-b from-orange-500 to-orange-400 text-center p-6 shadow-md rounded-lg">
            <CardContent className="flex flex-col items-center text-white">
              <FontAwesomeIcon icon={faDumbbell} size="5x" style={{ color: "orange" }} />
              <Typography className="text-3xl font-bold mt-4" style={{ fontSize: '35px' }}>
                Motivation
              </Typography>
              <Typography className="mt-2">
                Stay on track with interactive features, progress tracking, and regular updates. We will help you keep your eyes on the prize and push through challenges.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* banner */}
      <br />
      <br />
      <Box
        sx={{
          marginTop: "50px",
          width: "100vw",
          position: "relative",
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          style={{
            width: "100vw",
            height: "100%",
            background:
              "linear-gradient(45deg, #232526 0%, #1F1C2C 35%, #7f8487 100%)",
            clipPath: "polygon(0 40%, 100% 5%, 100% 68%, 0 88%)",
            rotate: "0deg",
            position: "absolute",
            zIndex: -1,
          }}
        ></div>
        <Box className=" rounded"
          sx={{
            position: "relative",
            width: { sm: "100%", md: "80%" },
            height: { sm: "50vh", md: "95vh" },
            margin: "auto",


            backgroundColor: "black",
          }}
        >
          <HomeSlider object={hehe} />

        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "10px 0",
          backgroundColor: mode,
        }}
      >
        <SuccessStories mode={mode} textcolor={textcolor} />
      </Box>

      <Box
        sx={{
          background: "linear-gradient(to right, #4CAF50, #81C784)",
          padding: "40px 0",
          minHeight: "100vh",
        }}
      >
        <FAQSection
          sx={{
            marginTop: "40px", // Add gap on top (adjust value as needed)
            marginBottom: 0, // Ensure no gap at the bottom
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#AF47D2",
          gap: "10px",
        }}
      >

      </Box>
    </div>
  );
}

export default Home;
