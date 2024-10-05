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
import fitnessPrimaryLogo from "../assets/fitness1.png"; // Primary logo
import { motion } from "framer-motion";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Pages for the navbar
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
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
              height: scrollPosition > 0 ? "50px" : "150px", // Adjust height for smaller/bigger scroll
              transition: "height 0.5s ease",
              alignItems: "center",
            }}
          >
            {/* Logo - Bigger and fixed */}
            <Typography sx={{ display: "flex", alignItems: "center" }} component="div">
              <NavLink to="/">
                <motion.img
                  src={fitnessPrimaryLogo}
                  alt="logo"
                  style={{
                    height: "120px", // Big height for the logo
                    width: "120px",  // Big width for the logo
                    marginRight: "20px", // Add space after the logo
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.1 }} // Slight hover effect for interactivity
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
              #TransformWithFitFlex
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
