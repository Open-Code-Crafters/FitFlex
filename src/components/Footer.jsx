import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Button,
  Modal,
  Grid,
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
import Tracker from "./Tracker";

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
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
              FitLife
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "grey.400", textAlign: "center" }}>
            Your companion for a healthy lifestyle. Track your fitness, stay motivated, and be your best self with FitLife.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#333333", padding: "8px 16px", borderRadius: "8px", width: "200px" }}>
              <FaGithub style={{ marginRight: "8px", color: "#fff" }} />
              <a href="https://github.com/Open-Code-Crafters/FitFlex" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold", marginRight: "8px" }}>
                Star Us ⭐
              </a>
              <Typography sx={{ color: "#fff" }}>{stars > 0 ? stars : ""}</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "220px", padding: "16px", borderRadius: "12px", backgroundColor: "#000000", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
                  <img src="https://hitwebcounter.com/counter/counter.php?page=17135996&style=0006&nbdigits=5&type=page&initCount=1000" alt="Visit counter for websites" style={{ border: "none" }} />
                </a>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "19px", color: "#ffffff", textAlign: "center" }}>
                Total Visitors
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Dynamic Footer Links */}
        {[
          { title: "About", links: ["Our Story", "Team", "Career", "Content", "Press"], paths: ["/home", "/about", "/services", "/blog", "#"] },
          { title: "Services", links: ["Personal Coaching", "Group Classes", "Online Programs", "Corporate Wellness"], paths: ["/services"] },
          { title: "Resources", links: ["Academy", "Blog", "Health Tips", "FAQs", "Support"], paths: ["/about", "/blog", "/healthtips", "#faq", "#resources"] },
          { title: "Company", links: ["About Us", "Careers", "Teams", "Contact Us", "Privacy Policy", "Terms of Use"], paths: ["/about", "#", "#", "/contact", "/privacy-policy", "/terms-of-use"] },
        ].map((section, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
              {section.title}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              {section.links.map((link, idx) => (
                <Link key={idx} component={RouterLink} to={section.paths[idx]} color="grey.400" display="block" sx={{ textDecoration: "none", fontSize: "0.9rem", "&:hover": { color: "#fff" } }}>
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        {[
          { Icon: FaFacebookF, url: "https://www.facebook.com" },
          { Icon: FaTelegramPlane, url: "https://web.telegram.org" },
          { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
          { Icon: FaInstagram, url: "https://www.instagram.com" },
          { Icon: FaYoutube, url: "https://www.youtube.com" },
          { Icon: faTwitter, url: "https://twitter.com" },
        ].map(({ Icon, url }, index) => (
          <IconButton key={index} href={url} target="_blank" color="inherit" sx={{ color: "grey.500", "&:hover": { color: "#fff" } }}>
            <FontAwesomeIcon icon={Icon} />
          </IconButton>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", fontSize: { xs: "0.7rem", sm: "0.8rem" }, color: "grey.500", mt: { xs: "15px", sm: "20px" } }}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} FitLife. All Rights Reserved.</Typography>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, bgcolor: "background.paper", margin: "auto", mt: "20%", width: "80%", outline: "none" }}>
          <Tracker />
          <Button onClick={handleClose} sx={{ mt: 2 }} color="secondary" variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Footer;
