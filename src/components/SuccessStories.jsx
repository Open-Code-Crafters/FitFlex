import React, { useState } from "react";
import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
import Slider from "react-slick";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Import customer images
import customer1 from "../assets/img/customer-1.jpg";
import customer2 from "../assets/img/customer-2.jpg";
import customer3 from "../assets/img/customer-3.jpg";
import customer4 from "../assets/img/customer-4.jpg";
import customer5 from "../assets/img/customer-5.jpg";
import customer6 from "../assets/img/customer-6.jpg";
import customer7 from "../assets/img/ben.jpg";
import customer8 from "../assets/img/hannah.jpg";
import customer9 from "../assets/img/steve.jpg";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = ({ mode, textcolor }) => {
  const [flipped, setFlipped] = useState({});

  const handleMouseEnter = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: false }));
  };

  const originalStories = [
    {
      image: customer9,
      name: "John Doe",
      story:
        "Joining FitFlex changed my life! I lost 20 pounds and gained confidence.",
      rating: 5,
    },
    {
      image: customer1,
      name: "Jane Smith",
      story:
        "The variety of workouts kept me motivated and helped me achieve my fitness goals.",
      rating: 4.5,
    },
    {
      image: customer4,
      name: "Mike Johnson",
      story:
        "FitFlex's personalized plans are fantastic! I've never felt stronger.",
      rating: 5,
    },
    {
      image: customer8,
      name: "Sara Miller",
      story:
        "FitFlex helped me get back in shape after having my second baby. The workouts are fun and flexible with my schedule.",
      rating: 4,
    },
    {
      image: customer2,
      name: "David Brown",
      story:
        "I've tried many fitness programs, but FitFlex is the one that stuck. The trainers are motivating, and the results speak for themselves.",
      rating: 4.5,
    },
    {
      image: customer3,
      name: "Lisa Williams",
      story:
        "The variety of classes keeps me engaged and excited to work out every day. It's the best fitness decision I've ever made.",
      rating: 5,
    },
    {
      image: customer7,
      name: "James Anderson",
      story:
        "FitFlex made me love working out again. The balance between strength training and cardio is perfect for my fitness goals.",
      rating: 5,
    },
    {
      image: customer6,
      name: "Rachel Thompson",
      story:
        "The FitFlex community has been a game changer. The accountability and support have helped me stick to my routine.",
      rating: 4.5,
    },
    {
      image: customer5,
      name: "Kevin Martinez",
      story:
        "The flexibility FitFlex offers is amazing. I can work out at my own pace, and it's still challenging and rewarding.",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "40px", md: "60px" },
        backgroundImage:
          mode === "light"
            ? "linear-gradient(to bottom right, gray 50%, black 50%)"
            : `linear-gradient(to bottom right, #111118 50%, white 50%)`,
        position: "relative",
        borderTop: "2px solid #f0f0f0",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          marginBottom: { xs: "20px", sm: "30px" },
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          fontFamily: "'Roboto', sans-serif",
          color: textcolor,
        }}
      >
        Success Stories
      </Typography>

      <Slider {...settings}>
        {originalStories.map((story, index) => (
          <Box
            key={index}
            sx={{
              padding: { xs: "10px", sm: "15px", md: "20px" },
              perspective: "1000px",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Box
              sx={{
                position: "relative",
                width: "90%",
                height: "60%",
                transformStyle: "preserve-3d",
                transform: flipped[index] ? "rotateY(180deg)" : "none",
                transition: "transform 0.3s",
              }}
            >
              {/* Card showing the story (front) */}
              <Card
                sx={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  backgroundColor: mode === "light" ? "#f4f2f2" : "#2e2a2a",
                  padding: { xs: "16px", sm: "20px", md: "24px" },
                  minHeight: "250px",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  width: "80%",
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  border:
                    mode === "dark" ? "2px solid white" : "2px solid gray",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: -20,
                    right: -10,
                    height: "25px", // Height of the separator
                    backgroundColor: mode === "light" ? "#6ebe71" : "#fcbf30",
                    opacity: 1, // Low opacity
                    transform: "rotate(-45deg)", // Diagonal rotation
                    transformOrigin: "top left",

                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    flexGrow: 1,
                    color: textcolor,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                      fontWeight: "600",
                      textAlign: "center",
                      fontFamily: "'Roboto', sans-serif",
                      color: textcolor,
                      marginBottom: "10px",
                      zIndex: 2,
                    }}
                  >
                    Author : {story.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      lineHeight: "1.6",
                      color: textcolor,
                      zIndex: 2,
                    }}
                  >
                    {story.story}
                  </Typography>
                </CardContent>
              </Card>

              {/* Card showing the name, image, and rating (back) */}
              <Card
                sx={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  backgroundColor: mode === "light" ? "#f4f2f2" : "#2e2a2a",
                  padding: { xs: "16px", sm: "20px", md: "24px" },
                  minHeight: "250px",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  top: 0,
                  left: 0,
                  width: "80%",
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border:
                    mode === "dark" ? "2px solid white" : "2px solid gray",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: -20,
                    right: -10,
                    height: "25px", // Height of the separator
                    backgroundColor: mode === "light" ? "#6ebe71" : "#fcbf30",
                    opacity: 1, // Low opacity
                    transform: "rotate(-45deg)", // Diagonal rotation
                    transformOrigin: "top left",
                  }}
                />
                <Avatar
                  src={story.image}
                  alt={story.name}
                  sx={{
                    width: { xs: 60, sm: 80 },
                    height: { xs: 60, sm: 80 },
                    marginBottom: "12px",
                    border: "2px solid #e0e0e0",
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    fontWeight: "600",
                    textAlign: "center",
                    fontFamily: "'Roboto', sans-serif",
                    color: textcolor,
                    marginBottom: "10px",
                  }}
                >
                  {story.name}
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    fontWeight: "600",
                    textAlign: "center",
                    fontFamily: "'Roboto', sans-serif",
                    color: textcolor,
                    marginBottom: "10px",
                  }}
                >
                  Rating : {index % 2 === 0 ? '⭐⭐⭐⭐⭐' : '⭐⭐⭐⭐'}
                </Typography>

                {/* Social icons */}
                <Box>
                  <FacebookIcon
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                  />
                  <TwitterIcon
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                  />
                  <InstagramIcon
                    sx={{
                      color: mode === "light" ? "black" : "white",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Card>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SuccessStories;
