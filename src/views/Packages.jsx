import React, { useState } from 'react';

const Packages = () => {
  const handleDetailsClick = (msg) => {
    alert(msg); // Show the contact message in an alert
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img 
          src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3263189_edit.webp" 
          alt="Personal Training" 
          style={styles.headerImage} 
        />
      </div>
      
      <h1 style={styles.heading}>Our Packages</h1>

      <div style={styles.cardContainer}>
        <div style={styles.packageCard}>
          <img 
            src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262599_edit.webp" 
            alt="5 days a week (1-1 60 mins Personal Training)" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>5 Days a Week</h3>
          <p style={styles.packageDetails}>1-1 60 mins Personal Training</p>
          <p style={styles.price}>Price: $300</p>
          <p style={styles.additionalInfo}>
            Includes personalized workout plans, nutrition advice, and weekly progress tracking.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>

        <div style={styles.packageCard}>
          <img 
            src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262598_edit.webp" 
            alt="4 days week (90 mins Personal Training)" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>4 Days a Week</h3>
          <p style={styles.packageDetails}>90 mins Personal Training</p>
          <p style={styles.price}>Price: $250</p>
          <p style={styles.additionalInfo}>
            Includes fitness assessments, tailored workouts, and ongoing support.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>

        <div style={styles.packageCard}>
          <img 
            src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262596_edit.webp" 
            alt="Long commitment" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>Long Commitment</h3>
          <p style={styles.packageDetails}>(60 sessions)</p>
          <p style={styles.price}>Price: $1200</p>
          <p style={styles.additionalInfo}>
            Offers flexibility in scheduling and a dedicated coach for the duration.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.packageCard}>
          <img 
            src="https://dvm0q8ak413bh.cloudfront.net/data/org/26275/media/img/source/edit/2951960_edit.webp" 
            alt="Virtual Training Package" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>Virtual Training</h3>
          <p style={styles.packageDetails}>Flexible and accessible training</p>
          <p style={styles.price}>Price: $200</p>
          <p style={styles.additionalInfo}>
            Includes live sessions and recorded workouts tailored to your fitness goals.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>

        <div style={styles.packageCard}>
          <img 
            src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/26275/media/img/source/edit/3262597_edit.webp" 
            alt="Semi-Private Session" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>Semi-Private Session</h3>
          <p style={styles.packageDetails}>Train with a partner</p>
          <p style={styles.price}>Price: $150</p>
          <p style={styles.additionalInfo}>
            Enjoy the benefits of personal training with a friend and share the experience.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>

        <div style={styles.packageCard}>
          <img 
            src="https://media.istockphoto.com/id/1395337483/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=lev6DFIvb5CVjdxSxuURswdZYLNHZPT4Y44iUkgm2q4=" 
            alt="Basic Package" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>Basic Package</h3>
          <p style={styles.packageDetails}>Get started with your fitness journey.</p>
          <p style={styles.price}>Price: $100</p>
          <p style={styles.additionalInfo}>
            Includes basic fitness assessments and initial guidance for beginners.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.packageCard}>
          <img 
            src="https://www.guardian.in/cdn/shop/articles/What-is-the-importance-of-physical-fitness.jpg?v=1715235454&width=2048" 
            alt="Premium Package" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>Premium Package</h3>
          <p style={styles.packageDetails}>Enhanced training experience.</p>
          <p style={styles.price}>Price: $350</p>
          <p style={styles.additionalInfo}>
            Offers specialized workouts and nutrition guidance from top trainers.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>

        <div style={styles.packageCard}>
          <img 
            src="https://t4.ftcdn.net/jpg/01/79/81/77/360_F_179817756_QzTocli57q9G6a1Oe7kJtoMS5dNMU8cl.jpg" 
            alt="Advanced Package" 
            style={styles.image} 
          />
          <h3 style={styles.packageTitle}>Advanced Package</h3>
          <p style={styles.packageDetails}>For serious fitness enthusiasts.</p>
          <p style={styles.price}>Price: $500</p>
          <p style={styles.additionalInfo}>
            Comprehensive training program including advanced fitness strategies and ongoing support.
          </p>
          <button 
            style={styles.button} 
            onClick={() => handleDetailsClick('For more information, please contact us at: info@example.com')}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    background: 'linear-gradient(to right, red, orange, yellow)', // Gradient background
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  header: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden', // Ensure the header image is contained
  },
  headerImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  heading: {
    margin: '20px 0',
    fontSize: '2.5em',
    color: 'white', // White heading
    fontWeight: 'bold',
    position: 'absolute', // Keeps the heading over the image
    top: '30%', // Adjusts position
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Improves visibility
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '20px 0',
    gap: '20px', // Adds space between cards
  },
  packageCard: {
    background: 'white',
    borderRadius: '10px',
    padding: '15px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  packageTitle: {
    fontSize: '1.5em',
    margin: '10px 0',
    color: 'black',
  },
  packageDetails: {
    fontSize: '1.1em',
    color: 'gray',
  },
  price: {
    fontSize: '1.3em',
    color: 'green',
    fontWeight: 'bold',
  },
  additionalInfo: {
    fontSize: '0.9em',
    color: 'darkgray',
    marginTop: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Packages;
