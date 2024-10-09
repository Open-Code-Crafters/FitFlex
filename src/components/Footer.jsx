import React, {useState} from "react";
import { Box, Typography, Link, IconButton, Grid, TextField, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/fitness1.png";  // Replace with your logo
import GoogleTranslate from './GoogleTranslate';
import Subscribe from "./Subscribe";
const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "white",
        padding: { xs: "20px 10px", sm: "30px 20px", md: "40px 20px" },  // Responsive padding
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent={{ xs: "center", sm: "space-between" }}  // Center content for mobile screens
        alignItems={{ xs: "center", sm: "normal" }} // Normal content for PC screens
        direction={{ xs: "column", sm: "row" }}  // Stack items on mobile
      >
        {/* Column 1: About */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },  // Responsive font size
              textAlign: { xs: "center", sm: "left" },  // Center text on mobile
            }}
          >
            About
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>  {/* Center links on mobile */}
            {["Our Story", "Team", "Career", "Content", "Press"].map((item, index) => (
              <Link
                key={index}
                href="#"
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

        {/* Column 2: Services */}
        <Grid item xs={12} sm={6} md={2}>
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
            {["Personal Coachings", "Group Classes", "Online Programs", "Corporate Wellness"].map((item, index) => (
              <Link
                key={index}
                href="#"
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
        <Grid item xs={12} sm={6} md={2}>
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
            {["Academy", "Blog", "Health Tips", "FaQs", "Support"].map((item, index) => (
              <Link
                key={index}
                href="#"
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

        {/* Column 4: Company */}
        <Grid item xs={12} sm={6} md={2}>
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
            {["About Us", "Careers", "Teams", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                href="#"
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
        
        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
        <Box className="translator"
              sx={{
                position:'relative',
                marginLeft: 'auto',
                marginRight: '0',
                marginBottom : '4px',
                color: "white",
                display: "block",
                alignItems: "center",
                width: 'fit-content',

              }}>
                            <GoogleTranslate/>
                        </Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Subscribe
          </Typography>
          {/* Subscribe Newsletter */}
          <Subscribe />
          
        </Grid>
        
      </Grid>

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
          {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item, index) => (
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

      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {[FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaInstagram, FaYoutube, faXTwitter].map(
          (Icon, index) => (
            <IconButton
              key={index}
              href="#"
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
          )
        )}
      </Box>
    </Box>
  );
};

export default Footer;
