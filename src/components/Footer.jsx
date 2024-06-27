import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/fitness1.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2b2b2b',
        color: 'white',
        padding: 2,
        borderTopRightRadius: '50px',
        marginTop: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', marginLeft: 5, marginTop: 5 }}>
            <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                ABOUT
              </Typography>
              <Box sx={{ fontSize: "1rem", fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Our Story
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Team
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Careers
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Press
                </Link>
              </Box>
            </Box>
            <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                SERVICES
              </Typography>
              <Box sx={{ fontSize: "1rem", fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Personal Coaching
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Group Classes
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Online Programs
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Corporate Wellness
                </Link>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                RESOURCES
              </Typography>
              <Box sx={{ fontSize: "1rem", fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Blog
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Health Tips
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  FAQs
                </Link>
                <Link href="#" color="grey.100" display="block" gutterBottom sx={{ textAlign: 'left', textDecoration: "none", paddingBottom: "5px" }}>
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <img src={logo} alt="Fitflex Logo" style={{ width: '100px', marginBottom: '10px' }} />
          <Typography variant="body1" mt={1} textAlign="center" sx={{ fontFamily: "Impact, Charcoal, sans-serif" }}>
            #TransformWithFitFlex
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton
              href="#"
              color="inherit"
              sx={{
                fontSize: '2rem',
                '&:hover': {
                  color: 'grey.500',
                },
                mx: 0.3
              }}
            >
              <FaFacebookF fontSize="inherit" />
            </IconButton>
            <IconButton
              href="#"
              color="inherit"
              sx={{
                fontSize: '2rem',
                '&:hover': {
                  color: 'grey.500',
                },
                mx: 0.3
              }}
            >
              <FaInstagram fontSize="inherit" />
            </IconButton>
            <IconButton
              href="#"
              color="inherit"
              sx={{
                fontSize: '2rem',
                '&:hover': {
                  color: 'grey.500',
                },
                mx: 0.3
              }}
            >
              <FaTwitter fontSize="inherit" />
            </IconButton>
            <IconButton
              href="#"
              color="inherit"
              sx={{
                fontSize: '2rem',
                '&:hover': {
                  color: 'grey.500',
                },
                mx: 0.3
              }}
            >
              <FaYoutube fontSize="inherit" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
