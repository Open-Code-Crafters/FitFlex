import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../styles/blogs.css';
import { Plus } from "lucide-react";

const Blog = ({ mode, textcolor }) => {

  const blogItems = localStorage.getItem("blogs")

  const parsedBlogItems = blogItems ? JSON.parse(blogItems) : [];
  // console.log(parsedBlogItems[0].title)

  const blogs = [
    {
      title: "The Best Gym Workout Plan For Gaining Muscle",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Building muscle requires a person to commit to regular strength training...`,
      content: `Building muscle requires a person to commit to regular strength training...`,
    },
    {
      title: "The Best Gym Workout Plans for Beginners",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `If you're just getting started at the gym, it can feel challenging knowing...`,
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

  console.log(blogPosts)

  const [likes, setLikes] = useState(Array(blogPosts.length).fill(0));
  const [liked, setLiked] = useState(Array(blogPosts.length).fill(false));
  const [showCommentBox, setShowCommentBox] = useState(blogPosts.map(() => false));
  const [comments, setComments] = useState(blogPosts.map(() => []));
  const [commentInputs, setCommentInputs] = useState(blogPosts.map(() => ""));
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchInput, setSearchInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLike = (index) => {
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
    setLikes((prev) => {
      const newLikes = [...prev];
      newLikes[index] += liked[index] ? -1 : 1;
      return newLikes;
    });
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
    if (commentInputs[index].trim() !== "") {
      const newComments = [...comments];
      newComments[index] = [...newComments[index], commentInputs[index]];
      setComments(newComments);
      const newCommentInputs = [...commentInputs];
      newCommentInputs[index] = "";
      setCommentInputs(newCommentInputs);
    }
  };
  const handleUploadBlog = (index) => {
    if (!isLoggedIn) {
      toast.error("unauthenticated");
      return;
    } else {
      navigate("/uploadBlog");
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchInput(searchTerm);
    const filtered = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm));
    setFilteredPosts(filtered);
  };
  const styles = {
    blogContainer: {
      maxWidth: "800px",
      margin: "0 auto",
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
      <header className="blog-header">
        <h1>Blogs</h1>
        <input
          type="text"
          placeholder="Search for blogs..."
          value={searchInput}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </header>
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

      <div className="blog-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img className="blog-image" src={post.image} alt={post.title} />
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-author">{post.date} by {post.author}</p>
                <p className="blog-excerpt">{post.content}</p>
                <button className="read-more-button">Read More</button>
                <div className="blog-metrics">
                  <span className="likes">❤️ Likes: {likes[index]}</span>
                  <button className="like-button" onClick={() => handleLike(index)}>👍 Like</button>
                  <button className="comment-button" onClick={() => toggleCommentBox(index)}>💬 Comment</button>
                </div>
                {isLoggedIn && showCommentBox[index] && (
                  <div className="comment-section">
                    <textarea
                      className="comment-input"
                      value={commentInputs[index]}
                      onChange={(e) => handleCommentChange(index, e)}
                      placeholder="Write your comment here..."
                    />
                    <button className="submit-comment" onClick={() => handleCommentSubmit(index)}>Submit</button>
                  </div>
                )}
                {comments[index].length > 0 && (
                  <div className="comments-list">
                    <h3>Comments:</h3>
                    {comments[index].map((comment, commentIndex) => (
                      <div key={commentIndex} className="comment-item">
                        {comment}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-results-message">No blogs found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;