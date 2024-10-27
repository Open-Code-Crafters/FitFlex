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
import GoogleTranslate from "./GoogleTranslate";
import Subscribe from "./Subscribe";
import Tracker from "./Tracker";

const Footer = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Load the embedded chatbot script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', "3CQjUebCFQdRORiKuycVw");
    script.setAttribute('domain', "www.chatbase.co");

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
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
            <img src={logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
              FitLife
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            Your companion for a healthy lifestyle. Track your fitness, stay motivated, and be your best self with FitLife.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Box>
            <Link component={RouterLink} to="/about" color="inherit" underline="none" sx={{ display: "block", mb: 0.5 }}>
              About Us
            </Link>
            <Link component={RouterLink} to="/services" color="inherit" underline="none" sx={{ display: "block", mb: 0.5 }}>
              Services
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" underline="none" sx={{ display: "block", mb: 0.5 }}>
              Contact
            </Link>
            <Link component={RouterLink} to="/blog" color="inherit" underline="none" sx={{ display: "block", mb: 0.5 }}>
              Blog
            </Link>
          </Box>
        </Grid>

        {/* Column 3: Newsletter Subscription and Tracker Button */}
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Stay Updated
          </Typography>

        {/* Column 1: About */}
        <Grid item xs={12} sm={6} md={2} data-aos="fade-up">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" }, // Responsive font size
              textAlign: { xs: "center", sm: "left" }, // Center text on mobile
            }}
          >
            About
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            {[
              { name: "Our Story", path: "/home" },
              { name: "Team", path: "/about" },
              { name: "Career", path: "/servies" },
              { name: "Content", path: "/Blog" },
              { name: "Press", path: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.path}
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                {item.name} {/* Use item.name for display */}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Column 2: Services */}
        <Grid item xs={12} sm={6} md={2} data-aos="fade-up"
          data-aos-delay="100">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Services
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            {[
              "Personal Coachings",
              "Group Classes",
              "Online Programs",
              "Corporate Wellness",
            ].map((item, index) => (
              <Link
                key={index}
                href="/services" // All links point to /services
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Column 3: Resources */}
        <Grid item xs={12} sm={6} md={2} data-aos="fade-up"
          data-aos-delay="200">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Resources
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            {[
              { name: "Academy", path: "/about" }, // Link to Resources section
              { name: "Blog", path: "/Blog" }, // Link to Resources section
              { name: "Health Tips", path: "/healthtips" }, // Link to HealthTips
              { name: "FAQs", path: "/#faq" }, // Link to FAQs section
              { name: "Support", path: "/#resources" }, // Link to Resources section
            ].map((item, index) => (
              <Link
                key={index}
                href={item.path} // Update to use item.path
                smooth={true}
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Column 4: Company */}
        <Grid item xs={12} sm={6} md={2} data-aos="fade-up"
          data-aos-delay="300">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Company
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            {[
              { name: "About Us", path: "/about" },
              { name: "Careers", path: "#" },
              { name: "Teams", path: "#" },
              { name: "Contact Us", path: "/contact" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.path}
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                {item.name}
              </Link>
            ))}
            <RouterLink to="privacy-policy" style={{ textDecoration: "none" }}>
              <Link
                key={5}
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  "&:hover": { color: "#fff" },
                }}
              >
                Privacy Policy
              </Link>
            </RouterLink>
            <RouterLink to="/terms-of-use" style={{ textDecoration: "none" }}>
              <Link
                key={1} // Change the key as necessary
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" }, // Responsive font size
                  "&:hover": { color: "#fff" }, // Change color on hover
                }}
              >
                Terms of Use
              </Link>
            </RouterLink>
          </Box>
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }} data-aos="fade-up"
          data-aos-delay="400">
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

          ></Typography>

        </Grid>


        {/* Social Media Icons */}
        <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
          <IconButton color="inherit" href="https://twitter.com" target="_blank" sx={{ mx: 1 }}>
            <FontAwesomeIcon icon={faXTwitter} />
          </IconButton>
          <IconButton color="inherit" href="https://facebook.com" target="_blank" sx={{ mx: 1 }}>
            <FaFacebookF />

      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
        data-aos="fade-up"
        data-aos-delay="200"
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
          <IconButton color="inherit" href="https://instagram.com" target="_blank" sx={{ mx: 1 }}>
            <FaInstagram />
          </IconButton>
          <IconButton color="inherit" href="https://youtube.com" target="_blank" sx={{ mx: 1 }}>
            <FaYoutube />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank" sx={{ mx: 1 }}>
            <FaLinkedinIn />
          </IconButton>
          <IconButton color="inherit" href="https://telegram.org" target="_blank" sx={{ mx: 1 }}>
            <FaTelegramPlane />
          </IconButton>
        </Grid>
      </Grid>


      {/* Tracker Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="tracker-modal-title"
        aria-describedby="tracker-modal-description"

      {/* Bottom Links */}
      <Box
        sx={{
          marginTop: { xs: "15px", sm: "20px" },
          textAlign: "center",
          fontSize: { xs: "0.7rem", sm: "0.8rem" },
          color: "grey.500",
        }}
        data-aos="fade-up"
        data-aos-delay="100"

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
    </Box>
  );
};

export default Footer;