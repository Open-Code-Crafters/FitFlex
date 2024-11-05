import React, { useState } from "react";
import "../styles/Services.css";
import { toast, ToastContainer } from "react-toastify";

const Services = ({ mode, textcolor }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState("");
  const [like, setLike] = useState({
    PersonalTraining: false,
    NutritionalCounseling: false,
    OnlineVirtualTraining: false,
  });

  const handleOpenModal = (service) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const handleLikeClick = (serviceName) => {
    setLike((prev) => ({
      ...prev,
      [serviceName.replace(" ", "")]: !prev[serviceName.replace(" ", "")],
    }));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentService("");
  };

  const notify = () => {
    toast("✅ Thank you, We'll get in touch soon.", {
      theme: "light",
      style: { fontWeight: "500", color: "black", fontFamily: "sans-serif" },
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      position: "top-center",
      autoClose: 3000,
      role: "alert",
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setModalOpen(false);
    notify();
  };

  const services = [
    {
      name: "Personal Training",
      description:
        "Efficient and effective personal training with a client-centric approach. Customized plans for strength training, cardio, and more.",
      imageUrl:
        "https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262615_edit.webp",
      views: 262,
      baseLikes: 40,
    },
    {
      name: "Nutritional Counseling",
      description:
        "Tailored nutrition counseling to help you optimize your health. Get personalized advice on nourishment for your body.",
      imageUrl:
        "https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2936524_edit.webp",
      views: 205,
      baseLikes: 37,
    },
    {
      name: "Online Virtual Training",
      description:
        "Join our online virtual training sessions, blending technology with personalized fitness to help you stay fit from anywhere.",
      imageUrl:
        "https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2942210_edit.webp",
      views: 237,
      baseLikes: 46,
    },
  ];

  return (
    <>
     <h1>Our Premium Services</h1>
      <div className={`service-grid ${mode}`} style={{ marginTop: '100px'}} >
        {services.map((service, index) => (
          <div
            className="service-card"
            key={service.name}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="1200"
            style={{ marginTop: '5rem' }}
          >
            <img src={service.imageUrl} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button onClick={() => handleOpenModal(service.name)}>
              Learn More
            </button>
            <div className="stats">
              <span>👁️ Views: <span className="data"> {service.views}</span></span>
              <span>❤️ Likes: <span className="data">{service.likes}</span></span>
              <span className="views">👁️ Views: {service.views}</span>

              <span
                className={`likes ${like[service.name.replace(" ", "")] ? "liked" : ""}`}
                onClick={() => handleLikeClick(service.name)}
              />
                ❤️ {like[service.name.replace(" ", "")] ? "Liked" : "Like"}:{" "}
                {like[service.name.replace(" ", "")] ? service.baseLikes + 1 : service.baseLikes}
            </div>
          </div>
        ))}

        {/* Modal for Contact */}
        {modalOpen && (
          <div style={styles.modalOverlay} onClick={handleCloseModal}>
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button as an X on top right */}
              <button onClick={handleCloseModal} style={styles.closeButton}>
                &times;
              </button>

              <h2 style={styles.modalHeading}>
                Contact Us for {currentService}
              </h2>
              <p style={styles.modalText}>
                Fill out the form below, and we’ll be in touch shortly.
              </p>
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={styles.input}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  style={styles.textarea}
                  required
                ></textarea>
                <button type="submit" style={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

const styles = {
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
    fontFamily: "sans-serif",
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
