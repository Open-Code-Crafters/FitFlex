import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import '../styles/blogs.css';
import { Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

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
      newLikes[index] += liked[index];
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
      margin: "100px auto 0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginTop: '9rem',
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
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      lineHeight: "1.6",
    },
    postTitle: {
      fontSize: "1.8em",
      marginBottom: "10px",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #FF4500, #FFA500, #FFD700)",
      padding: "10px",
      borderRadius: "5px",
      border: "2px solid black",
    },
    postDate: {
      fontSize: "0.9em",
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
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
    },
  };
  return (
    <div className={`blog-container ${mode === "dark" ? "dark" : ""}`}>
      <Toaster />
      <header className="blog-header py-4 px-6 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Blogs</h1>
        <input
          type="text"
          placeholder="Search for blogs..."
          value={searchInput}
          onChange={handleSearchChange}
          className="mt-2 p-3 w-full max-w-md rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
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
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-semibold text-lg shadow-md hover:shadow-lg transition-all"
        >
          <Plus style={{ marginRight: "5px" }} /> Upload Blog
        </button>
      </div>

      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (

            <div
              className="blog-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              key={post.id || index} // Added unique key
            >
              <img
                className="blog-image w-full h-56 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="blog-content p-4">
                <h2 className="blog-title text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="blog-author text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {post.date} by {post.author}
                </p>
                <p className="blog-excerpt text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <button className="read-more-button text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200">
                  Read More
                </button>
                <div className="blog-metrics flex items-center justify-between mt-4">
                  <span className="likes text-sm text-gray-500 dark:text-gray-300">
                    ❤️ Likes: {likes[index]}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      className="like-button text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                      onClick={() => handleLike(index)}
                    >
                      👍 Like
                    </button>
                    <button
                      className="comment-button text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                      onClick={() => toggleCommentBox(index)}
                    >
                      💬 Comment
                    </button>
                  </div>
                </div>

                {isLoggedIn && showCommentBox[index] && (
                  <div className="comment-section mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <textarea
                      className="comment-input w-full p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500"
                      value={commentInputs[index]}
                      onChange={(e) => handleCommentChange(index, e)}
                      placeholder="Write your comment here..."
                    />
                    <button
                      className="submit-comment bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md mt-2"
                      onClick={() => handleCommentSubmit(index)}
                    >
                      Submit
                    </button>
                  </div>
                )}

                {comments[index].length > 0 && (
                  <div className="comments-list mt-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      Comments:
                    </h3>
                    <div className="comment-items space-y-2">
                      {comments[index].map((comment, commentIndex) => (
                        <div
                          key={commentIndex} // Added key for each comment
                          className="comment-item p-2 bg-gray-50 dark:bg-gray-600 rounded-md"
                        >
                          {comment}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-results-message text-center text-gray-500 dark:text-gray-400 col-span-full">
            No blogs found. Try a different search term.
          </p>
        )}
      </div>
    </div>

  );
};

export default Blog;
