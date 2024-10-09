import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Box, TextField, Button } from "@mui/material";  

function Subscribe() {
  const [email, setEmail] = useState("");
  const { firestore } = useFirebase();

  // using regex to make sure user enter valid email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(firestore, "subscribers"), {
        email: email,  
        timestamp: new Date(),
      });

      alert("Email successfully added!");
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add email.");
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
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Enter your email address"
        fullWidth
        value={email}  
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          backgroundColor: "transparent",
          input: {
            padding: { xs: "8px", sm: "10px 12px" },
            color: "#000",
            "&::placeholder": {
              color: "#777",
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
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "30px",
          padding: { xs: "8px 15px", sm: "10px 20px" },
          boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
          "&:hover": {
            backgroundColor: "#f1c40f",
          },
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
}

export default Subscribe;
