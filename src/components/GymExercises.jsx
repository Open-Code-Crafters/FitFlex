
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import data from '../data/Exercises.json';  // Assuming you have the JSON file locally
import GymExerciseCard from './GymExerciseCard';
function GymExercises({info}) {
  return (
   
      <Box sx={{ padding: 2 }}>
      {data.map((section) => (
        <Box key={section.name} sx={{ marginBottom: 4 }}>
          {/* Heading with body part name */}
          <Typography variant="h4" gutterBottom sx={{ color: 'rgb(133, 133, 133)', // Grey color
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16.8px', // Margin bottom
              marginTop: '14.707px' }}>
            {section.name}
          </Typography>
          
          {/* Horizontal scrolling container for the cards */}
          <Grid 
            container 
            spacing={2} 
            direction="row" 
            wrap="nowrap" 
            sx={{ overflowX: 'auto', paddingBottom: 2 }}
          >
            {section.plans.map((plan) => (
              <GymExerciseCard key={plan.id} plan={plan} />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default GymExercises
