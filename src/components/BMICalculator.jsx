import React, { useState } from 'react';
import '../styles/BMICalculator.css'; // Import the CSS file for styling

const BMICalculator = () => {
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    if (!gender || !ageGroup || !height || !weight) {
      alert('Please fill in all fields.');
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = '';

    if (ageGroup === 'child') {
      if (bmi < 14) category = 'Underweight';
      else if (bmi < 18) category = 'Normal weight';
      else if (bmi < 22) category = 'Overweight';
      else category = 'Obesity';
    } else if (ageGroup === 'teen') {
      if (bmi < 16) category = 'Underweight';
      else if (bmi < 23) category = 'Normal weight';
      else if (bmi < 27) category = 'Overweight';
      else category = 'Obesity';
    } else if (ageGroup === 'adult') {
      if (gender === 'male') {
        if (bmi < 20.7) category = 'Underweight';
        else if (bmi < 26.4) category = 'Normal weight';
        else if (bmi < 27.8) category = 'Slightly overweight';
        else if (bmi < 31.1) category = 'Overweight';
        else category = 'Obesity';
      } else if (gender === 'female') {
        if (bmi < 19.1) category = 'Underweight';
        else if (bmi < 25.8) category = 'Normal weight';
        else if (bmi < 27.3) category = 'Slightly overweight';
        else if (bmi < 32.3) category = 'Overweight';
        else category = 'Obesity';
      }
    } else if (ageGroup === 'senior') {
      if (gender === 'male') {
        if (bmi < 22) category = 'Underweight';
        else if (bmi < 27) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obesity';
      } else if (gender === 'female') {
        if (bmi < 21) category = 'Underweight';
        else if (bmi < 27) category = 'Normal weight';
        else if (bmi < 32) category = 'Overweight';
        else category = 'Obesity';
      }
    }

    setResult(`Your BMI is ${bmi.toFixed(1)} (${category})`);
  };

  const resetFields = () => {
    setGender('');
    setAgeGroup('');
    setHeight('');
    setWeight('');
    setResult('');
  };

  return (
    <section className="bmi-body">
      <div className="container">
        <div className="wrapper">
          <h1 className="tag">BMI Calculator</h1>
          <form id="bmiForm">
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="age">Age Group:</label>
              <select id="age" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} required>
                <option value="" disabled>Enter your Age</option>
                <option value="child">0-12</option>
                <option value="teen">13-19</option>
                <option value="adult">20-64</option>
                <option value="senior">65+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                id="height"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="weight">Weight (kg):</label>
              <input
                type="number"
                id="weight"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <button type="button" className="bmibut" onClick={calculateBMI}>
              Calculate
            </button>

            <button type="button" className="bmibut" onClick={resetFields}>
              Refresh
            </button>
            
            <p>This BMI calculator is for informational purposes only. Consult a healthcare provider before making health decisions.</p>
          </form>

          <div id="result">{result}</div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
