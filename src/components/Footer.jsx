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
        backgroundColor: "#000",  // Set background to pure black
        color: "white",
        padding: "40px 20px",  // Increased padding for more spacing
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {/* Column 1: Product */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",  // Adjusted to fit the compact design
            }}
          >
            Product
          </Typography>
          <Box>
            {["Landing Page", "Popup Builder", "Web-design", "Content", "Integrations"].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: "0.9rem",  // Smaller font size
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Column 2: Use Cases */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Use Cases
          </Typography>
          <Box>
            {["Web-designers", "Marketers", "Small Business", "Website Builder"].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: "0.9rem",
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
              fontSize: "1rem",
            }}
          >
            Resources
          </Typography>
          <Box>
            {["Academy", "Blog", "Themes", "Hosting", "Developers", "Support"].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: "0.9rem",
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
              fontSize: "1rem",
            }}
          >
            Company
          </Typography>
          <Box>
            {["About Us", "Careers", "FAQs", "Teams", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.400"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Subscribe
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: "400px",
              backgroundColor: "#fff",
              borderRadius: "30px",  // Rounded corners for the input
              padding: "2px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email Address"
              fullWidth
              sx={{
                backgroundColor: "transparent",
                input: {
                  padding: "10px 12px",
                  color: "#000",
                  "&::placeholder": {
                    color: "#777",  // Light grey placeholder
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "30px",
                padding: "10px 20px",
                boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",  // Glowing effect
                "&:hover": {
                  backgroundColor: "#f1c40f",  // Yellow hover effect
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Links */}
      <Box
        sx={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "grey.500",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
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
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
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
