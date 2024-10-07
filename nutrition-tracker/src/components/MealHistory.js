// src/components/MealHistory.js

import React from 'react';

const MealHistory = ({ meals }) => {
    return (
        <div>
            <h2>Meal History</h2>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>
                        {meal.foodItem} - {meal.calories} calories
                        <ul>
                            <li>Protein: {meal.protein}g</li>
                            <li>Carbs: {meal.carbs}g</li>
                            <li>Fat: {meal.fat}g</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealHistory;
