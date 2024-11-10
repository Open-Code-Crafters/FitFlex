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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamMembers from '../components/TeamCarousel';
import { width } from '@mui/system';
import AOS from 'aos';
const About = ({ mode, textcolor }) => {
  const [viewed, setViewed] = useState({
    users: false,
    opd: false,
    accidents: false,
    hospitals: false,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, [mode]);

  const navigate = useNavigate();
  const sloganStyle = {
    color: mode === 'dark' ? '#FFFFFF' : textcolor, // Use white for dark mode, otherwise use textcolor
  };

  return (

    <Container maxWidth="lg" style={{ backgroundColor: mode, color: textcolor }} sx={{ padding: '2rem 0', marginTop: '5rem' }}>


      {/* Hero Section */}
      <div className="slogan" data-aos="zoom-in" data-aos-duration="2000" style={{marginTop:'3.5rem'}}>
        <h2>"Your Fitness, Your Future!"</h2>
        <h3 style={{ backgroundColor: mode === 'dark' ? '#111118' : '#ffffff', color: textcolor }}>- FitFlex Motto</h3>
        <p style={{ backgroundColor: mode === 'dark' ? '#111118' : '#ffffff', color: textcolor }}>
          Welcome to FitFlex, where we help you transform your space, transform your body, and ultimately, transform your life! Our team is dedicated to providing you with the best fitness experience, whether you're working out from home or in the gym.
        </p>
      </div>

      {/* Our Mission & Vision Section */}
      <div className="mission-vision-container">
        <Card
          className="mission-vision-card"
          sx={{
            background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000',
            ml: 2,
          }}
        >
          <CardContent>
            <h4 style={{ color: mode === 'dark' ? '#fff' : '#000' }}>Our Vision</h4>
            <img src={vision} alt="Vision" />
            <p style={{ color: mode === 'dark' ? '#fff' : '#000' }}>
              At <b>FitFlex</b>, our vision is to create a world where <b>Fitness is accessible, enjoyable, and adaptable for everyone</b>.
            </p>
          </CardContent>
        </Card>

        <Card
          className="mission-vision-card"
          sx={{
            background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
            color: mode === 'dark' ? '#fff' : '#000',
            ml: 2,
          }}
        >
          <CardContent>
            <h4 style={{ color: mode === 'dark' ? '#fff' : '#000' }}>Our Mission</h4>
            <img src={mission} alt="Mission" className='imgclass' />
            <p style={{ color: mode === 'dark' ? '#fff' : '#000' }}>
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
          sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem', marginTop: "2rem", marginBottom: "1rem" }}
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          What We Offer
        </Typography>
        <Grid container spacing={4} justifyContent="center" data-aos="fade-up" data-aos-duration="2000">
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '100%',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <FitnessCenterIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />
              <Typography
                variant="h6"
                sx={{ mt: 2, fontWeight: 'bold', color: mode === 'dark' ? '#fff' : '#000' }}
              >
                Personalized Workouts
              </Typography>
              <Typography variant="body1" sx={{ color: mode === 'dark' ? '#ccc' : '#666', fontSize: "1.2rem" }}>
                Get customized workout plans based on your goals, fitness level, and available equipment.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '100%',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />
              <Typography
                variant="h6"
                sx={{ mt: 2, fontWeight: 'bold', color: mode === 'dark' ? '#fff' : '#000' }}
              >
                Fitness Challenges
              </Typography>
              <Typography variant="body1" sx={{ color: mode === 'dark' ? '#ccc' : '#666', fontSize: "1.2rem" }}>
                Participate in exciting challenges to keep you motivated and pushing your limits.
              </Typography>
            </Box>
          </Grid>
          {/* Call to Action Section */}
          {/* <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ backgroundColor: '#ff8c00', color: '#fff', padding: '1rem 2rem', fontSize: '1.2rem', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleJoinClick}
                >
                    Join FitFlex Now
                </Button>
            </Box> */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '100%',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <LocalDiningIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />
              <Typography
                variant="h6"
                sx={{ mt: 2, fontWeight: 'bold', color: mode === 'dark' ? '#fff' : '#000' }}
              >
                Nutrition Guidance
              </Typography>
              <Typography variant="body1" sx={{ color: mode === 'dark' ? '#ccc' : '#666', fontSize: "1.2rem" }}>
                Our experts will help you with personalized meal plans and nutrition advice for your goals.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Stats Section */}
      {/* Stats Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#ff8c00',
            pb: 4 // Added padding bottom here
          }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          Our Stats
        </Typography>
        <Grid container spacing={3} justifyContent="center" className="grid-container">
          {/* Total Users Card */}
          <Grid item xs={6} sm={3} textAlign="center" data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="300">
            <Card className="stat-card"
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <CardContent>
                <VisibilitySensor onChange={(isVisible) => { if (isVisible) setViewed((prev) => ({ ...prev, users: true })); }}>
                  {({ isVisible }) => (
                    <div className='numbers'>
                      {viewed.users || isVisible ? <CountUp start={0} end={234} duration={3} suffix="+" /> : 234}
                    </div>
                  )}
                </VisibilitySensor>
                <Typography variant="body1" className="numbers">
                  Total Users
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Diet Plans Card */}
          <Grid item xs={6} sm={3} textAlign="center" data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="200">
            <Card className="stat-card"
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <CardContent>
                <VisibilitySensor onChange={(isVisible) => { if (isVisible) setViewed((prev) => ({ ...prev, opd: true })); }}>
                  {({ isVisible }) => (
                    <div className='numbers'>
                      {viewed.opd || isVisible ? <CountUp start={0} end={40} duration={3} suffix="+" /> : 40}
                    </div>
                  )}
                </VisibilitySensor>
                <Typography variant="body1" className="numbers">
                  Diet Plans
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Total Programs Card */}
          <Grid item xs={6} sm={3} textAlign="center" data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="100">
            <Card className="stat-card"
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <CardContent>
                <VisibilitySensor onChange={(isVisible) => { if (isVisible) setViewed((prev) => ({ ...prev, accidents: true })); }}>
                  {({ isVisible }) => (
                    <div className='numbers'>
                      {viewed.accidents || isVisible ? <CountUp start={0} end={35} duration={3} suffix="+" /> : 35}
                    </div>
                  )}
                </VisibilitySensor>
                <Typography variant="body1" className="numbers">
                  Total Programs
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Personal Trainers Card */}
          <Grid item xs={6} sm={3} textAlign="center" data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="300">
            <Card className="stat-card"
              sx={{
                background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
                color: mode === 'dark' ? '#fff' : '#000',
              }}
            >
              <CardContent>
                <VisibilitySensor onChange={(isVisible) => { if (isVisible) setViewed((prev) => ({ ...prev, hospitals: true })); }}>
                  {({ isVisible }) => (
                    <div className='numbers'>
                      {viewed.hospitals || isVisible ? <CountUp start={0} end={25} duration={3} suffix="+" /> : 25}
                    </div>
                  )}
                </VisibilitySensor>
                <Typography variant="body1" className="numbers">
                  Personal Trainers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose FitFlex Section */}
      <Box
        sx={{
          mb: 6,
          padding: '2rem',
          backgroundColor: mode === 'light' ? '#f7f7f7' : '#1d1d28',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem' }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Why Choose FitFlex?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ fontSize: '1.2rem', color: textcolor }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          With <b>FitFlex</b>, you’re not just working out — you’re part of a community that pushes you to be the best version of yourself. Our trainers, programs, and tracking tools are designed to keep you motivated, on track, and seeing results.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="500">
            <Card sx={{
              background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
              textAlign: 'center',
              color: mode === 'dark' ? '#fff' : '#000',
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                  24/7 Access
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 'semi-bold', fontSize: "1.2rem" }}>
                  Workout at your convenience, anytime, anywhere.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="300">
            <Card sx={{
              background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
              textAlign: 'center',
              color: mode === 'dark' ? '#fff' : '#000',
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                  Experienced Trainers
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 'semi-bold', fontSize: "1.2rem" }}>
                  Learn from the best in the industry with personalized attention.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} data-aos="fade-up"
            data-aos-duration="1500" data-aos-delay="100">
            <Card sx={{
              background: mode === 'dark' ? 'linear-gradient(135deg, #000000, #444444)' : '#fff',
              textAlign: 'center',
              color: mode === 'dark' ? '#fff' : '#000',
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                  Track Your Progress
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 'semi-bold', fontSize: "1.2rem" }}>
                  Use our advanced tools to measure your progress and hit your targets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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
            fontSize: '1.2rem',
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
      <Box sx={{
        backgroundColor: mode === 'light' ? '#f7f7f7' : '#1d1d28',
        textAlign: 'center',
        color: mode === 'dark' ? '#fff' : '#000',
        marginTop: '2rem',
        borderRadius: 2
      }}>

        <TeamMembers mode={mode} />
      </Box>



    </Container>
  );
};

export default About;
