// this component is temperary and will be replaced with the actual workout and exercise components





import { Typography, Container, Box, Grid, Button } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useNavigate } from 'react-router-dom';

const About = ({mode,textcolor}) => {
    const navigate = useNavigate();

    const handleJoinClick = () => {
        navigate('/register');
    };

    return (
        <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '3rem' }}
                >
                    About FitFlex
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.25rem', color: textcolor }}>
                    Welcome to <b>FitFlex</b>, where we help you transform your space, transform your body, and
                    ultimately, transform your life! Our team is dedicated to providing you with the best
                    fitness experience, whether you're working out from home or in the gym.
                </Typography>
            </Box>

            {/* Our Mission Section */}
            <Box sx={{ mb: 6,  backgroundColor: mode === 'light' ? '#f7f7f7' : '#1d1d28', padding: '2rem', borderRadius: '8px' }}>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#f1c40f', fontSize: '2rem' }}
                >
                    Our Mission
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.2rem', color: textcolor }}>
                    At **FitFlex**, our mission is to provide a fitness solution that adapts to your lifestyle
                    and goals. Whether you’re a busy professional, a stay-at-home parent, or just someone
                    who wants to stay fit, we have programs designed just for you. **Transform your space,
                    transform your body**.
                </Typography>
            </Box>

            {/* What We Offer - Grid Section */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem' }}
                >
                    What We Offer
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={4} textAlign="center">
                        <FitnessCenterIcon sx={{ fontSize: '4rem', color: textcolor }} />
                        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                            Personalized Workouts
                        </Typography>
                        <Typography variant="body1" sx={{ color: textcolor }}>
                            Get customized workout plans based on your goals, fitness level, and available equipment.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign="center">
                        <EmojiEventsIcon sx={{ fontSize: '4rem', color: textcolor }} />
                        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                            Fitness Challenges
                        </Typography>
                        <Typography variant="body1" sx={{ color: textcolor }}>
                            Participate in exciting challenges to keep you motivated and pushing your limits.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign="center">
                        <LocalDiningIcon sx={{ fontSize: '4rem', color: textcolor }} />
                        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                            Nutrition Guidance
                        </Typography>
                        <Typography variant="body1" sx={{ color: textcolor }}>
                            Our experts will help you with personalized meal plans and nutrition advice for your goals.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Why Choose Us Section */}
            <Box sx={{ mb: 6, padding: '2rem',  backgroundColor: mode === 'light' ? '#f7f7f7' : '#1d1d28', borderRadius: '8px' }}>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#ff8c00', fontSize: '2rem' }}
                >
                    Why Choose FitFlex?
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.2rem', color: textcolor }}>
                    With **FitFlex**, you’re not just working out — you’re part of a community that pushes
                    you to be the best version of yourself. Our trainers, programs, and tracking tools are
                    designed to keep you motivated, on track, and seeing results.
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={4} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                            24/7 Access
                        </Typography>
                        <Typography variant="body1" sx={{ color: textcolor }}>
                            Workout at your convenience, anytime, anywhere.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                            Experienced Trainers
                        </Typography>
                        <Typography variant="body1" sx={{ color: textcolor }}>
                            Learn from the best in the industry with personalized attention.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff8c00' }}>
                            Track Your Progress
                        </Typography>
                        <Typography variant="body1" sx={{ color: textcolor }}>
                            Use our advanced tools to measure your progress and hit your targets.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Call to Action Section */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ backgroundColor: '#ff8c00', color: '#fff', padding: '1rem 2rem', fontSize: '1.2rem' }}
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleJoinClick}
                >
                    Join FitFlex Now
                </Button>
            </Box>
        </Container>
    );
};

export default About;

