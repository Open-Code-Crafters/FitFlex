import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Styled components for the terms of use page
const PolicyContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: "#ff6f61",
    },
    secondary: {
      main: "#ff3d00",
    },
  },
  typography: {
    h6: {
      fontFamily: "Future2, Arial, sans-serif",
    },
    body1: {
      fontSize: "1rem", // Decrease font size (default is 1rem)
      fontWeight: "normal", // Adjust weight (default is 400)
    },
  },
});

// Background container for the terms of use page
const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundImage: "linear-gradient(135deg, #1F1C2C 10%, #232526 100%)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

const TermsOfUse = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <PolicyContainer>
          <Typography
            variant="h4"
            align="center"
            color="white"
            gutterBottom
            fontFamily={"Future2, Helvetica, Arial"}
          >
            Terms of Use
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            Welcome to our Terms of Use page. Please read these terms carefully.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            By accessing or using our service, you agree to comply with these terms.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            2. User Responsibilities
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            You are responsible for your use of our services and must comply with applicable laws.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            2. Services Offered
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We provide a variety of online fitness classes, including yoga, pilates, strength training, and more. All classes are subject to availability.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            4. Payment Terms
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            Access to certain services may require payment. All fees are non-refundable unless specified otherwise. 
          </Typography>


          <Typography variant="h6" color="white" gutterBottom>
            4. Limitation of Liability
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            5. Changes to Terms
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We reserve the right to modify these terms at any time. Please review these terms periodically.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            6. Contact Us
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            If you have any questions about these terms, please contact us.
          </Typography>

          {/* Buttons for Accept and Reject */}
          <Box display="flex" justifyContent="space-between" marginTop={4}>
            <Button variant="contained" color="primary" onClick={() => alert("You rejected the terms.")}>
              Reject
            </Button>
            <Button variant="contained" color="secondary" onClick={() => alert("You accepted the terms.")}>
              Accept
            </Button>
          </Box>
        </PolicyContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default TermsOfUse;
