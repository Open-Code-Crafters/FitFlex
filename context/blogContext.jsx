import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context with undefined as initial value
const BlogContext = createContext(undefined);

// BlogProvider to wrap components where Blog state is required
export const BlogProvider = ({ children }) => {
  const [blogItems, setBlogItems] = useState([]);

  // Function to handle uploading a new blog
  useEffect(() => {
    if (!localStorage.getItem("blogs") === undefined) {
      const storedBlogs = localStorage.getItem("blogs");
      if (storedBlogs) {
        setBlogItems(JSON.parse(storedBlogs));
      }
    }
  }, []);

  const handleUpload = (title, author, content, image) => {
    // Create a new blog item object
    const newBlogItem = {
      // id: Date.now(), // You can replace this with a better ID system
      title,
      author,
      content,
      image,
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    // Update the state with the new blog item
    setBlogItems((prevItems) => [
      ...prevItems,
      newBlogItem,
    ]);

    console.log(blogItems)
    localStorage.setItem("blogs", JSON.stringify(blogItems));
  };

  // Function to remove an item from the Blog by its ID
  const handleRemove = (id) => {
    setBlogItems((prevItems) => prevItems.filter((item) => item.id !== id));
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <BlogContext.Provider value={{ blogItems, handleUpload, handleRemove }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the BlogContext in any component
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
