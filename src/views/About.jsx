// this component is temperary and will be replaced with the actual workout and exercise components





import { Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h1" component="h1" align="center" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Welcome to our fitness website! We are dedicated to helping you achieve your fitness goals and live a healthy lifestyle.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Our team of experienced trainers and nutritionists are here to provide you with personalized workout plans, diet tips, and motivation.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Whether you're a beginner or an advanced fitness enthusiast, we have something for everyone. Join us today and start your fitness journey!
            </Typography>
        </Container>
    );
};

export default About;