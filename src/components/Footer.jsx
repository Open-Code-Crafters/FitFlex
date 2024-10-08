import React from "react";
import { Box, Typography, Link, IconButton, Grid, TextField, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/fitness1.png";  // Replace with your logo

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

      <Grid container spacing={3}>
        {/* About Section */}
        <Grid item xs={12} sm={6} md={3}>

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


        {/* Services Section */}
        <Grid item xs={12} sm={6} md={3}>

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


        {/* Packages Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            PACKAGES
          </Typography>
          <Box>
            <Link
              component={RouterLink}
              to="/packages"
              color="grey.100"
              display="block"
              gutterBottom
              sx={{
                textDecoration: "none",
                paddingBottom: "8px",
                fontSize: "1.2rem",
                "&:hover": { color: "#f1c40f" },
              }}
            >
              Basic Package
            </Link>
            <Link
              component={RouterLink}
              to="/packages"
              color="grey.100"
              display="block"
              gutterBottom
              sx={{
                textDecoration: "none",
                paddingBottom: "8px",
                fontSize: "1.2rem",
                "&:hover": { color: "#f1c40f" },
              }}
            >
              Premium Package
            </Link>
            <Link
              component={RouterLink}
              to="/packages"
              color="grey.100"
              display="block"
              gutterBottom
              sx={{
                textDecoration: "none",
                paddingBottom: "8px",
                fontSize: "1.2rem",
                "&:hover": { color: "#f1c40f" },
              }}
            >
              VIP Package
            </Link>
            <Link
              component={RouterLink}
              to="/packages"
              color="grey.100"
              display="block"
              gutterBottom
              sx={{
                textDecoration: "none",
                paddingBottom: "8px",
                fontSize: "1.2rem",
                "&:hover": { color: "#f1c40f" },
              }}
            >
              Corporate Package
            </Link>
          </Box>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12} sm={6} md={3}>

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

          <Box>
            {[
              { name: "Blog", path: "#" },
              { name: "Health Tips", path: "/healthtips" },
              { name: "FAQs", path: "#" },
              { name: "Contact Us", path: "#" },
            ].map((item, index) => (

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


        {/* Logo and Social Media Icons */}
        <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={logo} alt="Fitflex Logo" style={{ width: "120px", marginBottom: "15px" }} />
          <Typography variant="body1" mt={1} textAlign="center" sx={{ fontFamily: "Impact, Charcoal, sans-serif", fontSize: "1.4rem" }}>
            #TransformWithFitFlex
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {[FaFacebookF, FaInstagram, faXTwitter, FaYoutube].map((Icon, index) => (
              <IconButton key={index} href="#" color="inherit" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, "&:hover": { color: "grey.500" }, mx: { xs: 0.5, sm: 0.7 } }}>
                {index === 2 ? <FontAwesomeIcon icon={Icon} /> : <Icon fontSize="inherit" />}
              </IconButton>
            ))}

          </Box>
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
