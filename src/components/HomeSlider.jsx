import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

export default function HomeSlider({ object }) {
  const [arrowState, setArrowState] = useState(true);
  useEffect(() => {
    const x = window.innerWidth;
    console.log(x);
    if (x < 900) {
      setArrowState(false);
    } else {
      setArrowState(true);
    }
  }, [window.innerWidth]);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: arrowState,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {object.map((item, index) => (
        <Box
          key={index}
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow:'hidden',
            height:{sm:"50vh", md:"95vh"}
          }}
        >
          <img
            src={item.image}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "95vh",
              zIndex: 0,
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: { sm: "10%", md: "55%" },
              // width:"100%",
              // left:{sm:"1%",md:"1%"},
              color: "white",
              fontSize: { sm: "2em", md: "5em" },
              fontWeight: "bold",
              padding: "10px",
              marginLeft: "30px",
              textAlign: "center",
              textWrap: "wrap",
              // margin:"auto",
              zIndex: 20,
            }}
          >
            {item.title}
          </Typography>
        </Box>
      ))}

      {/* {object.map((item, index)=>{
          return(
            <div key={index}>
              <h3>hiii</h3>
            </div>
          )
        })} */}
    </Slider>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        borderRadius: "50px",
        height: "50px",
        width: "30px",
        color: "wihte",
        backgroundColor: "white",
        zIndex: 1,  
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        borderRadius: "50px",
        height: "50px",
        width: "30px",
        color: "wihte",
        backgroundColor: "white",
        zIndex: 1,
      }}
      onClick={onClick}
    ></Box>
  );
}
