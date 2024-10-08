import React, { useState, useEffect } from 'react';
import MealForm from './MealForm';
import MealList from './MealList';
import '../../styles/Nutrition/nutrition.css';

const LogMeal = () => {
  const [meals, setMeals] = useState([]);
  const [calorieCount, setCalorieCount] = useState(0); // State to hold total calorie count

  // Function to fetch meal data from Nutritionix API
  const fetchMealData = async (meal) => {
    const appId = '466e8d9a'; // Replace with your Nutritionix App ID
    const appKey = 'b1975484d742bede95d2098e323b2bba'; // Replace with your Nutritionix App Key

    try {
      const response = await fetch(`https://api.nutritionix.com/v1_1/search/${meal}?appId=${appId}&appKey=${appKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Assuming the first item in the response has the nutritional data you need
      if (data.hits.length > 0) {
        const calories = data.hits[0].fields.nf_calories; // Adjust the field as per the API response structure
        return calories;
      }
      return 0; // Return 0 if no data found
    } catch (error) {
      console.error('Error fetching meal data:', error);
      return 0; // Return 0 in case of an error
    }
  };

  // Update total calorie count whenever meals are added
  const updateCalorieCount = async (meal) => {
    const calories = await fetchMealData(meal);
    setCalorieCount((prevCount) => prevCount + calories);
  };

  const addMeal = (meal) => {
    setMeals([...meals, meal]);
    updateCalorieCount(meal); // Fetch and add calories for the new meal
  };

  const deleteMeal = (index) => {
    const deletedMeal = meals[index];
    setMeals(meals.filter((_, i) => i !== index));
    // Optionally, adjust calorie count here if needed
    // Consider recalculating total calories if the meal data is needed
    // setCalorieCount(prevCount => prevCount - deletedMeal.calories); // Assuming meals have calories stored
  };

  return (
    <div className="log-meal-page">
      <h2>Log Your Meal</h2>
      <p>Total Calorie Count: {calorieCount}</p> {/* Display total calorie count */}
      <MealForm onAddMeal={addMeal} />
      <MealList meals={meals} onDeleteMeal={deleteMeal} />
    </div>
  );
};

export default LogMeal;
