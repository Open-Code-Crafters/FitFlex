import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  Button,
  Modal,
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
import Subscribe from "./Subscribe";
import Tracker from "./Tracker";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "3CQjUebCFQdRORiKuycVw");
    script.setAttribute("domain", "www.chatbase.co");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      <Grid container spacing={3} justifyContent="space-between">
        
        {/* Logo and Description */}
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
            Your companion for a healthy lifestyle. Track your fitness, stay motivated, and be your best self with FitLife.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Box>
            {["About Us", "Services", "Contact", "Blog"].map((text, index) => (
              <Link
                component={RouterLink}
                to={`/${text.toLowerCase().replace(" ", "")}`}
                key={index}
                color="inherit"
                underline="none"
                sx={{ display: "block", mb: 0.5 }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Newsletter and Tracker */}
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Stay Updated
          </Typography>
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

          {[ 
            { icon: FaFacebookF, link: "https://facebook.com" },
            { icon: FaTelegramPlane, link: "https://web.telegram.org" },
            { icon: FaLinkedinIn, link: "https://linkedin.com" },
            { icon: FaInstagram, link: "https://instagram.com" },
            { icon: FaYoutube, link: "https://youtube.com" },
          ].map(({ icon: Icon, link }, index) => (
            <IconButton key={index} color="inherit" href={link} target="_blank" sx={{ mx: 1 }}>
              <Icon />

          
              <FontAwesomeIcon icon={Icon} fontSize="inherit" />

            </IconButton>
          ))}
        </Grid>
      </Grid>

      {/* Tracker Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="tracker-modal">
        <Box sx={{ /* Add your styling here for the Modal */ }}>
          <Tracker />
        </Box>
      </Modal>
    </Box>
  );
};

export default Footer;
