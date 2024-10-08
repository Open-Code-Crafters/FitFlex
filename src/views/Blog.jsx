import React, { useState, useEffect } from "react";

const Blog = ({mode,textcolor}) => {
  const blogPosts = [
    {
      title: "The Best Gym Workout Plan For Gaining Muscle",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Building muscle requires a person to commit to regular strength training...`, // shortened for brevity
    },
    {
      title: "The Best Gym Workout Plans for Beginners",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `If you're just getting started at the gym, it can feel challenging knowing...`, // shortened for brevity
    },
    {
      title: "Calories and Weight Loss - What You Need To Know",
      date: "Wednesday, 25 October 2023",
      author: "Salmon",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `If you're looking to lose weight, the huge number of diet plans...`, // shortened for brevity
    },
  ];

  const [likes, setLikes] = useState(blogPosts.map(() => 0));
  const [showCommentBox, setShowCommentBox] = useState(blogPosts.map(() => false));
  const [comments, setComments] = useState(blogPosts.map(() => ""));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const toggleCommentBox = (index) => {
    const newShowCommentBox = [...showCommentBox];
    newShowCommentBox[index] = !newShowCommentBox[index];
    setShowCommentBox(newShowCommentBox);
  };

  const handleCommentChange = (index, event) => {
    const newComments = [...comments];
    newComments[index] = event.target.value;
    setComments(newComments);
  };

  const handleCommentSubmit = (index) => {
    alert(`Comment for post "${blogPosts[index].title}": ${comments[index]}`);
    const newComments = [...comments];
    newComments[index] = ""; // Clear the comment after submission
    setComments(newComments);
  };

  // Adding useEffect for debugging
  useEffect(() => {
    console.log("Blog component rendered");
  }, []);

  const styles = {
    blogContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: mode === 'light' ? '#f7f7f7' : '#322220',
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    motivationalQuote: {
      fontSize: "1.5em",
      fontStyle: "italic",
      textAlign: "center",
      marginBottom: "20px",
      color: "#FF4500",
      fontWeight: "bold",
    },
    blogTitle: {
      textAlign: "center",
      fontSize: "3em",
      marginBottom: "20px",
      background: "linear-gradient(90deg, #FF4500, #FFA500, #FFD700)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    blogPost: {
      marginBottom: "40px",
      border: "1px solid #eaeaea",
      borderRadius: "8px",
      padding: "20px",
      backgroundColor: mode === 'light' ? '#f7f7f7' :'#1e2a2b',
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      lineHeight: "1.6",
    },
    postTitle: {
      fontSize: "1.8em",
      marginBottom: "10px",
      color: textcolor,
      fontWeight: "bold",
      background: "linear-gradient(90deg, #FF4500, #FFA500, #FFD700)",
      padding: "10px",
      borderRadius: "5px",
      border: "2px solid black",
    },
    postDate: {
      fontSize: "0.9em",
      color: textcolor,
      marginBottom: "10px",
      fontWeight: "bold",
    },
    postImage: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    postContent: {
      fontSize: "1.1em",
      lineHeight: "1.6",
      marginBottom: "20px",
      color: textcolor,
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    likeButton: {
      backgroundColor: "#FF4500",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    commentButton: {
      backgroundColor: "#FFA500",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    commentBox: {
      marginTop: "10px",
      marginBottom: "10px",
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "1em",
    },
    submitButton: {
      backgroundColor: "#008CBA",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.blogContainer}>
      <h1 style={styles.blogTitle}>Fitness Blog</h1>
      <p style={styles.motivationalQuote}>
        "The only bad workout is the one that didn't happen."
      </p>
      {blogPosts.map((post, index) => (
        <div style={styles.blogPost} key={index}>
          <h2 style={styles.postTitle}>{post.title}</h2>
          <p style={styles.postDate}>
            {post.date} by {post.author}
          </p>
          <img src={post.image} alt={post.title} style={styles.postImage} />
          <div style={styles.postContent}>{post.content}</div>

          <div style={styles.buttonContainer}>
            <button
              style={styles.likeButton}
              onClick={() => handleLike(index)}
            >
              👍 Like ({likes[index]})
            </button>
            <button
              style={styles.commentButton}
              onClick={() => toggleCommentBox(index)}
            >
              💬 Comment
            </button>
          </div>

          {showCommentBox[index] && (
            <div>
              <textarea
                style={styles.commentBox}
                value={comments[index]}
                onChange={(e) => handleCommentChange(index, e)}
                placeholder="Write your comment here..."
              />
              <button
                style={styles.submitButton}
                onClick={() => handleCommentSubmit(index)}
              >
                Submit Comment
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;
