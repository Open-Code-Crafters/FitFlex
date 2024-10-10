const nutritionService = {
    getNutrition: async (foodItem, portionSize) => {
      // Mock API call; replace with actual API request
      // Example API: Nutritionix, Edamam, or USDA
      return {
        calories: 150, // Replace with actual fetched data
        protein: '5g',
        carbs: '20g',
        fat: '7g'
      };
    }
  };
  
  export default nutritionService;
  