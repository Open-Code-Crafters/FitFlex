import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../styles/blogs.css';
import { Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Blog = () => {
  const navigate = useNavigate();
  const blogItems = localStorage.getItem("blogs");
  const parsedBlogItems = blogItems ? JSON.parse(blogItems) : [];

  const blogs = [
    {
      title: "The Best Gym Workout Plan For Gaining Muscle",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: "Building muscle requires a person to commit to regular strength training..."
    },
    {
      title: "The Best Gym Workout Plans for Beginners",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: "If you're just getting started at the gym, it can feel challenging knowing..."
    },
    {
      title: "Calories and Weight Loss - What You Need To Know",
      date: "Wednesday, 25 October 2023",
      author: "Daniel Salmon",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: "If you're looking to lose weight, the huge number of diet plans..."
    },
  ];

  const blogPosts = [...blogs, ...parsedBlogItems];

  const [likes, setLikes] = useState(Array(blogPosts.length).fill(0));
  const [liked, setLiked] = useState(Array(blogPosts.length).fill(false));
  const [showCommentBox, setShowCommentBox] = useState(blogPosts.map(() => false));
  const [comments, setComments] = useState(blogPosts.map(() => []));
  const [commentInputs, setCommentInputs] = useState(blogPosts.map(() => ""));
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchInput, setSearchInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLike = (index) => {
    setLiked(prev => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
    setLikes(prev => {
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
    setShowCommentBox(prev => {
      const newShowCommentBox = [...prev];
      newShowCommentBox[index] = !newShowCommentBox[index];
      return newShowCommentBox;
    });
  };

  const handleCommentChange = (index, event) => {
    setCommentInputs(prev => {
      const newInputs = [...prev];
      newInputs[index] = event.target.value;
      return newInputs;
    });
  };

  const handleCommentSubmit = (index) => {
    if (commentInputs[index].trim()) {
      setComments(prev => {
        const newComments = [...prev];
        newComments[index] = [...newComments[index], commentInputs[index]];
        return newComments;
      });
      setCommentInputs(prev => {
        const newInputs = [...prev];
        newInputs[index] = "";
        return newInputs;
      });
    }
  };

  const handleUploadBlog = () => {
    if (!isLoggedIn) {
      toast.error("Unauthenticated");
      return;
    }
    navigate("/uploadBlog");
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchInput(searchTerm);
    const filtered = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm));
    setFilteredPosts(filtered);
  };

  return (
    <div className="blog-container">
      <Toaster />
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
      <div className="upload-button-container">
        <button onClick={handleUploadBlog} className="upload-button">
            <Plus className="plus-icon" />
            <span>Upload Blog</span>
        </button>
      </div>
      <div className="blog-grid mt-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img className="blog-image" src={post.image} alt={post.title} />
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-author">{post.date} by {post.author}</p>
                <p className="blog-excerpt">{post.content}</p>
                <div className="blog-metrics">
                  <span className="likes">❤️ Likes: {likes[index]}</span>
                  <button className="ml-2 like-button" onClick={() => handleLike(index)} aria-label={liked[index] ? "Unlike" : "Like"}>
                    {liked[index] ? "💖 Liked" : "👍 Like"}
                  </button>
                  <button className="ml-1 comment-button " onClick={() => toggleCommentBox(index)} aria-label="Comment on this post">
                    💬 Comment
                  </button>
                  <button className="read-more-button" onClick={() => navigate(`/blog/${index}`)}>
                    Read More
                  </button>
                </div>
                {isLoggedIn && showCommentBox[index] && (
                  <div className="comment-section">
                    <textarea
                      className="comment-box"
                      value={commentInputs[index]}
                      onChange={(e) => handleCommentChange(index, e)}
                      placeholder="Write your comment here..."
                    />
                    <button className="submit-button" onClick={() => handleCommentSubmit(index)}>Submit</button>
                  </div>
                )}
                {comments[index].length > 0 && (
                  <div className="comment-list">
                    <h3>Comments:</h3>
                    {comments[index].map((comment, commentIndex) => (
                      <div key={commentIndex} className="comment-item">{comment}</div>
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
