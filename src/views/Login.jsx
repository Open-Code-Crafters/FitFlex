
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  IconButton,
  Snackbar,
  Alert,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BackgrundImg from "../assets/home/homeImg3.jpg";
import { getAuth, onAuthStateChanged,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useFirebase } from "../context/Firebase";
import Register from "./Register";
import Profile from "./Profile";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    setOpenSnackbar(true);
    setTimeout(() => navigate("/home"), 2000); // Redirect after 2 seconds
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/Profile');
      } else {
        setUser(null);
        // navigate('/Login');

      }
    });
  }, []);

  const firebase = useFirebase();
  const auth = getAuth();
  const googleProvider =new  GoogleAuthProvider();

  const signInWithGoogle = () =>{
      signInWithPopup(auth,googleProvider);
  }


  // // Only render Register component if user is null
  // if (user === null) {
  //   return (
  //     <div>
  //       <Register />
  //     </div>
  //   );
  // }
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();
  // const handleGoogleLogin = async () => {
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();

  //   try {
  //     const result = signInWithPopup(auth, provider);
  //     const user = result.user;
  //     console.log("Google login successful:", user);
  //     navigate("/home"); // Redirect to home after login
  //   } catch (error) {
  //     console.error("Error during Google login:", error);
  //     // Handle errors if necessary
  //   }
  // };

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
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(4px)",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "90%",
          maxWidth: "400px",
          margin: "auto",
          fontFamily: "Future2",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            fontFamily: "Future2",
            letterSpacing: { sm: "0rem", md: "0.3rem" },
            color: "red",
            fontSize: "1.9rem",
            fontWeight: "bold",
            zIndex: 10,
          }}
        >
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            onBlur={() => trigger("email")}
            margin="normal"
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "green",
                },
                fontFamily: "Future2",
              },
            }}
            InputProps={{
              sx: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: errors.email ? "red" : "green",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: errors.email ? "red" : "green",
                  opacity: 1,
                },
                fontFamily: "Future2",
              },
            }}
            FormHelperTextProps={{
              sx: {
                fontFamily: "Future2",
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            onBlur={() => trigger("password")}
            margin="normal"
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "green",
                },
                fontFamily: "Future2",
              },
            }}
            InputProps={{
              sx: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: errors.password ? "red" : "green",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: errors.password ? "red" : "green",
                  opacity: 1,
                },
              },
              endAdornment: (
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            FormHelperTextProps={{
              sx: {
                fontFamily: "Future2",
              },
            }}
          />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              padding: 1,
              background: "linear-gradient(to right, #972525, #e80b0b)",
              color: "#fff",
              fontFamily: "Future2",
              "&:hover": {
                background: "linear-gradient(to left, #972525, #e80b0b)",
              },
            }}
          >
            Log In
          </Button> */}
           <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              padding: 1,
              background: "linear-gradient(to right, #972525, #e80b0b)",
              color: "#fff",
              fontFamily: "Future2",
              "&:hover": {
                background: "linear-gradient(to left, #972525, #e80b0b)",
              },
            }}
          >
            Log In
          </Button>


           {/* Google Login Button */}
           <Button
            fullWidth
            variant="outlined"
            onClick={signInWithGoogle}
            
            sx={{
              mt: 2,
              mb: 2,
              padding: 1,
              borderColor: "white",
              color: "white",
              fontFamily: "Future2",
              backgroundColor:'#4285F4',
              "&:hover": {
                borderColor: 'white',
                backgroundColor: '#357ae8', 
              },
            }}
          >
            Sign in with Google
          </Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              Don't have an account?
              <Link
                href="/register"
                variant="body2"
                sx={{
                  fontFamily: "Future2",
                  color: "green",
                  padding: "0.5rem",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  "&:hover": {
                    color: "#2b6f0e",
                  },
                }}
              >
                Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {"Login successful! Redirecting to home page..."}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
