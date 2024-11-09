import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <Box display="flex" alignItems="center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <span key={index} style={{ color: "#ff8c00", marginLeft:"0px" , transform: 'none'}}>
              ★
            </span>
          ); // Full star
        } else if (index === fullStars && hasHalfStar) {
          return (
            <span key={index} style={{ color: "#ff8c00" }}>
              ☆
            </span>
          ); // Half star
        } else {
          return (
            <span key={index} style={{ color: "#ff8c00" }}>
              ☆
            </span>
          ); // Empty star
        }
      })}
    </Box>
  );
};

// Team members' data
const teamMembers = [
  {
    name: "Arjun Kumar",
    role: "Head Trainer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHma3PqZmi5IcTGKduFToHGUphPkdJ6A4hSQ&s",
    expertise: "Strength Training, Nutrition",
    bio:
      "Arjun has over 10 years of experience in personal training and nutrition coaching. He believes in a holistic approach to fitness.",
    rating: 4.8,
    yearsOfExperience: 10,
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8R-asVJXTPzz1xg1z9ltiYj7uR-9TRmiPw&s",
    expertise: "Yoga, Mindfulness",
    bio:
      "Priya specializes in Hatha and Vinyasa yoga. Her classes focus on mindfulness and connecting breath with movement.",
    rating: 4.7,
    yearsOfExperience: 7,
  },
  {
    name: "Ravi Gupta",
    role: "Cardio Specialist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1lGNw7k8n2cZSMOL4NVLSMcD0XG5Fz_ApQ&s",
    expertise: "Cardiovascular Training, HIIT",
    bio:
      "Ravi has a passion for helping clients improve their cardiovascular fitness through high-intensity interval training.",
    rating: 4.9,
    yearsOfExperience: 8,
  },
  {
    name: "Meera Patel",
    role: "Nutritionist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZ5wDBIlOBxCzNbQbM9zBH_mXcXnsRslOdw&s",
    expertise: "Diet Planning, Weight Management",
    bio:
      "Meera has a Master's degree in Nutrition and helps clients achieve their health goals through personalized diet plans.",
    rating: 4.6,
    yearsOfExperience: 5,
  },
  {
    name: "Vikram Singh",
    role: "Strength Coach",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtFvjm-Br6RT1vK8NGh-PTfC6mHyow2dAdA&s",
    expertise: "Weightlifting, Muscle Building",
    bio:
      "Vikram has over 8 years of experience in strength training and focuses on functional fitness to improve overall performance.",
    rating: 4.5,
    yearsOfExperience: 8,
  },
  {
    name: "Aditi Joshi",
    role: "Pilates Instructor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSxrQIhMbR8An2mvbmFw5KS66aJldhoYPVg&s",
    expertise: "Core Strength, Flexibility",
    bio:
      "Aditi teaches Pilates and emphasizes core strength, posture improvement, and flexibility in her classes.",
    rating: 4.8,
    yearsOfExperience: 6,
  },
];

// Duplicate the first and last team members for infinite scroll effect
const infiniteMembers = [
  teamMembers[teamMembers.length - 1],
  ...teamMembers,
  teamMembers[0],
];

const MemberCard = ({ member, mode }) => (
  <Card
    sx={{
      borderRadius: "0.5rem",
      padding: "1rem",
      height: "100%",
      margin: '0rem 0.5rem',
      transition: "box-shadow 0.3s, transform 0.3s",
      background:
        mode === "dark" ? "linear-gradient(135deg, #000000, #444444)" : "#fff",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      "&:hover": {
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        transform: "scale(1.05)",
      },
    }}
  >
    <CardContent>
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        sx={{
          flexDirection: { xs: "column", sm: "row" }, // Responsive layout: column on small screens, row on larger screens
          textAlign: { xs: "center", sm: "left" }, // Center text on small screens
        }}
      >
        <CardMedia
          component="img"
          image={member.image}
          alt={member.name}
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            border: "2px solid transparent",
            objectFit: "cover",
            marginBottom: { xs: 1, sm: 0 }, // Margin below image on small screens
            marginRight: { sm: 2 }, // Margin to the right on larger screens
          }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              color: mode === "dark" ? "#fff" : "#4A5568",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {member.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#C53030" }}>
            {member.role}
            <Typography
              variant="caption"
              sx={{
                color: mode === "dark" ? "#fff" : "#4A5568",
                marginLeft: "0.25rem",
              }}
            >
              ({member.yearsOfExperience} years)
            </Typography>
          </Typography>
          <Box>
            <StarRating rating={member.rating} />
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{ marginBottom: 1, color: mode === "dark" ? "#fff" : "#718096" }}
      >
        {member.bio}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: mode === "dark" ? "#fff" : "#4A5568",
          textAlign: "left",
          marginLeft: "0.25rem",
        }}
      >
        <strong style={{ color: "#ff8c00" }}>Expertise:</strong>{" "}
        {member.expertise}
      </Typography>
    </CardContent>
  </Card>
);


const TeamSection = ({ mode }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real member
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const memberWidth = isSmallScreen ? 100 : 100 / 3;

  const nextMember = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const prevMember = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  // Loop back when reaching the first or last real member
  useEffect(() => {
    if (currentIndex === infiniteMembers.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(infiniteMembers.length - 2);
      }, 500);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(nextMember, 4000);
    return () => clearInterval(timer);
  }, [nextMember]);

  return (
    <section style={{ padding: "2rem 4rem 4rem", overflow: "hidden", maxWidth: "100%" }}>
      <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#ff8c00",
          }}
        >
          Meet Our Team
        </Typography>
        <div style={{ position: "relative", maxWidth: "100%" }}>
          <div style={{ overflow: "visible", width: "100%" }}>
            <div
              style={{
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${(currentIndex - 1) * memberWidth}%)`,
                ...(isTransitioning ? {} : { transition: "none" }),
              }}
            >
              {infiniteMembers.map((member, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    ...(isSmallScreen
                      ? { flexShrink: 0 }
                      : { width: "33.33%", flexShrink: 0 }),
                  }}
                >
                  <MemberCard member={member} mode={mode} />
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={prevMember}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-1rem",
              transform: "translateY(-50%)",
              borderRadius: "9999px",
              padding: "18px",
              borderRadius: "50%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#FF8100",
              },
            }}
          >
            <ChevronLeft
              style={{ width: "1.5rem", height: "1.5rem", color: "#4A5568" }}
            />
          </Button>
          <Button
            onClick={nextMember}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-1rem",
              transform: "translateY(-50%)",
              borderRadius: "9999px",
              padding: "18px",
              borderRadius: "50%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#FF8100",
              },
            }}
          >
            <ChevronRight
              style={{ width: "1.5rem", height: "1.5rem", color: "#4A5568" }}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};


export default TeamSection;
