import React, { useState, useEffect } from "react";
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
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/fitness1.png";
import GoogleTranslate from "./GoogleTranslate";
import Subscribe from "./Subscribe";
import Tracker from "./Tracker"; // Ensure Tracker component is imported
import CounterCard from "./CounterCard";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [visits, setVisits] = useState(0);
  const [stars, setStars] = useState(0);

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
        backgroundColor: "#1c1c1e",
        color: "#e0e0e0",
        padding: { xs: "20px 10px", sm: "30px 20px", md: "40px 20px" },
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {/* Column 1: Logo and Description */}
        <Grid item xs={12} sm={6} md={4}
          sx={{
            '&  .css-18aimp8-MuiGrid-root': {
              flexBasis: '23.33%', // Set flex-basis for each item inside the grid
            }
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
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
        <Grid item xs={12} sm={6} md={4}
          sx={{
            '&  .css-18aimp8-MuiGrid-root': {
              flexBasis: '23.33%', // Set flex-basis for each item inside the grid
            },
            flexBasis: '20% !important'
          }}
        >
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
        <Grid item xs={12} sm={12} md={4}
          sx={{
            '&  .css-xdcxcr-MuiGrid-root': {
              flexBasis: '53.33%', // Set flex-basis for each item inside the grid
            },
            flexBasis: '40% !important'

          }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Stay Updated
          </Typography>

          {/* Column 1: About */}
          <div className="flex justify-between">
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
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              data-aos="fade-up"
              data-aos-delay="200"
            >
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
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              data-aos="fade-up"
              data-aos-delay="300"
            >
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
                <RouterLink
                  to="privacy-policy"
                  style={{ textDecoration: "none" }}
                >
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
          </div>
          {/* Newsletter Subscription */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{ textAlign: "center", maxWidth: '100% !important' }}
            data-aos="fade-up"
            data-aos-delay="400"
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
          </Grid>

        </Grid>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Stay Updated
        </Typography>
 

             

       

          <IconButton
            color="inherit"
            href="https://www.instagram.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaInstagram icon={faXTwitter} />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://facebook.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaFacebookF />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://web.telegram.org"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaTelegramPlane />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.linkedin.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaLinkedinIn />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.youtube.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaYoutube />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.linkedin.com"
            target="_blank"
            sx={{ mx: 1 }}
          >
            <FaLinkedinIn />
          </IconButton>

        </Grid>

      {/* Footer Bottom Links */}
      <Box sx={{ textAlign: "center", fontSize: { xs: "0.7rem", sm: "0.8rem" }, color: "grey.500", mt: { xs: "15px", sm: "20px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            mb: 2,
          }}
        >
          {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item, index) => (
            <Link
              key={index}
              href="#"
              color="grey.400"
              sx={{ textDecoration: "none", "&:hover": { color: "#fff" } }}
            >
              {item}
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="grey.500">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Box>

      {/* Modal for Tracker */}
      <Modal open={open} onClose={handleClose} aria-labelledby="tracker-modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", sm: "60%", md: "40%" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <Typography id="tracker-modal-title" variant="h6" gutterBottom>
            Calorie Tracker
          </Typography>
          <Tracker />
          <Button onClick={handleClose} sx={{ mt: 2 }} color="secondary" variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>


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
      </Box>
    </Box >



  );
};

export default Footer;
