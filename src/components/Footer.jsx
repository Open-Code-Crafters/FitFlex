import React from 'react';
import { Box, Typography, Link, IconButton, Grid, Divider } from '@mui/material'; // Import Divider
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/fitness1.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2b2b2b',
        color: 'white',
        padding: 4,
        marginTop: 0,
      }}
    >
      <Grid container spacing={3}>
        {/* ABOUT Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginTop:'20px',
            }}
          >
            ABOUT
          </Typography>
          <Box>
            {['Our Story', 'Team', 'Careers', 'Press'].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.100"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: 'none',
                  paddingBottom: '8px',
                  fontSize: '1.2rem',
                  '&:hover': { color: '#B17457' },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* SERVICES Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginTop:'20px',
            }}
          >
            SERVICES
          </Typography>
          <Box>
            {['Personal Coaching', 'Group Classes', 'Online Programs', 'Corporate Wellness'].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.100"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: 'none',
                  paddingBottom: '8px',
                  fontSize: '1.2rem',
                  '&:hover': { color: '#B17457' },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* RESOURCES Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem', 
              marginTop:'20px',
            }}
          >
            RESOURCES
          </Typography>
          <Box>
            {['Blog', 'Health Tips', 'FAQs','Contact Us'].map((item, index) => (
              <Link
                key={index}
                href="#"
                color="grey.100"
                display="block"
                gutterBottom
                sx={{
                  textDecoration: 'none',
                  paddingBottom: '8px',
                  fontSize: '1.2rem', // Adjusted font size for the links
                  '&:hover': { color: '#B17457' },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Logo and Hashtag Section */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end', // Align items to the right
            marginBottom:'25px',
          }}
        >
          <Box sx={{ textAlign: 'right' }}>
            <img
              src={logo}
              alt="Fitflex Logo"
              style={{ width: '200px', marginRight:'100px' }}
            />
            <Typography
              variant="body1"
              mt={1}
              sx={{
                fontFamily: 'Impact, Charcoal, sans-serif',
                fontSize: '1.4rem',
                marginRight:'100px',
              }}
            >
              #TransformWithFitFlex
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Divider line */}
      <Divider
        sx={{
          backgroundColor: 'white', // white color for the line
          marginTop: '20px',
          marginBottom: '25px',
          height: '2px', // visible thickness
        }}
      />

      {/* Social Media Icons below the divider */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {[FaFacebookF, FaInstagram, faXTwitter, FaYoutube].map((Icon, index) => (
          <IconButton
            key={index}
            href="#"
            color="inherit"
            sx={{
              fontSize: '2rem',
              '&:hover': { color: 'grey.500' },
              mx: 1,
            }}
          >
            {index === 2 ? <FontAwesomeIcon icon={Icon} /> : <Icon fontSize="inherit" />}
          </IconButton>
        ))}
      </Box>

      {/* Copyright text below the social media icons */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          fontFamily: 'Arial, Helvetica, sans-serif',
          marginTop: '20px',
        }}
      >
        © 2024 FitFlex. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
