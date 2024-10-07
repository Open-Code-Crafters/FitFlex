// src/components/MealLogForm.js

import React, { useState } from 'react';
import { fetchNutritionData } from '../api/nutritionixApi';

const MealLogForm = ({ addMeal }) => {
    const [foodItem, setFoodItem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Fetch nutrition data from Nutritionix API
        const nutritionData = await fetchNutritionData(foodItem);

        if (nutritionData && nutritionData.length > 0) {
            const selectedFood = nutritionData[0]; // Assuming you take the first result
            const newMeal = {
                foodItem: selectedFood.food_name,
                calories: selectedFood.nf_calories,
                protein: selectedFood.nf_protein,
                carbs: selectedFood.nf_total_carbohydrate,
                fat: selectedFood.nf_total_fat,
            };

            // Pass the new meal data to the parent component
            addMeal(newMeal);

            // Clear the form
            setFoodItem('');
        } else {
            alert('No food data found for the entered item.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter food item"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
                required
            />
            <button type="submit">Log Meal</button>
        </form>
    );
};

export default MealLogForm;
