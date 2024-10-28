import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  TextField,
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
import logo from "../assets/fitness1.png"; // Replace with your logo
import Subscribe from "./Subscribe";
import Tracker from "./Tracker";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        padding: { xs: "20px 10px", sm: "30px 20px", md: "40px 20px" }, // Responsive padding
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent={{ xs: "center", sm: "space-between" }} // Center content for mobile screens
        alignItems={{ xs: "center", sm: "normal" }} // Normal content for PC screens
        direction={{ xs: "column", sm: "row" }} // Stack items on mobile
      >

        {/* Column 1: Logo and Description */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
            <img src={logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
              FitLife
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1, paddingLeft: 2 }}>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Your companion for a healthy lifestyle. Track your fitness, stay motivated, and be your best self with FitLife.
            </Typography>
          </Box>
        </Grid>

        {/* Columns 2-5: About, Services, Resources, Company */}
        {[
          { title: "About", links: ["Our Story", "Team", "Career", "Content", "Press"], paths: ["/home", "/about", "/services", "/blog", "#"] },
          { title: "Services", links: ["Personal Coaching", "Group Classes", "Online Programs", "Corporate Wellness"], path: "/services" },
          { title: "Resources", links: ["Academy", "Blog", "Health Tips", "FAQs", "Support"], paths: ["/about", "/blog", "/healthtips", "/#faq", "/#resources"] },
          { title: "Company", links: ["About Us", "Careers", "Teams", "Contact Us", "Privacy Policy", "Terms of Use"], paths: ["/about", "#", "#", "/contact", "/privacy-policy", "/terms-of-use"] }
        ].map((section, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              {section.title}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              {section.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={section.path || section.paths[idx]}
                  color="grey.400"
                  display="block"
                  gutterBottom
                  sx={{
                    textDecoration: "none",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}

        {/* Newsletter Subscription */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",  // Full-width container
            mt: 4, // Margin-top for spacing
          }}
        >
          {/* Subscribe Newsletter */}

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

        </Box>
      </Grid>

      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        {[
          { Icon: FaFacebookF, url: "https://www.facebook.com" },
          { Icon: FaTelegramPlane, url: "https://web.telegram.org" },
          { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
          { Icon: FaInstagram, url: "https://www.instagram.com" },
          { Icon: FaYoutube, url: "https://www.youtube.com" },
          { Icon: faXTwitter, url: "https://twitter.com" },
        ].map(({ Icon, url }, index) => (
          <IconButton
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
              mx: { xs: 0.5, sm: 1 },
              color: "grey.500",
              "&:hover": { color: "#fff" },
            }}
          >
            {index === 5 ? (
              <FontAwesomeIcon icon={Icon} />
            ) : (
              <Icon fontSize="inherit" />
            )}
          </IconButton>
        ))}
      </Box>

      {/* Bottom Links */}
      <Box
        sx={{
          marginTop: { xs: "15px", sm: "20px" },
          textAlign: "center",
          fontSize: { xs: "0.7rem", sm: "0.8rem" },
          color: "grey.500",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: "10px", sm: "20px" },
            marginBottom: "10px",
          }}
        >
          {[
            "Privacy Policy",
            "Terms of Use",
            "Sales and Refunds",
            "Legal",
            "Site Map",
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="grey.400"
              sx={{
                textDecoration: "none",
                "&:hover": { color: "#fff" },
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: "grey.500" }}>
          &copy; 2024 All Rights Reserved
        </Typography>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="tracker-modal-title"
        aria-describedby="tracker-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: { xs: "90%", sm: "70%", md: "50%" },
            borderRadius: 2,
          }}
        >
          <Typography id="tracker-modal-title" variant="h6" component="h2">
            Calorie Tracker
          </Typography>
          <Tracker />
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>


    </Box >
  );
};

export default Footer;