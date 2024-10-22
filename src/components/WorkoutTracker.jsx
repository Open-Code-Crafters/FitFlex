import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import '../styles/WorkoutTracker.css'; 

function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ date: '', type: '', duration: '' });
  const [streak, setStreak] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workout.date && workout.type && workout.duration) {
      setWorkouts([...workouts, workout]);
      setWorkout({ date: '', type: '', duration: '' });
    }
  };

  const markTodayAsDone = () => {
    const today = new Date().toISOString().split('T')[0];
    if (!workouts.find(w => w.date === today)) {
      setWorkouts([...workouts, { date: today, type: 'General', duration: 30 }]);
    }
  };

  const handleCalendarClick = (date) => {
    const dateString = date.toISOString().split('T')[0];
    if (!workouts.find(w => w.date === dateString)) {
      setWorkouts([...workouts, { date: dateString, type: 'General', duration: 30 }]);
    }
  };

  // Function to get workout dates
  const getWorkoutDates = () => {
    return workouts.map(w => new Date(w.date));
  };

  const calculateStreak = () => {
    const sortedDates = getWorkoutDates().sort((a, b) => b - a);
    let streakCount = 0;
    let currentDate = new Date();

    for (let date of sortedDates) {
      if (date.toDateString() === currentDate.toDateString()) {
        streakCount++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    setStreak(streakCount);
  };

  useEffect(() => {
    calculateStreak();
  }, [workouts]);

  return (
    <div className="workout-tracker">
      <h2>Workout Tracker</h2>
      <div className="tracker-content">
        <form onSubmit={handleSubmit} className="workout-form">
          <input
            type="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Workout Type"
            value={workout.type}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="duration"
            placeholder="Duration (minutes)"
            value={workout.duration}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Workout</button>
        </form>
        <button onClick={markTodayAsDone} className="mark-today-button">Mark Today as Done</button>
        <div className="workout-list">
          <h3>Logged Workouts</h3>
          <ul>
            {workouts.map((w, index) => (
              <li key={index}>
                <strong>Date:</strong> {w.date}, <strong>Type:</strong> {w.type}, <strong>Duration:</strong> {w.duration} mins
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="calendar">
        <h3>Workout Streak: {streak} days</h3>
        <Calendar
          onClickDay={handleCalendarClick}
          tileClassName={({ date, view }) => {
            if (view === 'month' && getWorkoutDates().find(d => d.toDateString() === date.toDateString())) {
              return 'highlight';
            }
          }}
        />
      </div>
    </div>
  );
}

export default WorkoutTracker;
