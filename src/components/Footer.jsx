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
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "../assets/fitness1.png"; // Replace with your logo
import GoogleTranslate from "./GoogleTranslate";
import Subscribe from "./Subscribe";
import Tracker from "./Tracker"; // Ensure Tracker is correctly imported if used

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
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Column 1: Logo and Description */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              FitLife
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "grey.400", textAlign: "center" }}
          >
            Your companion for a healthy lifestyle. Track your fitness, stay
            motivated, and be your best self with FitLife.
          </Typography>
        </Grid>

        {/* Columns 2-5: Links */}
        {[
          {
            title: "About",
            links: ["Our Story", "Team", "Career", "Content", "Press"],
            paths: ["/home", "/about", "/services", "/blog", "#"],
          },
          {
            title: "Services",
            links: [
              "Personal Coaching",
              "Group Classes",
              "Online Programs",
              "Corporate Wellness",
            ],
            paths: ["/services"],
          },
          {
            title: "Resources",
            links: ["Academy", "Blog", "Health Tips", "FAQs", "Support"],
            paths: ["/about", "/blog", "/healthtips", "/#faq", "/#resources"],
          },
          {
            title: "Company",
            links: [
              "About Us",
              "Careers",
              "Teams",
              "Contact Us",
              "Privacy Policy",
              "Terms of Use",
            ],
            paths: [
              "/about",
              "#",
              "#",
              "/contact",
              "/privacy-policy",
              "/terms-of-use",
            ],
          },
        ].map((section, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {section.title}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              {section.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={section.paths[idx]}
                  color="grey.400"
                  display="block"
                  sx={{ textDecoration: "none", "&:hover": { color: "#fff" } }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Subscribe Section */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Subscribe />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpen}
          sx={{ fontWeight: "bold" }}
        >
          Open Tracker
        </Button>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
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
            color="inherit"
            sx={{ color: "grey.500", "&:hover": { color: "#fff" } }}
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
      <Box sx={{ textAlign: "center", mt: 4, color: "grey.500" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} FitLife. All Rights Reserved.
        </Typography>
      </Box>

      {/* Tracker Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            p: 4,
            bgcolor: "background.paper",
            margin: "auto",
            mt: "20%",
            width: "80%",
          }}
        >
          <Typography id="tracker-modal-title" variant="h6">
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
