import React, { useState } from "react";

const FitnessCalc = ({ mode, textcolor }) => {
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [calories, setCalories] = useState(null);
  const [bodyFat, setBodyFat] = useState(null);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);
  };

  const calculateBMR = () => {
    const calculatedBMR = gender === "male"
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    setBmr(calculatedBMR.toFixed(2));
  };

  const calculateCalories = () => {
    const activityMultiplier = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9
    };
    const calculatedCalories = (bmr * activityMultiplier[activityLevel]).toFixed(2);
    setCalories(calculatedCalories);
  };

  const calculateBodyFat = () => {
    const bodyFatPercentage = gender === "male"
      ? (1.20 * bmi + 0.23 * age - 16.2)
      : (1.20 * bmi + 0.23 * age - 5.4);
    setBodyFat(bodyFatPercentage.toFixed(2));
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "20px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: textcolor,
      backgroundColor: "#E6F7FF", // Soft light blue background
      borderRadius: "8px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      marginBottom: "20px",
      transition: "transform 0.3s ease",
    },
    title: {
      textAlign: "center",
      fontSize: "2em",
      marginBottom: "20px",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "1em",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "20px",
    },
    result: {
      fontSize: "1.2em",
      fontWeight: "bold",
      color: "#007BFF",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "1.5em",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fitness Calculators</h1>

      {/* BMI Calculator */}
      <div style={styles.card}>
        <h2 style={styles.heading}>BMI Calculator</h2>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={calculateBMI}>
          Calculate BMI
        </button>
        {bmi && <p style={styles.result}>Your BMI is {bmi}</p>}
      </div>

      {/* BMR Calculator */}
      <div style={styles.card}>
        <h2 style={styles.heading}>BMR Calculator</h2>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={styles.input}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button style={styles.button} onClick={calculateBMR}>
          Calculate BMR
        </button>
        {bmr && <p style={styles.result}>Your BMR is {bmr} kcal/day</p>}
      </div>

      {/* Caloric Needs Calculator */}
      <div style={styles.card}>
        <h2 style={styles.heading}>Caloric Needs Calculator</h2>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          style={styles.input}
        >
          <option value="sedentary">Sedentary (little to no exercise)</option>
          <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days a week)</option>
          <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days a week)</option>
          <option value="veryActive">Very Active (hard exercise/sports 6-7 days a week)</option>
          <option value="extraActive">Extra Active (very hard exercise/sports & a physical job)</option>
        </select>
        <button style={styles.button} onClick={calculateCalories}>
          Calculate Daily Calories
        </button>
        {calories && <p style={styles.result}>You need {calories} calories/day</p>}
      </div>

      {/* Body Fat Percentage Calculator */}
      <div style={styles.card}>
        <h2 style={styles.heading}>Body Fat Percentage Calculator</h2>
        <button style={styles.button} onClick={calculateBodyFat}>
          Calculate Body Fat %
        </button>
        {bodyFat && <p style={styles.result}>Your Body Fat Percentage is {bodyFat}%</p>}
      </div>
    </div>
  );
};

export default FitnessCalc;
