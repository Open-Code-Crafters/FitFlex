import "../fonts/index.css";
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Container,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import fitnessPrimaryLogo from "../assets/fitness1.png";
import fitnessSecondayrLogo from "../assets/fitness2.png";
import { motion } from "framer-motion";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Added "Blog" to the pages array
const pages = ["Home", "About", "Contact", "Register", "Blog"]; 

function Navbar() {
  const navigate = useNavigate();
  
  // Theme setup
  const navTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#000000",
      },
    },
  });
  
  // State for menu control
  const [anchorElNav, setAnchorElNav] = useState(null);

  // Menu open/close handlers
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    setAnchorElNav(null);
    if (url) {
      navigate(url);  // Correct usage of navigate
    }
  };

  // Scroll-related state
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scale, setScale] = useState(1);
  const [y2, setY2] = useState(13);
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [x2, setX2] = useState(0);
  const [x3, setX3] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      if (window.pageYOffset > 0) {
        setY(-50);
        setX(150);
        setX2(60);
        setScale(0.5);
        setY2(-22);
        setX3(70);
      } else {
        setScale(1);
        setY(0);
        setX3(10);
        setY2(13);
        setX(0);
        setX2(30);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={navTheme}>
      <AppBar
        position="sticky"
        sx={{
          background:
            "linear-gradient(90deg, #232526 0%, #1F1C2C 35%, #414345 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: scrollPosition > 0 ? "50px" : "100px",
              transition: "height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Typography sx={{ display: { xs: "none", md: "flex" } }} component="div">
              <NavLink to="/">
                <motion.img
                  src={fitnessPrimaryLogo}
                  alt="logo"
                  style={{
                    marginTop: "-55px",
                    height: "140px",
                    width: "150px",
                    position: "absolute",
                    top: "100%",
                    zIndex: 1,
                    scale: scale,
                    y: y,
                    transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: scale + 0.2 }}
                />
              </NavLink>
            </Typography>

            {/* Tagline */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <motion.div
                style={{
                  x: x,
                  fontFamily: "Impact, Charcoal, sans-serif",
                  transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                #TransformWithFitFlex
              </motion.div>
            </Typography>

            {/* Secondary Logo and Title */}
            <Typography
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
              component="div"
            >
              <motion.img
                src={fitnessSecondayrLogo}
                alt="logo"
                style={{
                  marginTop: "-55px",
                  height: "90px",
                  width: "280px",
                  position: "absolute",
                  top: "100%",
                  zIndex: 1,
                  scale: scale + 0.1,
                  y: y2,
                  x: x3,
                  transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  cursor: "pointer",
                }}
                whileHover={{ scale: scale + 0.2 }}
              />
            </Typography>

            {/* Menu for Mobile */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <IconButton
                size="small"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleCloseNavMenu(`/${page.toLowerCase()}`)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Menu for Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(`/${page.toLowerCase()}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
