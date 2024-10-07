import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Grid,
} from "@mui/material";

// Import customer images
import customer1 from "../assets/img/customer-1.jpg";
import customer2 from "../assets/img/customer-2.jpg";
import customer3 from "../assets/img/customer-3.jpg";
import customer4 from "../assets/img/customer-4.jpg";
// Add more imports as needed

const SuccessStories = () => {
  const originalStories = [
    {
      image: customer2,
      name: "John Doe",
      story:
        "Joining FitFlex changed my life! I lost 20 pounds and gained confidence.",
    },
    {
      image: customer1,
      name: "Jane Smith",
      story:
        "The variety of workouts kept me motivated and helped me achieve my fitness goals.",
    },
    {
      image: customer4,
      name: "Mike Johnson",
      story:
        "FitFlex's personalized plans are fantastic! I've never felt stronger.",
    },
    {
      image: customer3,
      name: "Emily Davis",
      story:
        "The community support is incredible. It keeps me accountable and inspired.",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "40px", md: "60px" },
        backgroundColor: "#f9f9f9",
        position: "relative",
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
        }}
      >
        Success Stories
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {originalStories.map((story, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "16px", sm: "20px", md: "24px" },
                minHeight: "280px", // Ensure consistent height
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <Avatar
                src={story.image}
                alt={story.name}
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  marginBottom: "16px",
                }}
              />
              <CardContent
                sx={{
                  flexShrink: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {story.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                    lineHeight: "1.4",
                  }}
                >
                  {story.story}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuccessStories;
