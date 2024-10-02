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

import {
  faDharmachakra,
  faDumbbell,
  faFire,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Home() {
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

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <div
            style={{
              background: "linear-gradient(45deg, #FDC830 0%,#F37335)",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", padding: "35px", marginTop: "50px" }}>
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
             
                style={{fontSize:'25px', fontWeight: "600", lineHeight:'30px'}}
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
                backgroundImage: `linear-gradient(45deg,rgba(253, 200, 48, 0.5), rgba(243, 115, 53, 0.1)),
                
                url(${Imgs[count]})`,
                backgroundRepeat: "no-repeat",
                setBackgroundSize: "contain",
                backgroundPosition: "center",
                // background:'linear-gradient(45deg, #F37335 0%,#FDC830 100%)',
                width: "100%",
                height: { xs: "55vh", md: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                <Typography variant="h2" color="white" style={{ fontWeight: "900"}}>
                  {TopMessage[count]}
                </Typography>

                <Typography variant="h4" color="white" style={{fontSize:'25px', fontWeight: "600", lineHeight:'30px'}}>
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
        <div className="wrapper" style={{marginTop:'50px', marginBottom: '50px'}}>
          <NavLink to="/plans" className="cta">
            <span style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
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
          color="black"
          style={{
            fontWeight: { sm: "normal", md: "bold" },
            textAlign: "center",
            marginBottom: '10px',
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
          color="black"
          style={{
            textAlign: "center",
            fontWeight: { sm: "thin", md: "normal" },
            // width: {sm:"90%", md:"60%"},
            width: { sm: "80%", md: "60%" },
            marginBottom: "50px",
            fontSize: "20px"
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
              JustifyContent: "center",
              color: "#AF47D2",
              gap: "10px",
              // width:"50%",
              textAlign: "center",
              // textColor:"black",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "orange" }}
              icon={faStar}
              size="5x"
            />
            <Typography variant="h3" color="#26355D" style={{fontSize:'35px'}}>
              Variety
            </Typography>
            <Typography style={{color:'#000'}}>
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
              JustifyContent: "center",
              color: "#AF47D2",
              textAlign: "center",
              gap: "10px",
              // width:"40%",

              // textColor:"black",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "orange" }}
              icon={faDharmachakra}
              size="5x"
            />
            <Typography variant="h3" color="#26355D" style={{fontSize:'35px'}}>
              Flexibility
            </Typography>
            <Typography style={{color:'#000'}}>
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
              JustifyContent: "center",
              color: "#AF47D2",
              gap: "10px",
              textAlign: "center",

              // width:"50%",

              // textColor:"black",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "orange" }}
              icon={faDumbbell}
              size="5x"
            />
            <Typography variant="h3" color="#26355D" style={{fontSize:'35px'}}>
              Motivation
            </Typography>
            <Typography style={{color:'#000'}}>
              Stay on track with interactive features, progress tracking, and
              regular updates. We will help you keep your eyes on the prize and
              push through challenges.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* banner */}
      <br />
      <br />
      <Box
        sx={{
          marginTop:'50px',
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
            position:"relative",
            width: { sm: "100%", md: "80%" },
            height: { sm: "50vh", md: "95vh" },
            margin: "auto",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderLeft: { sm: "0px solid grey", md: "30px solid grey" },
            borderRight: { sm: "0px solid grey", md: "30px solid grey" },
            backgroundColor:"black"
          }}
        >
          <HomeSlider object={hehe} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          JustifyContent: "center",
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
