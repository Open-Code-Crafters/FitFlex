import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import BackgrundImg from "../assets/home/homeImg2.avif";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setOpenSnackbar(true);
      setError(null);
    } catch (error) {
      setError(
        "Failed to send reset email. Please check your email and try again."
      );
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage: `url(${BackgrundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        fontFamily: "Future2",
      }}
    >
      <Container
        sx={{
          backgroundColor: "grey",
          padding: "2rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter your email to reset your password
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", fontFamily: "Future2" }}
        >
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: "1rem", fontFamily: "Future2" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#F97437",
              color: "white",
              padding: "0.75rem",
              fontFamily: "Future2",
            }}
          >
            Reset Password
          </Button>
        </form>

        <Button
          onClick={handleBackToLogin}
          sx={{ marginTop: "1rem", color: "red", fontFamily: "Future2" }}
        >
          Back to Login
        </Button>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error ? error : "Password reset link has been sent to your email!"}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ForgotPassword;
