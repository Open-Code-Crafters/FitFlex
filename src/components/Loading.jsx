import React from 'react';
import { CircularProgress, Box, useTheme } from '@mui/material';

const LoadingSpinner = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress 
        size={60} // Customize size
        thickness={5} // Customize thickness
        sx={{
          color: '#9c132d', // Match the theme color
        }}
      />
    </Box>
  );
};

export default LoadingSpinner;
