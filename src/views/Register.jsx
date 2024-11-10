import React, { useState, useEffect, useRef } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { debounce } from "lodash"; // Import lodash debounce
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Link,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Close as CloseIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import BackgrundImg from "../assets/home/homeImg1.jpg";
import { useFirebase } from "../context/Firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    confirmEmail: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    phone: z
      .string()
      .regex(
        /^\+\d{1,4}[- ]?\(?\d{1,3}?\)?[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}$/,
        "Invalid phone number"
      ),
    gender: z.enum(["Male", "Female", "PNS"]),
    dateOfBirth: z.string().refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age >= 18 && age <= 100;
      },
      {
        message: "You must be above 18 years",
      }
    ),
    height: z.preprocess(
      (val) => parseFloat(val),
      z
        .number()
        .positive("Height must be a positive number")
        .gte(100, "Height must be at least 100 cm")
        .lte(250, "Height must be at most 250 cm")
    ),
    weight: z.preprocess(
      (val) => parseFloat(val),
      z
        .number()
        .positive("Weight must be a positive number")
        .gte(20, "Weight must be at least 20 kg")
        .lte(250, "Weight must be at most 250 kg")
    ),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails don't match",
    path: ["confirmEmail"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, seterror] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate state for confirm password
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  // Toggle the password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Toggle the confirm password visibility
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Debounce handler to avoid frequent validation
  const handleDebouncedInput = useCallback(
    debounce(async (field) => {
      await trigger(field);
    }, 300),
    [] // empty dependencies ensure that debounce doesn't reinitialize on every render
  );

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = (data) => {

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate("/Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });

    setOpenSnackbar(true);

  };

  const height = watch("height");
  const weight = watch("weight");
  const [dob, setDob] = useState("");

  const handleDateChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,2}-?\d{0,2}-?\d{0,4}$/.test(value)) {
      setDob(value);
    }
  };

  const [bmiMessage, setBmiMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (!errors.height && !errors.weight && height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      let message = "";

      if (bmi < 18) {
        message = "You are underweight, not necessary to join";
      } else if (bmi >= 18 && bmi <= 25) {
        message = "You are at the right place to build up muscles";
      } else {
        message = "You must join, You are Overweight";
      }

      setBmiMessage(message);
      setOpenSnackbar(true);
    }
  }, [height, weight, errors]);






  const firebase = useFirebase();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  }





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
        height: "190vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        marginTop: "9rem",
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
          maxWidth: "600px",
          margin: "auto",
          fontFamily: "Future2",
        }}
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            fontFamily: "Future2",
            letterSpacing: { sm: "0rem", md: "0.5rem" },
            color: "red",
            fontSize: "1.9rem",
            fontWeight: "bold",
            zIndex: 10,
          }}
        >
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                {...register("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
                onBlur={() => trigger("firstName")}
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
                      borderColor: errors.firstName ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.firstName ? "red" : "green",
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                {...register("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
                onBlur={() => trigger("lastName")}
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
                      borderColor: errors.lastName ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.lastName ? "red" : "green",
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                ref={email}
                fullWidth
                label="Email"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                onBlur={() => handleDebouncedInput("email")} // Apply debou
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Email"
                {...register("confirmEmail")}
                error={!!errors.confirmEmail}
                helperText={
                  errors.confirmEmail ? errors.confirmEmail.message : ""
                }
                onBlur={() => trigger("confirmEmail")}
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
                      borderColor: errors.confirmEmail ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.confirmEmail ? "red" : "green",
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                ref={password}
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                onBlur={() => handleDebouncedInput("password")} // Apply debounce onBlur
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
                    fontFamily: "Caveat",
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword.message : ""
                }
                onBlur={() => handleDebouncedInput("confirmPassword")} // Apply debounce onBlur
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
                      borderColor: errors.confirmPassword ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.confirmPassword ? "red" : "green",
                      opacity: 1,
                    },
                    fontFamily: "Caveat",
                  },
                  endAdornment: (
                    <IconButton onClick={handleClickShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                FormHelperTextProps={{
                  sx: {
                    fontFamily: "Future2",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone (+91-9876543210)"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
                onBlur={() => trigger("phone")}
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
                      borderColor: errors.phone ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.phone ? "red" : "green",
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
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.gender}>
                <InputLabel
                  sx={{
                    fontFamily: "Future2",
                    "&.Mui-focused": { color: "green" },
                  }}
                >
                  Gender
                </InputLabel>
                <Select
                  label="Gender"
                  {...register("gender")}
                  defaultValue=""
                  onChange={() => {
                    handleDebouncedInput("gender");
                  }}
                  sx={{
                    fontFamily: "Future2",
                    "& .MuiInputBase-input": {
                      fontFamily: "Future2",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "green",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.gender ? "red" : "green",
                    },
                    "& .MuiInputBase-root": {
                      background: "transparent",
                    },
                  }}
                >
                  <MenuItem
                    value="Male"
                    sx={{ fontFamily: "Future2", background: "transparent" }}
                  >
                    Male
                  </MenuItem>
                  <MenuItem
                    value="Female"
                    sx={{
                      fontFamily: "Future2",
                      backgroundColor: "transparent",
                    }}
                  >
                    Female
                  </MenuItem>
                  <MenuItem
                    value="PNS"
                    sx={{
                      fontFamily: "Future2",
                      backgroundColor: "transparent",
                    }}
                  >
                    Prefer not to say
                  </MenuItem>
                </Select>
                {errors.gender && (
                  <FormHelperText sx={{ fontFamily: "Future2" }}>
                    {errors.gender.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                {...register("dateOfBirth")}
                error={!!errors.dateOfBirth}
                helperText={
                  errors.dateOfBirth ? errors.dateOfBirth.message : ""
                }
                onChange={() => handleDebouncedInput("dateOfBirth")} // Apply debounce onChange
                InputLabelProps={{
                  shrink: true,
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
                      borderColor: errors.dateOfBirth ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.dateOfBirth ? "red" : "green",
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Height (cm)"
                type="number"
                {...register("height")}
                error={!!errors.height}
                helperText={errors.height ? errors.height.message : ""}
                onChange={() => handleDebouncedInput("height")} // Apply debounce onChange
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
                      borderColor: errors.height ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.height ? "red" : "green",
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Weight (kg)"
                type="number"
                {...register("weight")}
                error={!!errors.weight}
                helperText={errors.weight ? errors.weight.message : ""}
                onChange={() => handleDebouncedInput("weight")} // Apply debounce onChange
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
                      borderColor: errors.weight ? "red" : "green",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: errors.weight ? "red" : "green",
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
            </Grid>
          </Grid>
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Already have an account?
              <Link
                href="/login"
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
                Log in
              </Link>
              {/* <button onClick={signInWithGoogle}>SignIn with Google</button> */}

              <Button
                variant="contained"
                color="primary"
                startIcon={<GoogleIcon />}
                onClick={signInWithGoogle}
                sx={{
                  marginTop: 10, // Adjust spacing as needed
                  marginRight: 7,
                  backgroundColor: '#4285F4', // Google's blue color
                  color: 'white',
                  borderRadius: '25px',
                  padding: '10px 20px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  "&:hover": {
                    backgroundColor: '#357ae8',
                  },
                }}
              >
                Sign In with Google
              </Button>


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
          {bmiMessage || "Registration successful!"}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Register;
