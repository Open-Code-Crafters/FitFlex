import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Best Gym Workout Plan For Gaining Muscle",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `
        Building muscle requires a person to commit to regular strength training for a long period of time, with no shortcuts unfortunately. However, you can make this process more efficient with the right nutrition and workouts. If you want to avoid wasting hours in the gym, keep reading.
        
        While most people want to build muscle for aesthetic reasons, there are so many health benefits too, including:
        - Increasing lean muscle mass, which means you’ll burn more calories at rest.
        - Addressing strength imbalances, which can improve postural issues.
        - Improving overall strength, coordination, and balance.
        - Enhancing bone density and slowing down bone loss.

        Gaining muscle, known as muscular hypertrophy, requires some serious strength training. Strength training causes microscopic tears in the muscle fibres, which sounds scary but is actually a prerequisite of growth. As the body repairs these tissues, they get bigger, and when this is repeated again and again this results in visibly bigger muscles.

        While all strength training will help to increase strength, there are certain ways to train that will maximise muscular hypertrophy. Read on to learn how to shape a strengthening workout plan that will help you to gain muscle, as well as some of the different approaches you could take.
      `,
    },
    {
      title: "The Best Gym Workout Plans for Beginners",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `
        If you're just getting started at the gym, it can feel challenging knowing what to do and how to shape your visits to the gym. What are your goals? Do you know what workout plan is best for you to hit those goals? What do all these machines do? We know it can seem overwhelming in the early stages.

        That's why creating a solid workout plan can be one of the best places to start when forming new exercise habits. We'll look at some of the best ways to get started at the gym if you're a pure beginner, as well as some workouts focused on training specific muscle groups.

        Having a workout plan is beneficial for a few reasons: 
        - It helps you know what you need to do each workout, making each gym session smoother.
        - You can simply turn up, follow your plan, and head home, rather than making it up as you go along.
        - You can research your exercises beforehand to feel confident in how to perform them.

        Having a workout plan is also one of the best ways to achieve your fitness goals. It allows for consistency and progressive overload, which are key to building muscle and improving your strength and endurance.

        A workout plan can also help beginners avoid overtraining and undertraining. It allows for progress to be tracked and ensures you make the most of your time at the gym.
      `,
    },
    {
      title: "Calories and Weight Loss - What You Need To Know",
      date: "Wednesday, 25 October 2023",
      author: "Salmon",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `
        If you're looking to lose weight, the huge number of diet plans and nutritional guidance available can seem overwhelming, with many competing ideas and eating styles on offer. However, a good starting point for any weight control plan is to gain an understanding of calories, and what they mean for your body.

        Here at PureGym we’re keen to support you in your health and fitness journey. If your goal is working towards losing weight, we believe it’s best to approach this in a gradual and sustainable way, combining healthy diet changes and exercise to keep your body in tip-top shape.

        While a calorie-tracking approach to nutrition can help build an understanding of which types of food may be best for achieving healthy weight loss goals, it may not suit everyone. If you’re overly concerned about your weight, speak to your doctor, a dietician, or a nutritionist who may be able to work up a meal plan that suits your body type.
      `,
    },
  ];

  const styles = {
    blogContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#f5f5f5", // Light background for the blog section
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    motivationalQuote: {
      fontSize: "1.5em",
      fontStyle: "italic",
      textAlign: "center",
      marginBottom: "20px",
      color: "#FF4500", // Bright orange color for better visibility
      fontWeight: "bold", // Making quote bold
    },
    blogTitle: {
      textAlign: "center",
      fontSize: "3em",
      marginBottom: "20px",
      background: "linear-gradient(90deg, #FF4500, #FFA500, #FFD700)", // Orange to golden gradient for blog title
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent", // Making text color transparent for gradient effect
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding shadow for better visibility
    },
    blogPost: {
      marginBottom: "40px",
      border: "1px solid #eaeaea",
      borderRadius: "8px",
      padding: "20px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      lineHeight: "1.6",
    },
    postTitle: {
      fontSize: "1.8em",
      marginBottom: "10px",
      color: "black", // Black color for post titles
      fontWeight: "bold",
      background: "linear-gradient(90deg, #FF4500, #FFA500, #FFD700)", // Orange to golden gradient for post titles
      padding: "10px", // Add padding for better spacing
      borderRadius: "5px", // Slightly rounded corners
      border: "2px solid black", // Black border around post titles
    },
    postDate: {
      fontSize: "0.9em",
      color: "#333", // Darker color for better visibility
      marginBottom: "10px",
      fontWeight: "bold", // Make date bold for better visibility
    },
    postImage: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    postContent: {
      fontSize: "1.1em",
      lineHeight: "1.6",
      marginBottom: "20px", // Add space between paragraphs
      color: "#000", // Set content font color to black
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
        </div>
      ))}
    </div>
  );
};

export default Blog;
