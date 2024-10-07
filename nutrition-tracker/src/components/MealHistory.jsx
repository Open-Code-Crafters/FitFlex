import React from 'react';

const MealHistory = ({ meals }) => {
    return (
        <div>
            <h2>Meal History</h2>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>
                        {meal.foodItem} - {meal.portionSize} (Calories: {meal.calories})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealHistory;
