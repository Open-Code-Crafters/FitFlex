import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../styles/blog.css';

const Blog = ({ mode, textcolor }) => {
  const blogPosts = [
    {
      title: "The Best Gym Workout Plan For Gaining Muscle",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Building muscle requires a person to commit to regular strength training...`,
    },
    {
      title: "The Best Gym Workout Plans for Beginners",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `If you're just getting started at the gym, it can feel challenging knowing...`,
    },
    {
      title: "Calories and Weight Loss - What You Need To Know",
      date: "Wednesday, 25 October 2023",
      author: "Salmon",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `If you're looking to lose weight, the huge number of diet plans...`,
    },
    {
      title: "Strength Training for Seniors: The Complete Guide",
      date: "Monday, 20 November 2023",
      author: "Jane Martin",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Strength training is important at any age, but for seniors, it helps improve mobility, balance...`,
    },
    {
      title: "How to Create a Balanced Meal Plan for Weight Loss",
      date: "Friday, 10 November 2023",
      author: "Emily Harper",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `A balanced meal plan is key to successful weight loss. In this post, we discuss how to structure meals...`,
    },
    {
      title: "The Importance of Hydration During Workouts",
      date: "Saturday, 4 November 2023",
      author: "Liam Fox",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `Staying hydrated is essential for performance during workouts. Learn how much water your body needs during...`,
    },
    {
      title: "Yoga for Flexibility: A Beginner's Guide",
      date: "Tuesday, 31 October 2023",
      author: "Rachel Green",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `Yoga is a powerful tool for improving flexibility. This guide outlines the best poses for beginners...`,
    },
    {
      title: "5 Best Cardio Workouts to Burn Fat Fast",
      date: "Sunday, 22 October 2023",
      author: "Mike Robinson",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Cardio is key when it comes to fat loss. In this post, we explore the top five cardio workouts...`,
    },
    {
      title: "The Science Behind Rest Days and Recovery",
      date: "Wednesday, 18 October 2023",
      author: "Sarah Johnson",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `Rest days are just as important as your workout routine. Discover why rest is vital for muscle recovery...`,
    },
    {
      title: "How to Stay Motivated at the Gym: Tips and Tricks",
      date: "Monday, 9 October 2023",
      author: "Alex Turner",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Struggling to stay motivated? Here are some practical tips to keep you consistent with your gym routine...`,
    },
  ];

  const [likes, setLikes] = useState(blogPosts.map(() => 0));
  const [liked, setLiked] = useState(blogPosts.map(() => false));
  const [showCommentBox, setShowCommentBox] = useState(blogPosts.map(() => false));
  const [comments, setComments] = useState(blogPosts.map(() => []));
  const [commentInputs, setCommentInputs] = useState(blogPosts.map(() => ""));

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLike = (index) => {
    const newLikes = [...likes];
    const newLiked = [...liked];
    newLikes[index] = newLiked[index] ? newLikes[index] - 1 : newLikes[index] + 1;
    newLiked[index] = !newLiked[index];
    setLikes(newLikes);
    setLiked(newLiked);
  };

  const toggleCommentBox = (index) => {
    if (!isLoggedIn) {
      navigate('/register');
      return;
    }
    const newShowCommentBox = [...showCommentBox];
    newShowCommentBox[index] = !newShowCommentBox[index];
    setShowCommentBox(newShowCommentBox);
  };

  const handleCommentChange = (index, event) => {
    const newCommentInputs = [...commentInputs];
    newCommentInputs[index] = event.target.value;
    setCommentInputs(newCommentInputs);
  };

  const handleCommentSubmit = (index) => {
    if (commentInputs[index].trim() !== "") {
      const newComments = [...comments];
      newComments[index] = [...newComments[index], commentInputs[index]];
      setComments(newComments);
      setCommentInputs(blogPosts.map(() => ""));
    }
  };

  return (
    <div className="blog-container">
      {blogPosts.map((post, index) => (
        <div className="blog-card" key={index}>
          <img className="blog-image" src={post.image} alt={post.title} />
          <div className="blog-content">
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-author">{post.date} by {post.author}</p>
            <p className="blog-excerpt">{post.content}</p>
            <button className="read-more-button">Read More</button>
            <div className="blog-metrics">
              <span className="views">👁️ Views: {Math.floor(Math.random() * 300)}</span>
              <span className="likes">❤️ Likes: {likes[index]}</span>
              <button className="like-button" onClick={() => handleLike(index)}>👍 Like</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
