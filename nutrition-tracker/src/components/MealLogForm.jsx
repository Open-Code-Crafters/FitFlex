import React, { useState } from 'react';
import axios from 'axios';

const MealLogForm = ({ addMeal }) => {
    const [foodItem, setFoodItem] = useState('');
    const [portionSize, setPortionSize] = useState(1);
    const [mealType, setMealType] = useState('breakfast');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nutritionData = await fetchNutritionData(foodItem);
        addMeal({
            foodItem,
            portionSize,
            mealType,
            calories: nutritionData.calories,
        });
        setFoodItem('');
        setPortionSize(1);
    };

    const fetchNutritionData = async (foodItem) => {
        const response = await axios.get(`API_URL?query=${foodItem}&apiKey=YOUR_API_KEY`);
        return response.data; // Adjust based on your API response structure
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Food Item"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Portion Size"
                value={portionSize}
                onChange={(e) => setPortionSize(e.target.value)}
                required
            />
            <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
            </select>
            <button type="submit">Log Meal</button>
        </form>
    );
};

export default MealLogForm;
