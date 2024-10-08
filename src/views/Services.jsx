import React, { useState } from "react";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState("");

  const handleOpenModal = (service) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentService("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>

      {/* Personal Training Section */}
      <div style={styles.serviceCard}>
        <img
          src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262615_edit.webp"
          alt="Personal Training"
          style={styles.image}
        />
        <h2 style={styles.subheading}>Personal Training</h2>
        <p>
          Strength Training, Weight Training, Cardio, etc.
          <br />
          Efficient and Effective Personal Training Approach at FitFlex. Our client-centric approach focuses on understanding your unique goals, preferences, and fitness level to create a personalized training plan that delivers results.
        </p>
        <button style={styles.button} onClick={() => handleOpenModal("Personal Training")}>
        Schedule a Session
        </button>
      </div>

      {/* Nutritional Counseling Section */}
      <div style={styles.serviceCard}>
        <img
          src="https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2936524_edit.webp"
          alt="Nutritional Counseling"
          style={styles.image}
        />
        <h2 style={styles.subheading}>Nutritional Counseling</h2>
        <p>
          Tailored Nutrition Counseling: Your Path to Optimal Nourishment. Our individual nutrition counseling service is designed to provide you with guidance and support on your journey to better health. 
        </p>
        <button style={styles.button} onClick={() => handleOpenModal("Nutritional Counseling")}>
        Get Started
        </button>
      </div>

      {/* Online Training Section */}
      <div style={styles.serviceCard}>
        <img
          src="https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2942210_edit.webp"
          alt="Online Virtual Training"
          style={styles.image}
        />
        <h2 style={styles.subheading}>Online Virtual Training</h2>
        <p>
          Welcome to Online Virtual Training, where cutting-edge technology meets personalized fitness. Elevate your fitness at your convenience with engaging virtual training sessions.
        </p>
        <button style={styles.button} onClick={() => handleOpenModal("Online Virtual Training")}>
          Join Now
        </button>
      </div>

      {/* Modal for Contact */}
      {modalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Contact FitFlex for More Information on {currentService}</h2>
            <p>Please fill out the form below, and we will get back to you shortly.</p>
            <form>
              <input type="text" placeholder="Your Name" style={styles.input} required />
              <input type="email" placeholder="Your Email" style={styles.input} required />
              <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
              <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
            <button onClick={handleCloseModal} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #FFD700, #FF4500, #FF6347)", // Gradient background
    borderRadius: "10px",
  },
  heading: {
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "black", // Changed to black
    fontWeight: "bold", // Bold style
  },
  serviceCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    margin: "20px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
    background: "rgba(255, 255, 255, 0.8)", // Slightly transparent background for service cards
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  subheading: {
    fontSize: "1.8em",
    margin: "10px 0",
    color: "black", // Changed to black
    fontWeight: "bold", // Bold style
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
    transition: "background-color 0.3s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#FF4500",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
};

// Optional: Add hover effect for buttons
styles.button.hover = {
  backgroundColor: "#0056b3",
};

export default Services;
