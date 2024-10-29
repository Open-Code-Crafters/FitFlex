import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
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
import Subscribe from "./Subscribe";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', "3CQjUebCFQdRORiKuycVw");
    script.setAttribute('domain', "www.chatbase.co");
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
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={{ xs: "center", sm: "normal" }}
        direction={{ xs: "column", sm: "row" }}
      >
        {/* Column 1: About */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.2rem" }, textAlign: { xs: "center", sm: "left" } }}>About</Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            {[
              { name: "Our Story", path: "/home" },
              { name: "Team", path: "/about" },
              { name: "Career", path: "/services" },
              { name: "Content", path: "/Blog" },
              { name: "Press", path: "#" },
            ].map((item, index) => (
              <Link key={index} href={item.path} color="grey.400" display="block" gutterBottom sx={{ textDecoration: "none", fontSize: { xs: "0.8rem", sm: "0.9rem" }, "&:hover": { color: "#fff" } }}>
                {item.name}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Additional columns and code omitted for brevity */}

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
          <Subscribe />
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "40px" }}>
        {[
          { Icon: FaFacebookF, url: "https://www.facebook.com" },
          { Icon: FaTelegramPlane, url: "https://web.telegram.org" },
          { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
          { Icon: FaInstagram, url: "https://www.instagram.com" },
          { Icon: FaYoutube, url: "https://www.youtube.com" },
          { Icon: faXTwitter, url: "https://twitter.com" },
        ].map(({ Icon, url }, index) => (
          <IconButton key={index} href={url} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" }, mx: { xs: 0.5, sm: 1 }, color: "grey.500", "&:hover": { color: "#fff" } }}>
            {index === 5 ? <FontAwesomeIcon icon={Icon} /> : <Icon fontSize="inherit" />}
          </IconButton>
        ))}
      </Box>

      {/* Bottom Links */}
      <Box sx={{ marginTop: { xs: "15px", sm: "20px" }, textAlign: "center", fontSize: { xs: "0.7rem", sm: "0.8rem" }, color: "grey.500" }}>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: { xs: "10px", sm: "20px" }, marginBottom: "10px" }}>
          {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item, index) => (
            <Link key={index} href="#" color="grey.400" sx={{ textDecoration: "none", "&:hover": { color: "#fff" } }}>{item}</Link>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: "grey.500" }}>
          &copy; 2024 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
