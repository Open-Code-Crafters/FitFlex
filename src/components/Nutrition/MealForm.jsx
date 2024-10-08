import React, { useState } from 'react';
import nutritionService from './nutritionService';

const MealForm = ({ onAddMeal }) => {
  const [foodItem, setFoodItem] = useState('');
  const [portionSize, setPortionSize] = useState('');
  const [mealType, setMealType] = useState('Breakfast');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nutritionData = await nutritionService.getNutrition(foodItem, portionSize);
    const newMeal = { foodItem, portionSize, mealType, ...nutritionData };
    onAddMeal(newMeal);
    setFoodItem('');
    setPortionSize('');
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
        type="text"
        placeholder="Portion Size (e.g., 1 cup)"
        value={portionSize}
        onChange={(e) => setPortionSize(e.target.value)}
        required
      />
      <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default MealForm;
