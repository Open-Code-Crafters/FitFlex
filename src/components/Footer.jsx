import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  Modal,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "../assets/fitness1.png";
import GoogleTranslate from "./GoogleTranslate";
import Subscribe from "./Subscribe";
import Tracker from "./Tracker";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [visits, setVisits] = useState(0);
  const [stars, setStars] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Load the embedded chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "3CQjUebCFQdRORiKuycVw");
    script.setAttribute("domain", "www.chatbase.co");

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Open-Code-Crafters/FitFlex"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };
    fetchStars();
  }, []);

  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitCounter", visits);
  }, [visits]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        padding: { xs: "20px 10px", sm: "30px 20px", md: "40px 20px" },
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={{ xs: "center", sm: "normal" }}
        direction={{ xs: "column", sm: "row" }}
      >
        {/* Column 1: Logo and Description */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
              FitLife
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            Your companion for a healthy lifestyle. Track your fitness, stay
            motivated, and be your best self with FitLife.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Box>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 0.5 }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/services"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 0.5 }}
            >
              Services
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 0.5 }}
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/blog"
              color="inherit"
              underline="none"
              sx={{ display: "block", mb: 0.5 }}
            >
              Blog
            </Link>
          </Box>
        </Grid>

        {/* Column 3: Newsletter Subscription and Tracker Button */}
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
          <Subscribe />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            sx={{
              fontWeight: "bold",
              mt: 2,
              color: "#fff",
              backgroundColor: "grey.700",
              "&:hover": { backgroundColor: "grey.500" },
            }}
          >
            Open Tracker
          </Button>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
          <IconButton
            color="inherit"
            href="https://twitter.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://facebook.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaFacebookF />
          </IconButton>
        </Grid>
      </Grid>

      {/* Modal for Tracker */}
      <Modal open={open} onClose={handleClose} aria-labelledby="tracker-modal-title" aria-describedby="tracker-modal-description">
        <Box sx={{ width: "80%", maxWidth: "500px", margin: "auto", bgcolor: "background.paper", p: 3, borderRadius: 2 }}>
          <Typography id="tracker-modal-title" variant="h6" component="h2">
            Calorie Tracker
          </Typography>
          <Tracker />
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      {/* Footer Bottom Links */}
      <Box sx={{ textAlign: "center", mt: 2, fontSize: "0.8rem", color: "grey.500" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} TrailGo. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
