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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import fitnessPrimaryLogo from "../assets/fitness1.png";
import fitnessSecondayrLogo from "../assets/fitness2.png";
import { motion } from "framer-motion";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const pages = ["Home", "About", "Contact", "Blog", "Services", "Register", "Packages"];

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
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    location.href = url;
    setAnchorElNav(null);
  };

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGetInTouch = () => {
    setDialogOpen(true); // Open the dialog when the button is clicked
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

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
                    transition:
                      "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: scale + 0.2 }}
                />
              </NavLink>
            </Typography>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, mr: 2, display: { xs: "none", md: "flex" } }}>
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

            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  fontFamily: "Future2",
                  letterSpacing: "0.5rem",
                  color: "white",
                  fontSize: { sm: "1rem", md: "2rem" },
                  fontWeight: "bold",
                }}
              >
                FitFlex
              </motion.div>
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <IconButton
                size="small"
                aria-label="account of current user"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      setAnchorElNav(null);
                      setTimeout(() => navigate(`/${page.toLowerCase()}`), 100);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    setAnchorElNav(null);
                    navigate(`/${page.toLowerCase()}`);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    alignItems: "center",
                  }}
                >
                  {page}
                </Button>
              ))}
              <Button
                onClick={handleGetInTouch}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  alignItems: "center",
                  backgroundColor: "red",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "darkred",
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dialog for Contact Information */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Email: support@fitflex.com
          </Typography>
          <Typography variant="body1">
            Phone: 123-456-7890
          </Typography>
          <Typography variant="body1">
            Address: 123 Fitness St, FitCity, FitState, 12345
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default Navbar;
