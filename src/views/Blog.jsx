import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import '../styles/blogs.css';
import { Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Blog = ({ mode, textcolor }) => {

  const blogItems = localStorage.getItem("blogs")

  const parsedBlogItems = blogItems ? JSON.parse(blogItems) : [];
  const blogs = [
    {
      title: "The Best Gym Workout Plan For Gaining Muscle",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      image:
        "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",

      content: `Building muscle requires a person to commit to regular strength training...`,
    },
    {
      title: "The Best Gym Workout Plans for Beginners",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      image:
        "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",

      content: `If you're just getting started at the gym, it can feel challenging knowing...`,
    },
    {
      title: "Calories and Weight Loss - What You Need To Know",
      date: "Wednesday, 25 October 2023",
      author: "Salmon",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `If you're looking to lose weight, the huge number of diet plans...`,
    },
  ];

  const blogPosts = [...blogs, ...parsedBlogItems];
  const [likes, setLikes] = useState(blogPosts.map(() => 0));
  const [liked, setLiked] = useState(blogPosts.map(() => false));
  const [showCommentBox, setShowCommentBox] = useState(blogPosts.map(() => false));
  const [comments, setComments] = useState(blogPosts.map(() => []));
  const [commentInputs, setCommentInputs] = useState(blogPosts.map(() => ""));

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);

    });
    return () => unsubscribe();
  }, []);

  const filteredBlogs = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLike = (index) => {
    const newLikes = [...likes];
    const newLiked = [...liked];
    newLiked[index] ? (newLikes[index] -= 1) : (newLikes[index] += 1);
    newLiked[index] = !newLiked[index];
    setLikes(newLikes);
    setLiked(newLiked);

  };

  const toggleCommentBox = (index) => {
    if (!isLoggedIn) {
      navigate("/register");
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
    if (commentInputs[index].trim()) {
      const newComments = [...comments];
      newComments[index] = [...newComments[index], commentInputs[index]];
      setComments(newComments);
      const newCommentInputs = [...commentInputs];
      newCommentInputs[index] = "";
      setCommentInputs(newCommentInputs);
    }
  };

  const handleUploadBlog = () => {
    if (!isLoggedIn) {
      toast.error("unauthenticated");
      return;
    }
    navigate("/uploadBlog");
  };


  const styles = {
    blogContainer: {
      maxWidth: "800px",
      margin: "100px auto 0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: mode === "light" ? "#f7f7f7" : "#322220",
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
      marginTop: "120px",
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
      backgroundColor: mode === "light" ? "#f7f7f7" : "#1e2a2b",
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
    commentList: {
      marginTop: "15px",
      borderTop: "1px solid #ddd",
      paddingTop: "10px",
    },
    commentItem: {
      backgroundColor: mode === "light" ? "#ffffff" : "#2c3e50",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
      color: textcolor,
    },
  };
  return (

    <div className="blog-container">
      <Toaster />



      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >

        {/* {isLoggedIn && ( */}
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff4500",
            color: "#fff",
            marginTop: "90px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1.2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleUploadBlog}
        >
          <Plus style={{ marginRight: "5px" }} /> Upload Blog
        </button>
        {/* )} */}
      </div>
      <div className="flex justify-center mb-6 mt-28">
        <input
          type="text"
          className="w-full max-w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          data-aos='fade-up'
        />
      </div>

      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((post, index) => (
          <div key={index} style={styles.blogPost} data-aos="zoom-in" data-aos-duration="1200">
            <h2 style={styles.postTitle}>{post.title}</h2>
            <p style={styles.postDate}>{post.date} by {post.author}</p>
            <img src={post.image} alt={post.title} style={styles.postImage} />
            <div style={styles.postContent}>{post.content}</div>
            <div style={styles.buttonContainer}>
              <button style={styles.likeButton} onClick={() => handleLike(index)}>
                👍 Like ({likes[index]})
              </button>
              <button style={styles.commentButton} onClick={() => toggleCommentBox(index)}>
                💬 Comment
              </button>
            </div>
            {isLoggedIn && showCommentBox[index] && (
              <div>
                <textarea
                  style={styles.commentBox}
                  value={commentInputs[index]}
                  onChange={(e) => handleCommentChange(index, e)}
                  placeholder="Write your comment here..."
                />
                <button style={styles.submitButton} onClick={() => handleCommentSubmit(index)}>
                  Submit Comment
                </button>
              </div>
            )}
            {comments[index].length > 0 && (
              <div style={styles.commentList}>
                <h3>Comments:</h3>
                {comments[index].map((comment, commentIndex) => (
                  <div key={commentIndex} style={styles.commentItem}>
                    {comment}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No blogs found matching your search.</p>
      )}

    </div>
  );
};

export default Blog;