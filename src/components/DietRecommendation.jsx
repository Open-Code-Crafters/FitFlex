import React, { useState } from 'react';
import '../styles/DietRecommendation.css'; // Ensure to create a CSS file for styling

const DietRecommendation = () => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        weight: '',
        height: '',
        veg_or_nonveg: '',
        disease: '',
        region: '',
        allergics: '',
        foodtype: '',
    });

    const [recommendations, setRecommendations] = useState({
        restaurants: [],
        breakfast: [],
        dinner: [],
        workouts: [],
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error

        try {
            const response = await fetch('http://localhost:5000/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            parseRecommendations(data); // Parse and set recommendations
        } catch (error) {
            setError('Failed to fetch recommendations. Please try again later.');
        }
    };

    // Function to parse the response text into separate categories
    const parseRecommendations = (data) => {
        const recommendationsRegex = /Restaurant Recommendations:\s*(.*?)\*\*Breakfast Recommendations:\s*(.*?)\*\*Dinner Recommendations:\s*(.*?)\*\*Workout Recommendations:\s*(.*)$/s;
        const matches = data.match(recommendationsRegex);
        
        if (matches) {
            const restaurantNames = matches[1].split('*').map(item => item.trim()).filter(item => item);
            const breakfastNames = matches[2].split('*').map(item => item.trim()).filter(item => item);
            const dinnerNames = matches[3].split('*').map(item => item.trim()).filter(item => item);
            const workoutNames = matches[4].split('*').map(item => item.trim()).filter(item => item);

            setRecommendations({
                restaurants: restaurantNames,
                breakfast: breakfastNames,
                dinner: dinnerNames,
                workouts: workoutNames,
            });
        } else {
            setError('Failed to parse recommendations. Please try again later.');
        }
    };

    return (
        <div className="diet-recommendation-container">
            <h1 className="heading">Personalized Workout and Diet Recommendation System</h1>
            <div className="glassmorphic-box">
                <form className="recommendation-form" onSubmit={handleSubmit}>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <label>Gender</label>
                    <input
                        type="text"
                        name="gender"
                        placeholder="Enter your gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                    <label>Weight (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        placeholder="Enter your weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                    <label>Height (cm)</label>
                    <input
                        type="number"
                        name="height"
                        placeholder="Enter your height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                    <label>Diet Type</label>
                    <select
                        name="veg_or_nonveg"
                        value={formData.veg_or_nonveg}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Type</option>
                        <option value="veg">Vegetarian</option>
                        <option value="nonveg">Non-Vegetarian</option>
                    </select>
                    <label>Any Existing Disease</label>
                    <input
                        type="text"
                        name="disease"
                        placeholder="Enter any existing disease"
                        value={formData.disease}
                        onChange={handleChange}
                    />
                    <label>Region</label>
                    <input
                        type="text"
                        name="region"
                        placeholder="Enter your region"
                        value={formData.region}
                        onChange={handleChange}
                    />
                    <label>Allergies</label>
                    <input
                        type="text"
                        name="allergics"
                        placeholder="Enter any allergies"
                        value={formData.allergics}
                        onChange={handleChange}
                    />
                    <label>Preferred Food Type</label>
                    <input
                        type="text"
                        name="foodtype"
                        placeholder="Enter your preferred food type"
                        value={formData.foodtype}
                        onChange={handleChange}
                    />
                    <button type="submit">Get Recommendations</button>
                </form>
            </div>

            {error && <div className="error-message">{error}</div>}

            {recommendations.restaurants.length > 0 && (
                <div className="recommendations-box">
                    <h2>Recommendations:</h2>
                    <div className="recommendation-category">
                        <h3>Restaurant Recommendations:</h3>
                        <ul>
                            {recommendations.restaurants.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recommendation-category">
                        <h3>Breakfast Recommendations:</h3>
                        <ul>
                            {recommendations.breakfast.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recommendation-category">
                        <h3>Dinner Recommendations:</h3>
                        <ul>
                            {recommendations.dinner.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recommendation-category">
                        <h3>Workout Recommendations:</h3>
                        <ul>
                            {recommendations.workouts.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DietRecommendation;
