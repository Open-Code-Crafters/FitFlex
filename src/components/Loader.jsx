import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LoaderImg from '../assets/img/Loader.gif';

const Loader = ({ message = 'Loading...' }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        opacity: 0,
        animation: 'fadeIn 0.5s forwards',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <img
        src={LoaderImg}
        alt="FitFlex Logo"
        style={{
          width: '120px',
          marginBottom: '2px',
        }}
      />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {message}
      </Typography>

      {/* Keyframe for spin animation */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Loader;
