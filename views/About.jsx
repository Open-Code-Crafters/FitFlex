import { Typography, Container, Box, Grid, Button, Card, CardContent } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import mission from "../assets/about/mission.png";
import vision from "../assets/about/vision.png";
import "../styles/about.css";
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({ mode, textcolor }) => {
  const [viewed, setViewed] = useState({
    users: false,
    opd: false,
    accidents: false,
    hospitals: false,
  });

  const navigate = useNavigate();
  const sloganStyle = {
    color: mode === 'dark' ? '#FFFFFF' : textcolor, // Use white for dark mode, otherwise use textcolor
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: mode, color: textcolor }} sx={{ padding: '2rem 0' }}>

      {/* Hero Section */}
      <div
        className="slogan"
        style={{
          paddingTop: "140px",
          paddingLeft: "20px",
          paddingRight: "20px",
          textAlign: "center",
        }}
        data-aos="zoom-in" data-aos-duration="2000"
      >
        <h2 style={{ fontSize: "2rem" }}>"Your Fitness, Your Future!"</h2>
        <h3
          style={{
            backgroundColor: mode === "dark" ? "#111118" : "#ffffff",
            color: textcolor,
            padding: "10px",
            fontSize: "1.5rem",
          }}
        >
          - FitFlex Motto
        </h3>
        <p
          style={{
            backgroundColor: mode === "dark" ? "#111118" : "#ffffff",
            color: textcolor,
            padding: "10px",
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          Welcome to FitFlex, where we help you transform your space, transform your
          body, and ultimately, transform your life! Our team is dedicated to
          providing you with the best fitness experience, whether you're working out
          from home or in the gym.
        </p>
      </div>


      {/* Our Mission & Vision Section */}
      <div className="mission-vision-container">
        <Card
          className="mission-vision-card"
          sx={{
            background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000',
          }}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          <CardContent>
            <h4 style={{ color: mode === 'dark' ? '#fff' : '#000', fontSize: "1.5rem" }}>Our Vision</h4>
            <img src={vision} alt="Vision" />
            <p style={{ color: mode === 'dark' ? '#fff' : '#000', fontSize: "1rem", lineHeight: "1.6", padding: "0 10px", }}>
              At <b>FitFlex</b>, our vision is to create a world where <b>Fitness is accessible, enjoyable, and adaptable for everyone</b>.
            </p>
          </CardContent>
        </Card>

        <Card
          className="mission-vision-card"
          sx={{
            background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <CardContent>
            <h4 style={{ color: mode === "dark" ? "#fff" : "#000", fontSize: "1.5rem" }}>Our Mission</h4>
            <img src={mission} alt="Mission" className='imgclass' />
            <p style={{ color: mode === 'dark' ? '#fff' : '#000', fontSize: "1rem", lineHeight: "1.6", padding: "0 10px", }}>
              At <b>FitFlex</b>, our mission is to provide a fitness solution that adapts to your lifestyle and goals. <b>Transform your space, transform your body</b>.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* What We Offer Section */}
      <Box sx={{ mb: 6 }}>
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    sx={{ 
      fontWeight: 'bold', 
      color: '#ff8c00', 
      fontSize: { xs: '1.5rem', sm: '2rem' }, 
      marginTop: "2rem", 
      marginBottom: "1rem" 
    }}
    data-aos="fade-left"
    data-aos-delay="200"
    data-aos-duration="2000"
  >
    What We Offer
  </Typography>
  <Grid container spacing={4} justifyContent="center" data-aos="fade-up" data-aos-duration="2000">
    {[
      {
        icon: <FitnessCenterIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />,
        title: "Personalized Workouts",
        description: "Get customized workout plans based on your goals, fitness level, and available equipment.",
      },
      {
        icon: <EmojiEventsIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />,
        title: "Fitness Challenges",
        description: "Participate in exciting challenges to keep you motivated and pushing your limits.",
      },
      {
        icon: <LocalDiningIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />,
        title: "Nutrition Guidance",
        description: "Our experts will help you with personalized meal plans and nutrition advice for your goals.",
      },
    ].map((item, index) => (
      <Grid item xs={12} sm={4} key={index} textAlign="center">
        <Box
          sx={{
            background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
            padding: 3,
            borderRadius: 2,
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            height: '80%',
            color: mode === 'dark' ? '#fff' : '#000',
          }}
        >
          {item.icon}
          <Typography
            variant="h6"
            sx={{ mt: 2, fontWeight: 'bold', color: mode === 'dark' ? '#fff' : '#000' }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ color: mode === 'dark' ? '#ccc' : '#666', fontSize: { xs: "1rem", sm: "1.2rem" } }}>
            {item.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>

      {/* Stats Section */}
      {/* Stats Section */}
      <Box sx={{ mb: 6 }}>
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    sx={{ fontWeight: 'bold', color: '#ff8c00', pb: 4 }}
    data-aos="zoom-in"
    data-aos-duration="1500"
  >
    Our Stats
  </Typography>
  <Grid container spacing={3} justifyContent="center">
    {[
      { title: "Total Users", count: 234, viewedKey: 'users' },
      { title: "Diet Plans", count: 40, viewedKey: 'opd' },
      { title: "Total Programs", count: 35, viewedKey: 'accidents' },
      { title: "Personal Trainers", count: 25, viewedKey: 'hospitals' },
    ].map(({ title, count, viewedKey }, index) => (
      <Grid item xs={5} sm={3} textAlign="center" key={index} data-aos="fade-up"
      data-aos-duration="1500" data-aos-delay="300">
        <Card
          className="stat-card"
          sx={{
            background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <CardContent>
            <VisibilitySensor onChange={(isVisible) => {
              if (isVisible) setViewed((prev) => ({ ...prev, [viewedKey]: true }));
            }}>
              {({ isVisible }) => (
                <div className='numbers'>
                  {viewed[viewedKey] || isVisible ? <CountUp start={0} end={count} duration={3} suffix="+" /> : count}
                </div>
              )}
            </VisibilitySensor>
            <Typography variant="body1" className="numbers">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


{/* Why Choose FitFlex Section */}
    <Box
      sx={{
        mb: 6,
        padding: { xs: '1rem', sm: '2rem' }, // Responsive padding
        backgroundColor: mode === 'light' ? '#f7f7f7' : '#1d1d28',
        borderRadius: '8px',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: { xs: '1.5rem', sm: '2rem' } }} // Responsive font size
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Why Choose FitFlex?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        paragraph
        sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, color: textcolor }} // Responsive font size
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        With <b>FitFlex</b>, you’re not just working out — you’re part of a community that pushes you to be the best version of yourself. Our trainers, programs, and tracking tools are designed to keep you motivated, on track, and seeing results.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[ 
          { title: '24/7 Access', description: 'Workout at your convenience, anytime, anywhere.' },
          { title: 'Experienced Trainers', description: 'Learn from the best in the industry with personalized attention.' },
          { title: 'Track Your Progress', description: 'Use our advanced tools to measure your progress and hit your targets.' },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} key={index} data-aos="fade-up"
          data-aos-duration="1500" data-aos-delay="500">
            <Card sx={{
              background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
              textAlign: 'center',
              color: mode === 'dark' ? '#fff' : '#000',
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 500, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    {/* Call to Action Section */}
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#ff8c00',
          color: '#fff',
          padding: '1rem 2rem',
          fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
          transition: 'background 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(45deg, #FF4500, #FF8C00)',
          }
        }}
        endIcon={<ArrowForwardIcon />}
        onClick={() => navigate('/register')}
        data-aos="fade-right"
        data-aos-duration="1500" data-aos-delay="300"
      >
        Join FitFlex Now
      </Button>
    </Box>
    </Container>
  );
};

export default About;
