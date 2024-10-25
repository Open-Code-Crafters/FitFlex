import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Box, TextField, Button, Typography } from "@mui/material";
import { toast } from "react-toastify";

function Subscribe() {
  const [email, setEmail] = useState("");
  const { firestore } = useFirebase();

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
      await addDoc(collection(firestore, "subscribers"), {
        email: email,
        timestamp: new Date(),
      });

      toast.success("You have successfully subscribed!");
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to add email.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#1E1E1E",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, color: "#E0E0E0", fontWeight: 500 }}>
        Subscribe to our Newsletter
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          type="email"
          variant="outlined"
          placeholder="Enter your email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "#333",
            mb: { xs: 2, sm: 0 },
            mr: { sm: 2 },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#555",
              },
              "&:hover fieldset": {
                borderColor: "#777",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#E0E0E0",
              },
              input: {
                color: "#E0E0E0",
                "::placeholder": {
                  color: "#aaa",
                  opacity: 1,
                },
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#007ACC",
            color: "white",
            borderRadius: "4px",
            padding: "10px 20px",
            boxShadow: "0px 2px 8px rgba(0, 122, 204, 0.4)",
            "&:hover": {
              backgroundColor: "#005a99",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

export default Subscribe;
