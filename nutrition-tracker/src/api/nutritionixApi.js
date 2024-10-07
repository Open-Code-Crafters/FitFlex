// src/api/nutritionixApi.js
import axios from 'axios';

const APP_ID = '466e8d9a';
const API_KEY = 'b1975484d742bede95d2098e323b2bba';

const API_URL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

export const fetchNutritionData = async (foodItem) => {
try {
// Make POST request to Nutritionix API
const response = await axios.post(
API_URL,
{ query: foodItem }, // Send the food item as 'query'
{
headers: {
'x-app-id': APP_ID, // Nutritionix App ID from env
'x-app-key': API_KEY, // Nutritionix API Key from env
'Content-Type': 'application/json', // Specify JSON format
},
}
);

return response.data.foods;
} catch (error) {
console.error('Error fetching data:', error);
return null;
}
};