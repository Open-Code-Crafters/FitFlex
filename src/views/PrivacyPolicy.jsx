import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Styled components for the privacy policy page
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

// Background container for the privacy policy page
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

const PrivacyPolicy = () => {
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
            Privacy Policy
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            Welcome to our Privacy Policy page. Your privacy is critically
            important to us.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We collect several types of information for various purposes to
            provide and improve our service to you.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We use the data we collect to operate, maintain, and improve our
            services. This includes using your data to understand how users
            interact with our services and to communicate updates.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            3. Cookies
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We use cookies and similar tracking technologies to track the
            activity on our website and hold certain information.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            4. Data Protection Rights
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            You have the right to access, update, or delete your personal
            information. If you make a request, we have one month to respond to
            you.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            5. Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            We may update our Privacy Policy from time to time. You are advised
            to review this page periodically for any changes.
          </Typography>

          <Typography variant="h6" color="white" gutterBottom>
            6. Contact Us
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            If you have any questions about this Privacy Policy, please contact
            us.
          </Typography>
        </PolicyContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
