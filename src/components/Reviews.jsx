import { useEffect, useState } from 'react';
import './Reviews.css';
import customer1 from "../assets/img/customer-1.jpg";
import customer2 from "../assets/img/customer-2.jpg";
import customer3 from "../assets/img/customer-3.jpg";

const Reviews = () => {
  const [active, setActive] = useState(0);
  const [reviews] = useState([
    {
      image: customer1,
      name: "Alice Johnson",
      review: "FitFlex has transformed my fitness journey! The trainers are incredibly supportive.",
      rating: "★★★★★",
    },
    {
      image: customer2,
      name: "Bob Smith",
      review: "I love the community feel at FitFlex. Everyone motivates each other!",
      rating: "★★★★",
    },
    {
      image: customer3,
      name: "Charlie Brown",
      review: "The workouts are challenging yet fun! I look forward to every session.",
      rating: "★★★★★",
    },
    // Add more reviews as needed
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="sliderReviews">
      <h1 style={{ fontSize: 'larger', fontWeight: 'bolder'}}>Customer Reviews</h1>
      <div className="reviewContainer">
        {reviews.map((review, index) => (
          <div
            className={`reviewItem ${index === active ? 'active' : ''}`}
            key={index}
            style={{
              opacity: index === active ? 1 : 0,
            }}>
            <img src={review.image} alt={`${review.name}'s Avatar`} className="avatar" />
            <h2 className="reviewerName">{review.name}</h2>
            <div className="stars">{review.rating}</div>
            <p className="reviewText">{review.review}</p>
          </div>
        ))}
        <button className="navButton left" onClick={() => setActive(prev => (prev - 1 + reviews.length) % reviews.length)}>{"<<"}</button>
        <button className="navButton right" onClick={() => setActive(prev => (prev + 1) % reviews.length)}>{">>"}</button>
      </div>
    </div>
  );
};

export default Reviews;