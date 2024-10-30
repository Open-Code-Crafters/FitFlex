import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { redirect, useNavigate } from "react-router-dom";
import { useBlog } from "../../context/blogContext";
import CloudinaryUpload from "../components/imageupload";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const cloudName= import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const uploadPreset= import.meta.env.VITE_CLOUDINARY_CLOUD_PRESET

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  },[])
   
  
  // Get the handleUpload function from the BlogContext
  const { handleUpload } = useBlog();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!isLoggedIn){
      toast.error("unauthenticated")
      navigate("/register");
    }
    // console.log(image+"ADWwwwwdawwwwwwwwwwadw")

    if(!image){
      toast.error("please provide a cover image to you blog")
      return;
    }

    // Call the handleUpload function from context with the blog details
    handleUpload(title, author, content, image);

    // Reset form fields after submission
    setTitle("");
    setAuthor("");
    setContent("");
    setImage(null);

    navigate("/blog")

    // console.log("Blog uploaded:", { title, author, content, imageName });
  };

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  return (
    <div className="flex items-center justify-center font-future  text-gray-200 pt-20 h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg bg-black hover:scale-105 transition-all duration-500 shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Blog</h2>
        <div className="mb-6 p-[.5px] bg-gradient-to-t from-orange-500 to-yellow-400">
          <div className="bg-black p-2 mb-2">
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-6 p-[.5px] bg-gradient-to-t from-orange-500 to-yellow-400">
          <div className="bg-black p-2 mb-2">
            <input
              type="text"
              value={author}
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 bg-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-6 p-[.5px] bg-gradient-to-t from-orange-500 to-yellow-400">
          <div className="bg-black p-2 mb-2">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="w-full bg-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              required
            />
          </div>
        </div>
        <div className="mb-4 p-[.5px] bg-gradient-to-t from-orange-500 to-yellow-400">
          {/* <div className="bg-black p-2 mb-2">
            <input
              type="file"
              accept=".jpg, .jpeg, image/jpg, image/jpeg"
              placeholder="Image"
              onChange={handleImageChange}
              className="w-full bg-black px-4 py-2 border rounded-lg"
            />
          </div> */}
          <CloudinaryUpload cloudName={cloudName} uploadPreset={uploadPreset} onUploadSuccess={setImage}/>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-t from-orange-500 to-yellow-400 text-white py-2 px-4 rounded-lg transition-colors hover:from-orange-600 hover:to-yellow-500"
        >
          Upload Blog
        </button>
      </form>
      <Toaster/>
    </div>
  );
};

export default UploadBlog;

