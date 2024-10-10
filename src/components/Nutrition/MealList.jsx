import React from 'react';

const MealList = ({ meals, onDeleteMeal }) => {
  return (
    <div className="meal-list">
      <h3>Meal History</h3>
      {meals.map((meal, index) => (
        <div key={index} className="meal-item">
          <p>{meal.foodItem} ({meal.portionSize}) - {meal.calories} calories</p>
          <button onClick={() => onDeleteMeal(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MealList;
