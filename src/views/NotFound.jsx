import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h2" color="#9c132d">
        404
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: '#9c132d', 
          color: '#fff',
          '&:hover': { backgroundColor: (theme) => theme.palette.error.dark} 
        }} 
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
