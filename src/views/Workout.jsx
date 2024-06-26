// this component is temperary and will be replaced with the actual workout and exercise components



import { Box, Typography, Grid } from '@mui/material';

const Workout = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
            <Typography variant="h1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                Workout Page
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {/* Add your workout and exercise components here */}
                <Grid item xs={12} sm={6} md={4}>
                    {/* Workout component */}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {/* Exercise component */}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {/* Exercise component */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Workout;