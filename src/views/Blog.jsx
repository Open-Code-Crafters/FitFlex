import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Plus, Heart, MessageSquare, Share2, Dumbbell, Timer, TrendingUp, User } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Blog = ({ mode, textcolor }) => {
  const blogItems = localStorage.getItem("blogs");
  const parsedBlogItems = blogItems ? JSON.parse(blogItems) : [];

  const blogs = [
    {
      title: "Ultimate Guide to Building Muscle Mass",
      date: "Wednesday, 15 November 2023",
      author: "Spencer Cartwright",
      authorRole: "Senior Fitness Trainer",
      readTime: "8 min read",
      tags: ["Strength Training", "Muscle Growth", "Nutrition"],
      difficulty: "Intermediate",
      image: "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      content: `Building muscle requires a precise combination of proper nutrition, consistent training, and adequate rest. Our comprehensive guide breaks down the science behind muscle growth and provides you with actionable steps to achieve your goals.`,
      popularity: 856,
      category: "Training"
    },
    {
      title: "Zero to Hero: Complete Beginner's Workout Guide",
      date: "Wednesday, 8 November 2023",
      author: "Doni Thomson",
      authorRole: "Certified Personal Trainer",
      readTime: "12 min read",
      tags: ["Beginners", "Workout Plan", "Form Guide"],
      difficulty: "Beginner",
      image: "https://www.puregym.com/media/kyjdlozn/beginner-gym-workout-plan_header.jpg?quality=80",
      content: `Starting your fitness journey can be intimidating, but it doesn't have to be. This comprehensive guide walks you through everything you need to know, from gym etiquette to proper form for basic exercises.`,
      popularity: 1023,
      category: "Basics"
    },
    {
      title: "The Science of Fat Loss: Beyond Calories",
      date: "Wednesday, 25 October 2023",
      author: "Dr. Sarah Chen",
      authorRole: "Sports Nutritionist",
      readTime: "10 min read",
      tags: ["Weight Loss", "Nutrition", "Metabolism"],
      difficulty: "All Levels",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `Discover the intricate relationship between nutrition, exercise, and fat loss. Learn how hormones, sleep, and stress affect your weight loss journey and how to optimize each factor for maximum results.`,
      popularity: 945,
      category: "Nutrition"
    },
    {
      title: "The Science of Fat Loss: Beyond Calories",
      date: "Wednesday, 25 October 2023",
      author: "Dr. Sarah Chen",
      authorRole: "Sports Nutritionist",
      readTime: "10 min read",
      tags: ["Weight Loss", "Nutrition", "Metabolism"],
      difficulty: "All Levels",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `Discover the intricate relationship between nutrition, exercise, and fat loss. Learn how hormones, sleep, and stress affect your weight loss journey and how to optimize each factor for maximum results.`,
      popularity: 945,
      category: "Nutrition"
    },
    {
      title: "The Science of Fat Loss: Beyond Calories",
      date: "Wednesday, 25 October 2023",
      author: "Dr. Sarah Chen",
      authorRole: "Sports Nutritionist",
      readTime: "10 min read",
      tags: ["Weight Loss", "Nutrition", "Metabolism"],
      difficulty: "All Levels",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `Discover the intricate relationship between nutrition, exercise, and fat loss. Learn how hormones, sleep, and stress affect your weight loss journey and how to optimize each factor for maximum results.`,
      popularity: 945,
      category: "Nutrition"
    },
    {
      title: "The Science of Fat Loss: Beyond Calories",
      date: "Wednesday, 25 October 2023",
      author: "Dr. Sarah Chen",
      authorRole: "Sports Nutritionist",
      readTime: "10 min read",
      tags: ["Weight Loss", "Nutrition", "Metabolism"],
      difficulty: "All Levels",
      image: "https://www.puregym.com/media/12ullfwo/salmon.jpg?quality=80",
      content: `Discover the intricate relationship between nutrition, exercise, and fat loss. Learn how hormones, sleep, and stress affect your weight loss journey and how to optimize each factor for maximum results.`,
      popularity: 945,
      category: "Nutrition"
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const categories = ["All", "Training", "Nutrition", "Cardio", "Basics"];

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLike = (index) => {
    if (!isLoggedIn) {
      toast.error("Please login to like posts");
      return;
    }
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

  const handleShare = () => {
    toast.success("Link copied to clipboard!");
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchInput(searchTerm);
    filterPosts(searchTerm, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterPosts(searchInput, category);
  };

  const filterPosts = (searchTerm, category) => {
    let filtered = blogPosts;
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    if (category !== "All") {
      filtered = filtered.filter(post => post.category === category);
    }
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <Toaster />

      {/* Header Section */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
          FITNESS BLOG
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Your source for expert fitness advice and training tips
        </p>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchInput}
              onChange={handleSearchChange}
              className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                            ${selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                                    transform hover:scale-102 transition-transform duration-200">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                {post.difficulty}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 
                             px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title and Author */}
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {post.title}
              </h2>

              <div className="flex items-center gap-2 mb-4">
                <User size={16} className="text-gray-500" />
                <span className="text-sm text-gray-500">
                  {post.author} • {post.authorRole}
                </span>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Timer size={16} />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp size={16} />
                  {post.popularity} views
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                {post.content}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handleLike(index)}
                  className={`flex items-center gap-2 ${liked[index] ? 'text-red-500' : 'text-gray-500'
                    }`}
                >
                  <Heart size={20} fill={liked[index] ? "currentColor" : "none"} />
                  {likes[index]}
                </button>

                <button className="flex items-center gap-2 text-gray-500">
                  <MessageSquare size={20} />
                  {comments[index].length}
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Blog Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => {
            if (!isLoggedIn) {
              toast.error("Please login to create a post");
              return;
            }
            navigate("/uploadBlog");
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg 
                     flex items-center justify-center transition-colors duration-200"
        >
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
};

export default Blog;