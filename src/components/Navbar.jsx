import "../fonts/index.css";
import GoogleTranslate from "./GoogleTranslate";
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Container,
  Box,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import fitnessPrimaryLogo from "../assets/fitness1.png";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";

const pages = ["Home", "About", "Contact", "Services", "Register"];

function Navbar(props) {
  const navigate = useNavigate();
  const navTheme = createTheme({
    palette: {
      mode: props.mode,
      primary: { main: "#000000" },
    },
  });
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [language, setLanguage] = useState("EN");

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleLanguageChange = (event) => setLanguage(event.target.value);

  // Scroll-based transformations
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scale, setScale] = useState(1);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      if (window.pageYOffset > 0) {
        setScale(0.8);
        setY(-20);
      } else {
        setScale(1);
        setY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      ".nav-link",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "bounce.out",
      }
    );

    gsap.fromTo(
      ".website-name",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "bounce.out",
      }
    );
  }, []);

  return (
    <ThemeProvider theme={navTheme}>
      <AppBar
        position="fixed"
        sx={{ background: "linear-gradient(90deg, #232526 0%, #1F1C2C 100%)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: scrollPosition > 0 ? "70px" : "100px", transition: "height 0.3s" }}>
            <NavLink to="/">
              <motion.img
                src={fitnessPrimaryLogo}
                alt="logo"
                style={{
                  height: "60px",
                  width: "80px",
                  scale,
                  y,
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
              />
            </NavLink>

            <Typography variant="h6" component="div" className="website-name" sx={{ flexGrow: 1, ml: 2, fontSize: "1.5rem", fontWeight: "bold" }}>
              FitFlex
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "right" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(`/${page.toLowerCase()}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className="nav-link"
                >
                  {page === "Register" ? (
                    <Box
                      component="span"
                      sx={{
                        backgroundColor: "#ff4081",
                        color: "white",
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        fontWeight: "bold",
                      }}
                    >
                      {page}
                    </Box>
                  ) : (
                    page
                  )}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center", ml: "auto" }}>
              <Select
                value={language}
                onChange={handleLanguageChange}
                sx={{ color: "white", mr: 2, minWidth: 80 }}
              >
                <MenuItem value="EN">EN</MenuItem>
                <MenuItem value="ES">ES</MenuItem>
                <MenuItem value="FR">FR</MenuItem>
                <MenuItem value="DE">DE</MenuItem>
                <MenuItem value="CN">CN</MenuItem>
              </Select>

              <IconButton
                onClick={props.toggleMode}
                color="inherit"
                sx={{ mr: 1 }}
              >
                {props.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <GoogleTranslate />
    </ThemeProvider>
  );
}

export default Navbar;
