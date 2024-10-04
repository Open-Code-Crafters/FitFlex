import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
function GymExerciseCard({plan}) {
  console.log(plan)
  return (
    <Grid item key={plan.id} sx={{ minWidth: 250 }}>
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' , transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effects
          '&:hover': {
            transform: 'scale(1.05)', // Scale the card on hover
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
          },}}>
    <CardMedia
        component="img"
        height="140"
        src={plan.gifUrl }
        alt={plan.name}
        
      />
      <CardContent sx={{ flexGrow: 1, alignItems: 'center', display: 'flex',
        flexDirection: 'column', textAlign: 'center'}}>
        <Typography variant="h6" sx={{ }}>{plan.name}</Typography>
      
        <Button variant="contained" color="primary"   sx={{
            marginTop: 2, // Fixed margin between typography and button
            padding: '10px 20px', // Increase padding for better appearance
              marginTop: 1,
              padding: '10px 20px', // Increase padding for better appearance
              backgroundColor: '#9c27b0', // Ensure the button uses the primary color
              '&:hover': {
                backgroundColor: 'primary.dark', // Darken on hover
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow on hover
              },
            }}>
          See Details
        </Button>
      </CardContent>
    </Card>
  </Grid>
  )
}

export default GymExerciseCard;
