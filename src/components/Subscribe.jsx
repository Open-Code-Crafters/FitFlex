import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // using regex to make sure user enter valid email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }


    try {
      // Make a POST request to your backend API using fetch
      const response = await fetch('http://localhost:5000/api/newsletter/suscribe', {
        method: 'POST', // The HTTP method
        headers: {
          'Content-Type': 'application/json', // Indicating that we are sending JSON
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      if (response.ok) { // Check if the response status is OK (status 200-299)
        toast.success("Newsletter Successfully Subscribed!");
        setEmail(""); // Clear the email input after successful submission
        setName("");
      } else {
        toast.error("Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error submitting to API: ", error);
      toast.error("Failed to add email.");
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        backgroundColor: "#fff",
        borderRadius: "30px",
        padding: "2px",
        marginTop: '40px'
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Enter your name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          backgroundColor: "transparent",
          marginRight: '10px',
          input: {
            padding: { xs: "8px", sm: "10px 12px" },
            color: "#000",
            "&::placeholder": {
              color: "black",
              fontSize: "20px"
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
      <TextField
        variant="outlined"
        placeholder="Enter your email address"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mr-5"
        sx={{
          backgroundColor: "transparent",
          input: {
            padding: { xs: "8px", sm: "10px 12px" },
            color: "#000",
            "&::placeholder": {
              color: "black",
              fontSize: "20px"
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{
          backgroundColor: "orange",
          color: "white",
          borderRadius: "30px",
          padding: { xs: "8px 15px", sm: "10px 20px" },
          boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
          "&:hover": {
            backgroundColor: "green",
            color: "white"
          },
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
}

export default Subscribe;