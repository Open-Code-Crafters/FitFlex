import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

// HealthTipCard component
function HealthTipsCard({ tip }) {
  const [importanceColor, setColor] = useState("green");

  // Default health tip data if no props are passed
  if (!tip) {
    tip = {
      title: "Stay Hydrated",
      description: "Drinking enough water is crucial for your overall health.",
      image: "src/assets/health/water-hydration.jpg",
    };
  }

  useEffect(() => {
    if (tip.importance === "High") {
      setColor("red");
    } else if (tip.importance === "Medium") {
      setColor("orange");
    } else {
      setColor("green");
    }
  }, [tip.importance]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "280px",
        height: "23rem",
        margin: "18px 8px",
        borderRadius: "17px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        transition: "0.4s",
        cursor: "pointer",
        position: "relative",
      }}
      component={motion.div}
      whileHover={{
        translateY: -3,
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        transition: { duration: 0.2 },
      }}
    >
      <CardMedia
        component="img"
        height="200" // Adjusted height
        image={tip.image}
        alt="Health Tip"
        sx={{ objectFit: "fit" }} // Ensures the image covers the area appropriately
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
        <div
          style={{
            // position: "absolute",
            bottom: 0, // Set to bottom to touch the bottom of the card
            zIndex: 1,
            backgroundColor: "transparent",
            width: "100%",
            backdropFilter: "blur(10px)",
            // padding: "10px", // Added padding for better spacing
          }}
        >
          <Typography
            gutterBottom
            variant="h7"
            sx={{
              fontFamily: "sans-serif",
              color: "black",
              textShadow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)", // Glowing effect
            }}
          >
            <strong>{tip.title}</strong>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "black",
              textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.4)", // Glowing effect
            }}
          >
            {tip.description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

// Main component
function HealthTips() {
  const tips = [
    {
      title: "Consistency Over Intensity",
      description:
        "Regular, moderate exercise is more effective for long-term fitness than occasional intense workouts. Aim for at least 150 minutes of moderate or 75 minutes of vigorous exercise weekly.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/exercise.jpg?raw=true",
    },
    {
      title: "Strength Training",
      description:
        "Include strength training exercises 2-3 times per week to build and maintain muscle mass. Focus on full-body exercises like squats, lunges, and push-ups.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/strength-training.jpg?raw=true",
    },
    {
      title: "Warm-Up and Cool Down",
      description:
        "Always start your workout with a warm-up to increase blood flow and prepare your muscles. Finish with a cool-down and stretching to aid in flexibility and recovery.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/warmup-cooldown.jpg?raw=true",
    },
    {
      title: "Balanced Diet",
      description:
        "Fuel your body with a balanced diet rich in whole grains, lean proteins, fruits, vegetables, and healthy fats. Proper nutrition is key to achieving fitness goals and promoting overall well-being.",
      image: "https://github.com/Jay-1409/FitFlex/blob/31f56646c63ac3205d7ad41934c70445a835158c/src/assets/health/balanced-diet.jpg?raw=true",
    },
    {
      title: "Rest and Recovery",
      description:
        "Give your muscles time to recover by getting adequate sleep (7-9 hours) and scheduling rest days between intense workouts. Overtraining can lead to injuries and burnout.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/rest-recovery.jpg?raw=true",
    },
    {
      title: "Mix Up Your Routine",
      description:
        "Keep your workouts interesting by trying activities like cycling, swimming, yoga, or HIIT. This prevents boredom and challenges different muscle groups.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/mix-up-routine.jpg?raw=true",
    },
    {
      title: "Posture and Form",
      description:
        "Pay attention to your posture and form during exercises to prevent injury. If unsure, consider working with a fitness trainer to correct any mistakes.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/posture.jpg?raw=true",
    },
    {
      title: "Mental Health",
      description:
        "Fitness isn't just physical. Practices like yoga, meditation, or simple stretching routines can help improve mental well-being and reduce stress.",
      image: "https://github.com/Jay-1409/FitFlex/blob/update/src/assets/health/mental-health.jpg?raw=true",
    },
  ];
  
  return (
    <Box sx={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Health Tips for Fitness and Wellness
      </Typography>
    </Box>
    <Grid container spacing={3} justifyContent="center">
      {tips.map((tip, index) => (
        <Grid item key={index}>
          <HealthTipsCard tip={tip} />
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}

export default HealthTips;
