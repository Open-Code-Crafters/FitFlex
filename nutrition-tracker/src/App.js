// src/App.js

import React, { useState } from 'react';
import MealLogForm from './components/MealLogForm';
import MealHistory from './components/MealHistory';
import './App.css';

const App = () => {
    const [meals, setMeals] = useState([]);

    const addMeal = (newMeal) => {
        setMeals([...meals, newMeal]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Nutrition Tracker</h1>
                <MealLogForm addMeal={addMeal} />
                <MealHistory meals={meals} />
            </header>
        </div>
    );
};

export default App;
