import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/fitness1.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2b2b2b",
        color: "white",
        padding: 4,
        borderTopRightRadius: "50px",
        marginTop: 0,
      }}
    >
      <Grid container spacing={3}>
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
            ABOUT
          </Typography>
          <Box>
            {["Our Story", "Team", "Careers", "Press"].map((item, index) => (
              <Link
                key={index}
                href="#"
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
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
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
            SERVICES
          </Typography>
          <Box>
            {[
              "Personal Coaching",
              "Group Classes",
              "Online Programs",
              "Corporate Wellness",
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
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
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
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
            RESOURCES
          </Typography>
          <Box>
            {[
              { name: "Blog", path: "#" },
              { name: "Health Tips", path: "/healthtips" }, // Link to HealthTips
              { name: "FAQs", path: "#" },
              { name: "Contact Us", path: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                component={RouterLink}
                to={item.path}
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
                {item.name}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Fitflex Logo"
            style={{ width: "120px", marginBottom: "15px" }}
          />
          <Typography
            variant="body1"
            mt={1}
            textAlign="center"
            sx={{
              fontFamily: "Impact, Charcoal, sans-serif",
              fontSize: "1.4rem",
            }}
          >
            #TransformWithFitFlex
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {[FaFacebookF, FaInstagram, faXTwitter, FaYoutube].map(
              (Icon, index) => (
                <IconButton
                  key={index}
                  href="#"
                  color="inherit"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem" }, 
                    "&:hover": { color: "grey.500" },
                    mx: { xs: 0.5, sm: 0.7 }, 
                  }}
                >
                  {index === 2 ? (
                    <FontAwesomeIcon icon={Icon} />
                  ) : (
                    <Icon fontSize="inherit" />
                  )}
                </IconButton>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
