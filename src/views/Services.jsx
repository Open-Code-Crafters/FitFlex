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
      <h1 className="services-title">Our Premium Services</h1>
      <div className={`service-grid ${mode}`}>
        {services.map((service, index) => (
          <div
            className="service-card"
            key={service.name}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="1200"
          >
            <img src={service.imageUrl} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button onClick={() => handleOpenModal(service.name)}>
              Learn More
            </button>
            <div className="stats">
              <span className="views">👁️ Views: {service.views}</span>
              <span
                className={`likes ${like[service.name.replace(" ", "")] ? "liked" : ""}`}
                onClick={() => handleLikeClick(service.name)}
              >
                ❤️ {like[service.name.replace(" ", "")] ? "Liked" : "Like"}:{" "}
                {like[service.name.replace(" ", "")] ? service.baseLikes + 1 : service.baseLikes}
              </span>
            </div>
          </div>
        ))}

        {modalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={handleCloseModal} className="close-button">
                &times;
              </button>

              <h2 className="modal-heading">
                Contact Us for {currentService}
              </h2>
              <p className="modal-text">
                Fill out the form below, and we'll be in touch shortly.
              </p>
              <form onSubmit={handleSendMessage} className="contact-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="submit-button">
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

export default Services;
