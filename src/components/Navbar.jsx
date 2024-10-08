import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Container,
  Box,
  MenuItem,
  Menu,
  Toolbar,
} from "@mui/material";
import fitnessPrimaryLogo from "../assets/fitness1.png";
import fitnessSecondayrLogo from "../assets/fitness2.png";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/Navbar.css'; // Ensure to import your CSS styles

const pages = ["Home", "About", "Contact", "Blog", "Services", "Register"];

function Navbar() {
  const navigate = useNavigate();
  const navTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#000000",
      },
    },
  });
  
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scale, setScale] = useState(1);
  const [y2, setY2] = useState(13);
  const [y, setY] = useState(0);
  const [x3, setX3] = useState(10);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    navigate(url);
    setAnchorElNav(null);
  };

  const handleLogMealClick = () => {
    navigate('/log-meal');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      if (window.pageYOffset > 0) {
        setScale(0.5);
        setY(-50);
        setX3(70);
      } else {
        setScale(1);
        setY(0);
        setX3(10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={navTheme}>
      <AppBar position="sticky" sx={{ background: "linear-gradient(90deg, #232526 0%, #1F1C2C 35%, #414345 100%)" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: scrollPosition > 0 ? "50px" : "100px", transition: "height 0.5s" }}>
            <NavLink to="/">
              <motion.img
                src={fitnessPrimaryLogo}
                alt="logo"
                style={{ height: "140px", width: "150px", scale: scale, y: y }}
                whileHover={{ scale: scale + 0.2 }}
              />
            </NavLink>
            <Typography variant="h4" noWrap sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <motion.div style={{ fontFamily: "Future2", color: "white", fontWeight: "bold" }}>
                FitFlex
              </motion.div>
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <IconButton size="small" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(`/${page.toLowerCase()}`)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} onClick={() => handleCloseNavMenu(`/${page.toLowerCase()}`)} sx={{ color: "white" }}>
                  {page}
                </Button>
              ))}
            </Box>
            <Button className="log-meal-btn" onClick={handleLogMealClick} sx={{ color: "white" }}>
              Log Meal
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
