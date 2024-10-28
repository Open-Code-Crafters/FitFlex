import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import backgroundImage from '../assets/img/trackerbg2.jpg';
// import Header from './Header';

const Tracker =()=> {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const fetchNutritionData = async () => {
        try {
            const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': '', // Directly using your API key for testing
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setResult(data.items || []);
            setError(null);
        } catch (error) {
            console.error('Error:', error);
            setError('Error fetching data');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchNutritionData();
    };

    const handleDelete = (index) => {
        const newResult = result.filter((_, i) => i !== index);
        setResult(newResult);
    };

    return (
        <>
            {/* <Header /> */}
            <Container 
                maxWidth="xxl"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                    mt: 4,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '0rem',
                }}
            >
                <Paper 
                    elevation={3} 
                    sx={{ 
                        padding: 2, 
                        opacity: 0.8, 
                        width: '100%', 
                        maxWidth: '1080px' 
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                        Calorie Tracker
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <TextField
                            label="Enter food items"
                            variant="outlined"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            fullWidth
                            sx={{ maxWidth: '500px' }}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                        >
                            Get Nutrition Info
                        </Button>
                    </form>
                    {error && (
                        <Typography color="error" align="center" sx={{ marginTop: 2 }}>
                            {error}
                        </Typography>
                    )}
                    {result.length > 0 && (
                        <TableContainer sx={{ marginTop: 4 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {['Name', 'Calories', 'Serving Size', 'Total Fat', 'Sugar', 'Protein', 'Carbohydrates', 'Actions'].map((header) => (
                                            <TableCell key={header}>{header}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {result.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.calories}</TableCell>
                                            <TableCell>{item.serving_size_g} g</TableCell>
                                            <TableCell>{item.fat_total_g} g</TableCell>
                                            <TableCell>{item.sugar_g} g</TableCell>
                                            <TableCell>{item.protein_g} g</TableCell>
                                            <TableCell>{item.carbohydrates_total_g} g</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleDelete(index)} color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Paper>
            </Container>
        </>
    );
}

export default Tracker;
