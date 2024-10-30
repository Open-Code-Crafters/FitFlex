import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CloudinaryUpload = ({ cloudName, uploadPreset, onUploadSuccess }) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file)); // Show preview
  };

  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image first.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      console.log("Upload Success:", response.data);
      toast.success("Image uploaded successfully!");

      // Call callback function if provided
      console.log(response.data.secure_url);
      onUploadSuccess && onUploadSuccess(response.data.secure_url);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
      setImage(null); // Clear image
      setPreviewUrl(""); // Reset preview
    }
  };

  return (
    <div className="image-upload">
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {previewUrl && <img src={previewUrl} alt="Preview" width="200" className="mt-4" />}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`mt-2 px-4 py-2 text-white rounded ${
          uploading ? "bg-gray-400" : "bg-blue-600"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
};

export default CloudinaryUpload;
