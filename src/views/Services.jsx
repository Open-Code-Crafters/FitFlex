import React, { useState } from "react";
import '../styles/Services.css'

const Services = ({mode,textcolor}) => {
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
      <h1 style={styles.heading}>Our Premium Services</h1>
      
      <div style={styles.serviceGrid}>
        {/* Personal Training Section */}
        <div
                    style={{ ...styles.serviceCard, backgroundColor: mode === 'light' ? '#fffc' : '#3d2c2ccc' }}
                    className="service-card"
                    onClick={() => handleOpenModal("Personal Training")}
        >
          <img
            src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262615_edit.webp"
            alt="Personal Training"
            style={styles.image}
          />
          <h2 style={{...styles.subheading , color : textcolor}}>Personal Training</h2>
          <p style={{...styles.subheading , color : textcolor}}>
            Efficient and effective personal training with a client-centric approach. Customized plans for strength training, cardio, and more.
          </p>
          <button
            style={styles.button}
            onClick={() => handleOpenModal("Personal Training")}
          >
            Schedule a Session
          </button>
        </div>

        {/* Nutritional Counseling Section */}
        <div
                    style={{ ...styles.serviceCard, backgroundColor: mode === 'light' ? '#fffc' : '#3d2c2ccc' }}
                    className="service-card"
                    onClick={() => handleOpenModal("Nutritional Counseling")}
        >
          <img
            src="https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2936524_edit.webp"
            alt="Nutritional Counseling"
            style={styles.image}
          />
          <h2 style={{...styles.subheading ,  color : textcolor}}>Nutritional Counseling</h2>
                   <p style={{ ...styles.subheading, color: textcolor, paddingBottom: '1.9rem' }}>
            Tailored nutrition counseling to help you optimize your health. Get personalized advice on nourishment for your body.
          </p>
          <button
            style={styles.button}
            onClick={() => handleOpenModal("Nutritional Counseling")}
          >
            Get Started
          </button>
        </div>

        {/* Online Training Section */}
        <div
                    style={{ ...styles.serviceCard, backgroundColor: mode === 'light' ? '#fffc' : '#3d2c2ccc' }}
                    className="service-card"

          onClick={() => handleOpenModal("Online Virtual Training")}
        >
          <img
            src="https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2942210_edit.webp"
            alt="Online Virtual Training"
            style={styles.image}
          />
          <h2 style={{...styles.subheading ,  color : textcolor}}>Online Virtual Training</h2>
          <p style={{...styles.subheading , color : textcolor}}>
            Join our online virtual training sessions, blending technology with personalized fitness to help you stay fit from anywhere.
          </p>
          <button
            style={styles.button}
            onClick={() => handleOpenModal("Online Virtual Training")}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Modal for Contact */}
      {modalOpen && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Close Button as an X on top right */}
            <button onClick={handleCloseModal} style={styles.closeButton}>
              &times;
            </button>

            <h2 style={styles.modalHeading}>Contact Us for {currentService}</h2>
            <p style={styles.modalText}>
              Fill out the form below, and we’ll be in touch shortly.
            </p>
            <form>
              <input type="text" placeholder="Your Name" style={styles.input} required />
              <input type="text" placeholder="Your Name" style={styles.input} required />
              <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
              <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
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
    padding: "40px",
    textAlign: "center",
    background: "linear-gradient(135deg, rgb(255, 215, 0), rgb(255, 69, 0), rgb(255, 99, 71))",
  },
  heading: {
    fontSize: "2.8em",
    marginBottom: "30px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  serviceCard: {
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "transform 0.3s ease",
  },
  subheading: {
    fontSize: "1.6em",
    color: "#FF4500",
    margin: "15px 0 10px",
    fontWeight: "bold",
  },
  description: {
    color: "#555",
    lineHeight: "1.6",
    fontSize: "0.95em",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "linear-gradient(90deg, blue, lightblue)",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s ease, color 0.3s ease",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      backgroundPosition: "100% 0",
    },
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "15px",
    width: "95%",
    maxWidth: "700px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    position: "relative",
    transform: "scale(0.7)",
    animation: "scaleIn 0.3s ease forwards",
  },
  modalHeading: {
    fontSize: "2em",
    color: "#333",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  modalText: {
    fontSize: "1.1em",
    color: "#555",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1em",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1em",
  },
  submitButton: {
    padding: "12px 20px",
    backgroundColor: "#FF4500",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1em",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "1.5em",
    cursor: "pointer",
  },
};

export default Services;
