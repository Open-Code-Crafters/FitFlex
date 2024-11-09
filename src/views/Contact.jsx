import React, { useState } from "react";
import emailjs from "emailjs-com";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import gmail from "../assets/img/gmail.png";
import phone from "../assets/img/telephone.png";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
const serviceID = import.meta.env.VITE_emailJS_serviceID;
const templateID = import.meta.env.VITE_emailJS_templateID;
const publicKey = import.meta.env.VITE_emailJS_publicKey;

// Styled components for the contact form
const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "600px",
  margin: "auto",
  backgroundColor: "linear-gradient(135deg, #1F1C2C 10%, #232526 100%)",
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
    fontFamily: "Future2, Arial, sans-serif",
  },
});

// Background container styled
const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  // backgroundImage: "linear-gradient(135deg, #1F1C2C 10%, #232526 100%)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

// Gradient text field styled with CheckIcon
const GradientTextField = styled(TextField)(
  ({ theme, error, showError, showIcon }) => ({
    input: { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "2px",
        borderImageSlice: 1,
        fontWeight: 300,
        borderImageSource: error
          ? "linear-gradient(90deg, rgba(255, 61, 0, 0.8) 0%, rgba(255, 111, 97, 0.8) 100%)"
          : "linear-gradient(90deg, rgba(255, 140, 0, 0.7) 0%, rgba(241, 196, 15, 0.7) 100%)",
      },
      "&:hover fieldset": {
        borderWidth: "2px",
        borderImageSlice: 1,
        fontWeight: 300,
        borderImageSource: error
          ? "linear-gradient(90deg, rgba(255, 61, 0, 0.8) 0%, rgba(255, 111, 97, 0.8) 100%)"
          : "linear-gradient(90deg, rgba(255, 140, 0, 0.7) 0%, rgba(241, 196, 15, 0.7) 100%)",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "2px",
        borderImageSlice: 1,
        fontWeight: 300,
        borderImageSource: error
          ? "linear-gradient(90deg, rgba(255, 61, 0, 0.8) 0%, rgba(255, 111, 97, 0.8) 100%)"
          : "linear-gradient(90deg, rgba(255, 140, 0, 0.7) 0%, rgba(241, 196, 15, 0.7) 100%)",
      },
    },
    "& .MuiFormLabel-root": {
      color: showError ? "#ded8ce" : "white",
    },
    "& .MuiInputAdornment-root": {
      display: showIcon ? "block" : "none",
      color: "green",
    },
  })
);

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showNameIcon, setShowNameIcon] = useState(false);
  const [showEmailIcon, setShowEmailIcon] = useState(false);
  const [showMessageIcon, setShowMessageIcon] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
      const isValid = validateName(value);
      setShowNameIcon(isValid);
    } else if (name === "email") {
      setEmail(value);
      const isValid = validateEmail(value);
      setShowEmailIcon(isValid);
    } else if (name === "message") {
      setMessage(value);
      const isValid = validateMessage(value);
      setShowMessageIcon(isValid);
    }
  };

  const sendEmail = () => {
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: name,
          to_email: email,
          message: message,
        },
        publicKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setOpen(true);
        resetForm(); // Call a helper function to reset form and state
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };
  
  // Helper function to reset form and state
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setShowError(false);
    setShowNameIcon(false);
    setShowEmailIcon(false);
    setShowMessageIcon(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setShowError(true);
      return;
    }

    sendEmail();
    resetForm();
  };

  const validateName = (name) => {
    if (name.length > 3) {
      setNameError(false);
      return true;
    } else {
      setNameError(true);
      return false;
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (re.test(String(email).toLowerCase())) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };

  const validateMessage = (message) => {
    if (message.length >= 10) {
      setMessageError(false);
      return true;
    } else {
      setMessageError(true);
      return false;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setShowError(false); // Reset showError state when closing the error alert
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <Container>
          <Box sx={{ py: 5 }} data-aos="zoom-in">
            <ContactForm sx={{mt: 14}}>
              <Typography
                variant="h4"
                align="center"
                color="white"
                fontFamily={"Future2, Helvetica, Arial"}
                gutterBottom
              >
                Contact Us
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    error={nameError}
                    showError={showError}
                    showIcon={showNameIcon} // Pass showIcon prop
                    InputProps={{
                      endAdornment: showNameIcon ? <CheckIcon /> : null, // Conditionally render CheckIcon
                    }}
                    helperText={
                      nameError
                        ? "Enter full name (more than 3 characters)"
                        : ""
                    }
                  />
                </Box>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    error={emailError}
                    showError={showError}
                    showIcon={showEmailIcon} // Pass showIcon prop
                    InputProps={{
                      endAdornment: showEmailIcon ? <CheckIcon /> : null, // Conditionally render CheckIcon
                    }}
                    helperText={
                      emailError ? "Please enter a valid email address." : ""
                    }
                  />
                </Box>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    error={messageError}
                    showError={showError}
                    showIcon={showMessageIcon} // Pass showIcon prop
                    InputProps={{
                      endAdornment: showMessageIcon ? <CheckIcon /> : null, // Conditionally render CheckIcon
                    }}
                    helperText={
                      messageError
                        ? "Message should be at least 10 characters long."
                        : ""
                    }
                  />
                </Box>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                      background:
                        "linear-gradient(90deg, rgba(255, 140, 0, 0.7) 0%, rgba(241, 196, 15, 0.7) 100%)", // Updated button gradient
                      color: "white",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(241, 196, 15, 0.7) 0%, rgba(255, 140, 0, 0.7) 100%)", // Hover gradient
                        boxShadow: "0 0 15px rgba(255, 140, 0, 0.1)", // glow on hover
                      },
                    }}
                  >
                    Send Message
                  </Button>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, #ff8c00 0%, #f1c40f 100%)",
                      mt: 3,
                      mb: 2,
                    }}
                  />

                  {/* Logo links below the line */}
                  <Box display="flex" justifyContent="center" gap={4} mb={2} mt={4}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedin} // Replace with actual path to LinkedIn logo
                        alt="LinkedIn"
                        className="logo"
                        style={{ height: "35px", width: "auto" }}
                      />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={github}
                        alt="GitHub"
                        className="logo"
                        style={{ height: "35px", width: "auto" }}
                      />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-600">
                      <img
                        src={phone}
                        alt="Phone"
                        className="logo"
                        style={{ height: "35px", width: "auto" }}
                      />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-red-600">
                      <img
                        src={gmail}
                        alt="Email"
                        className="logo"
                        style={{ height: "35px", width: "auto" }}
                      />
                    </a>
                  </Box>
                </Box>
              </form>
            </ContactForm>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Message sent successfully!
              </Alert>
            </Snackbar>
            <Snackbar
              open={showError}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Please fix the errors in the form.
              </Alert>
            </Snackbar>
          </Box>
        </Container>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Contact;
