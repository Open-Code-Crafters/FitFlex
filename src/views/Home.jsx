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
          delay:0.5,// Bounce effect on landing
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
    <div style={{ backgroundColor: mode, color: textcolor }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <div
        
            style={{
              background: "linear-gradient(45deg, #FDC830 0%,#F37335)",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div   className="homeGsap" style={{ width: "100%", padding: "35px", marginTop: "50px" }}>
              <Typography
                gutterBottom
                variant="h3"
                color="white"
                style={{ fontWeight: "bold" }}
              >
                Welcome to
              </Typography>
              <Typography
                variant="h1"
                color="white"
                style={{ fontWeight: "700" }}
              >
                FitFlex
              </Typography>

              <Typography
                variant="h1"
                color="white"
                style={{ fontWeight: "600", marginTop: "-20px" }}
              >
                Zone
              </Typography>
              <Typography
                variant="h4"
                color="white"
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  lineHeight: "30px",
                }}
              >
                Transform Your Space, Transform Your Body
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: "100%",
              background: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `linear-gradient(45deg, rgba(253, 200, 48, 0.5), rgba(243, 115, 53, 0.1)), url(${Imgs[count]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: { xs: "55vh", md: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // changed to "center"
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  padding: { xs: "5px", md: "20px" },
                  zIndex: 1,
                  position: "relative",
                  backdropFilter: "blur(5px)",
                }}
              >
                <Typography
                  variant="h2"
                  color="white"
                  style={{ fontWeight: "900" }}
                >
                  {TopMessage[count]}
                </Typography>

                <Typography
                  variant="h4"
                  color="white"
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  {BottomMessage[count]}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
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
        ></div>
        {/* cusotmn css button */}

        {/* do not touch below code, idk how it works, {ps: just added marginTop, marginBottom} */}
        <div
          className="wrapper"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <NavLink to="/plans" className="cta">
            <span
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
        ></div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant={fontVarient}
          style={{
            fontWeight: { sm: "normal", md: "bold" },
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Experience the{" "}
          <span
            style={{
              // color:'linear-gradient(45deg, #FDC830 0%,#F37335 100%)',
              background: "linear-gradient(45deg, #F37335, #FDC830)",
              WebkitBackgroundClip: "text",
              fontFamily: "sans-serif",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            #TransformWithFitFlex
          </span>
        </Typography>
        <Typography
          variant={window.innerWidth < 700 ? "h6" : "h5"}
          style={{
            textAlign: "center",
            fontWeight: { sm: "thin", md: "normal" },
            // width: {sm:"90%", md:"60%"},
            width: { sm: "80%", md: "60%" },
            marginBottom: "50px",
            fontSize: "20px",
            color: textcolor
          }}
        >
          Join our fitness program and transform your body and mind. Our expert
          trainers and supportive community will help you reach your goals,
          whether you're a beginner or an experienced athlete. Start your
          transformation with FitFlex today!
        </Typography>

               <Grid
          container
          spacing={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#AF47D2",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "orange" }}
              icon={faStar}
              size="5x"
            />
            <Typography variant="h3" color={textcolor} style={{ fontSize: '35px' }}>
              Variety
            </Typography>
            <Typography color={textcolor}>
              From HIIT to yoga, strength training to dance,explore a diverse
              range of workouts to keep your routine exciting and effective.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#AF47D2",
              textAlign: "center",
              gap: "10px",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "orange" }}
              icon={faDharmachakra}
              size="5x"
            />
            <Typography variant="h3" color={textcolor} style={{ fontSize: '35px' }}>
              Flexibility
            </Typography>
            <Typography color={textcolor}>
              Enjoy the freedom to exercise whenever it fits your day. No gym
              hours, no commutes just you and your fitness goals.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#AF47D2",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "orange" }}
              icon={faDumbbell}
              size="5x"
            />
            <Typography variant="h3" color={textcolor} style={{ fontSize: '35px' }}>
              Motivation
            </Typography>
            <Typography style={{ color: textcolor }}>
              Stay on track with interactive features, progress tracking, and
              regular updates. We will help you keep your eyes on the prize and
              push through challenges.
            </Typography>
          </Grid>
          
          {/* Add Product Cards */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div class="product-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
              <div class="para uppercase text-center leading-none z-40">
                <p
                  style="-webkit-text-stroke: 1px rgb(207, 205, 205);
                        -webkit-text-fill-color: transparent;"
                  class="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-500"
                >
                  New Product
                </p>
                <p class="font-bold text-xl tracking-wider text-[#495c48] z-30">
                  New Product
                </p>
              </div>
              <div class="w-[180px] aspect-square relative z-20 transition-all duration-300">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  text-rendering="geometricPrecision"
                  shape-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <linearGradient
                    y2="0"
                    y1="512"
                    x2="256"
                    x1="256"
                    gradientUnits="userSpaceOnUse"
                    id="id0"
                  >
                    <stop stop-color="#495c48" offset="0"></stop>
                    <stop stop-color="#9db891" offset=".490196"></stop>
                    <stop stop-color="#7b956a" offset="1"></stop>
                  </linearGradient>
                  <g id="Layer_x0020_1">
                    <path
                      fill="url(#id0)"
                      d="m310 512h-108c-16.4 0-31.9-6.5-43.7-18.3s-18.3-27.3-18.3-43.7v-261c0-29.8 24.2-54 54-54h123c30.3 0 55 24.2 55 54v261c0 16.4-6.5 31.9-18.3 43.7s-27.3 18.3-43.7 18.3zm-90-439v-34c0-23 9.9-39 24-39h24c13.5 0 24 17.1 24 39v34zm-33 48.36v-27.36c0-3.9 3.1-7 7-7h124c3.9 0 7 3.1 7 7v27.46c-2.63-.3-5.3-.46-8-.46h-123c-2.36 0-4.7.12-7 .36zm69 71.6c-33.94 54.87-38.25 93.49-29.7 116.4 5.82 15.59 17.8 23.39 29.7 23.39s23.88-7.8 29.7-23.39c8.55-22.91 4.24-61.53-29.7-116.4zm-42.77 121.27c-10.32-27.64-5.23-73.83 36.85-137.91.52-.84 1.22-1.57 2.09-2.14 3.22-2.12 7.54-1.22 9.65 1.99 42.17 64.16 47.27 110.4 36.95 138.06-8.09 21.68-25.39 32.52-42.77 32.52s-34.68-10.84-42.77-32.52zm102.27 126.87c-2.8 0-5.9-.4-9.3-1.3-.1 0-.1 0-.2 0-14-4.2-21.8-18.1-17.7-31.7.1-.4.3-.8.4-1.1.2-.4.4-.8.6-1.3.8-1.9 1.9-4.3 3.8-6.5 24.5-50.8 21.9-118.2 21.9-118.9-.1-3.5 2.3-6.5 5.7-7.2s6.8 1.3 7.9 4.6c3.3 9.6 11.2 41 15.2 73.2 5.1 42 1.8 69.7-9.9 82.2-3.7 4-9.6 8-18.4 8zm-5.6-14.8c8 2.2 11.7-.5 13.7-2.7 12.5-13.4 9.3-57.7 2.8-94.5-2.9 23.5-8.9 51.9-21.2 76.9-.3.7-.8 1.3-1.3 1.9-.6.6-1.3 2.1-1.8 3.4-.2.4-.4.8-.5 1.2-1.5 5.9 2.1 11.9 8.3 13.8zm-113.4 14.8c-8.9 0-14.8-4-18.4-7.9-11.7-12.5-15-40.2-9.9-82.2 3.9-32.2 11.8-63.6 15.2-73.2 1.1-3.3 4.5-5.2 8-4.6 3.4.7 5.8 3.8 5.6 7.3 0 .7-3.5 68 21.8 118.6 1.9 2.2 3 4.7 3.9 6.6.2.5.4.9.6 1.3s.3.7.4 1.1c4.1 13.6-3.7 27.5-17.7 31.7-.1 0-.1 0-.2 0-3.4.9-6.5 1.3-9.3 1.3zm-11.2-110.6c-6.3 36.5-9.3 79.8 3.1 93.1 2 2.2 5.7 4.8 13.7 2.7 6.3-1.9 9.9-7.9 8.4-13.8-.2-.4-.4-.8-.5-1.2-.5-1.2-1.2-2.7-1.8-3.4-.5-.5-1-1.1-1.3-1.8-12.7-24.5-18.7-52.3-21.6-75.6z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </Grid>
        </Grid>

      <Box
        sx={{
          marginTop: "50px",
          width: "100vw",
          position: "relative",
        }}
      >

      {/* banner */}
      <br />
      <br />
      <Box
        sx={{
          marginTop: "50px",
          width: "100vw",
          position: "relative",
        }}
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
        <Box
          sx={{
            position: "relative",
            width: { sm: "100%", md: "80%" },
            height: { sm: "50vh", md: "95vh" },
            margin: "auto",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderLeft: { sm: "0px solid grey", md: "30px solid grey" },
            borderRight: { sm: "0px solid grey", md: "30px solid grey" },
            backgroundColor: "black",
          }}
        >
          <HomeSlider object={hehe} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "40px 0",
          backgroundColor: mode,
        }}
      >
        <SuccessStories mode={mode} textcolor={textcolor} />
      </Box>

      <Box
        id="faq"
        paddingTop={"190px"}>
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
        {/* <CounterCard val={20} icon={faMountain} text="Yoga Guides" /> */}
      </Box>
    </div>
  );
}

export default Home;
