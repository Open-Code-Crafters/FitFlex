// this component is temperary and will be replaced with the actual workout and exercise components





import { Typography, Container, Box, Grid, Button } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import mission from "../assets/about/mission.jpg"
import vision from "../assets/about/vision.png"
import "../styles/about.css";
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { useState } from 'react';

const About = () => {
  const [viewed, setViewed] = useState({
    users: false,
    opd: false,
    accidents: false,
    hospitals: false,
  });
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
      {/* Hero Section */}
      <div class="slogan">
        <h2>"Your Fitness, Your Future!"</h2>
        <h3>- FitFlex Motto</h3>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>Welcome to FitFlex, where we help you transform your space, transform your body, and ultimately, transform your life! Our team is dedicated to providing you with the best fitness experience, whether you're working out from home or in the gym.</p>
      </div>


      {/* Our Mission Section */}
      <div class="container">

    <div class="vision-box">
        <h4>Our Vision</h4>
        <img src={vision} alt="Vision" />
        <p>At FitFlex, our vision is to create a world where fitness is accessible, enjoyable, and adaptable for everyone. We believe in helping people achieve their goals by making fitness a part of everyday life.</p>
    </div>

    <div class="mission-box">
        <h4>Our Mission</h4>
        <img src={mission} alt="Mission" />
        <p>At <b>FitFlex</b>, our mission is to provide a fitness solution that adapts to your lifestyle and goals. Whether you’re a busy professional, a stay-at-home parent, or just someone who wants to stay fit, we have programs designed just for you. <b>Transform your space, transform your body</b>.</p>
    </div>
</div>



      {/* What We Offer - Grid Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem', paddingBottom: '4px' }}
        >
          What We Offer
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '80%'
              }}
            >
              <FitnessCenterIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                Personalized Workouts
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Get customized workout plans based on your goals, fitness level, and available equipment.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '80%'
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                Fitness Challenges
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Participate in exciting challenges to keep you motivated and pushing your limits.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '80%'
              }}
            >
              <LocalDiningIcon sx={{ fontSize: '4rem', color: '#ff8c00' }} />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                Nutrition Guidance
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Our experts will help you with personalized meal plans and nutrition advice for your goals.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>


      {/* Why Choose Us Section */}
      <Box sx={{ mb: 6, padding: '2rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem' }}
        >
          Why Choose FitFlex?
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.2rem', color: '#666' }}>
          With <strong>FitFlex</strong>, you’re not just working out — you’re part of a community that pushes
          you to be the best version of yourself. Our trainers, programs, and tracking tools are
          designed to keep you motivated, on track, and seeing results.
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '70%', // Ensures all cards are of equal height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                24/7 Access
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Workout at your convenience, anytime, anywhere.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                Experienced Trainers
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Learn from the best in the industry with personalized attention.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: 3,
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                Track Your Progress
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Use our advanced tools to measure your progress and hit your targets.
              </Typography>
            </Box>
          </Grid>
        </Grid>
     <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem', marginTop:"2.5rem" , marginBottom:"-1rem"}}
        >
         Our Stats
        </Typography>
        <SectionWrapper>
      {/* First Stat */}
     
      <StatItem>
        <VisibilitySensor
          partialVisibility
          offset={{ bottom: 200 }}
          onChange={(isVisible) => {
            if (isVisible) {
              setViewed((prev) => ({ ...prev, users: true }));
            }
          }}
        >
          {({ isVisible }) => (
            <StatNumber>
              {viewed.users || isVisible ? (
                <CountUp start={0} end={234} duration={3} suffix="+" />
              ) : (
                234
              )}
            </StatNumber>
          )}
        </VisibilitySensor>
        Total Users
      </StatItem>

      {/* Second Stat */}
      <StatItem>
        <VisibilitySensor
          partialVisibility
          offset={{ bottom: 200 }}
          onChange={(isVisible) => {
            if (isVisible) {
              setViewed((prev) => ({ ...prev, opd: true }));
            }
          }}
        >
          {({ isVisible }) => (
            <StatNumber>
              {viewed.opd || isVisible ? (
                <CountUp start={0} end={40} duration={3} suffix="+" />
              ) : (
                40
              )}
            </StatNumber>
          )}
        </VisibilitySensor>
        Total Diet Plan
      </StatItem>

      {/* Third Stat */}
      <StatItem>
        <VisibilitySensor
          partialVisibility
          offset={{ bottom: 200 }}
          onChange={(isVisible) => {
            if (isVisible) {
              setViewed((prev) => ({ ...prev, accidents: true }));
            }
          }}
        >
          {({ isVisible }) => (
            <StatNumber>
              {viewed.accidents || isVisible ? (
                <CountUp start={0} end={35} duration={3} suffix="+" />
              ) : (
                35
              )}
            </StatNumber>
          )}
        </VisibilitySensor>
       Programs
      </StatItem>

      {/* Fourth Stat */}
      <StatItem>
        <VisibilitySensor
          partialVisibility
          offset={{ bottom: 200 }}
          onChange={(isVisible) => {
            if (isVisible) {
              setViewed((prev) => ({ ...prev, hospitals: true }));
            }
          }}
        >
          {({ isVisible }) => (
            <StatNumber>
              {viewed.hospitals || isVisible ? (
                <CountUp start={0} end={25} duration={3} suffix="+" />
              ) : (
                25
              )}
            </StatNumber>
          )}
        </VisibilitySensor>
        Personal Trainer
      </StatItem>
    </SectionWrapper>


      </Box>
      
      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: '#ff8c00', color: '#fff', padding: '1rem 2rem', fontSize: '1.2rem' }}
          endIcon={<ArrowForwardIcon />}
        >
          Join FitFlex Now
        </Button>
      </Box>
    </Container>
  );
};

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  text-align: center;
    @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  color :#ff8c00;
  margin-bottom: 0.3rem;

`;

export default About;
