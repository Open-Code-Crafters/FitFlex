import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  TextField,
  Button,
  Container,
  Divider,
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
import GoogleTranslate from "./GoogleTranslate";
import Subscribe from "./Subscribe";

const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: [
        { name: "Our Story", path: "/home" },
        { name: "Team", path: "/about" },
        { name: "Career", path: "/services" },
        { name: "Content", path: "/Blog" },
        { name: "Press", path: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Personal Coachings", path: "/services" },
        { name: "Group Classes", path: "/services" },
        { name: "Online Programs", path: "/services" },
        { name: "Corporate Wellness", path: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Academy", path: "/about" },
        { name: "Blog", path: "/Blog" },
        { name: "Health Tips", path: "/healthtips" },
        { name: "FAQs", path: "/#faq" },
        { name: "Support", path: "/#resources" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "#" },
        { name: "Teams", path: "#" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, path: "#" },
    { Icon: FaTelegramPlane, path: "#" },
    { Icon: FaLinkedinIn, path: "#" },
    { Icon: FaInstagram, path: "#" },
    { Icon: FaYoutube, path: "#" },
    { Icon: FontAwesomeIcon, iconProp: faXTwitter, path: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111",
        color: "white",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 0 } }}>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3, fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' } }}
            >
              Stay Connected
            </Typography>
            <Subscribe />
            <Box sx={{ mt: 3 }}>
              <GoogleTranslate />
            </Box>
            <Box sx={{ mt: 4 }}>
              {socialIcons.map(({ Icon, iconProp, path }, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={path}
                  sx={{
                    color: "white",
                    mr: 2,
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      color: "primary.main",
                    },
                  }}
                >
                  {iconProp ? (
                    <FontAwesomeIcon icon={iconProp} size="lg" />
                  ) : (
                    <Icon size="1.5em" />
                  )}
                </IconButton>
              ))}
            </Box>
          </Grid>
          {footerSections.map((section) => (
            <Grid item xs={6} sm={3} md={1.5} key={section.title}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' } }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((item, index) => (
                  <Box component="li" key={index} sx={{ mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to={item.path}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
                        transition: "color 0.2s",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.1)" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            &copy; 2024 All Rights Reserved
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
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
                color="inherit"
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                  mx: 1,
                  transition: "color 0.2s",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;