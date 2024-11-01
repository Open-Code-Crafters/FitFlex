import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Snackbar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { faqData } from '../data/FAQ';
import emailjs from 'emailjs-com'; // Import EmailJS
import { CheckCircle } from '@mui/icons-material'; // Import CheckCircle icon

// Custom theme for styling
const theme = createTheme({
  typography: {
    h4: {
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: '20px',
    },
    h6: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#424242',
          color: '#fff',
          marginBottom: '10px',
          borderRadius: '8px',
        },
      },
    },
  },
});

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarOpen(true);
      return;
    }

    const templateParams = {
      email, // This will be passed to the email template
    };

    emailjs.send('your_service_id', 'your_email_template_id', templateParams, 'your_user_id')
      .then(() => {
        setSnackbarMessage('Confirmation email sent!');
        setSnackbarOpen(true);
        setEmail(''); // Clear the input after successful submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSnackbarMessage('Error sending email, please try again later.');
        setSnackbarOpen(true);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: '#2B2B2B',
          padding: '40px 0',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4">Frequently Asked Questions</Typography>

          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          {/* Stay Updated Component */}
          <Box
            sx={{
              marginTop: '20px',
              padding: '16px', // Reduced padding
              backgroundColor: '#4A4A4A',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: '10px', color: '#fff' }}>
              <CheckCircle fontSize="small" sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Stay Updated!
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Your email"
                value={email}
                onChange={handleEmailChange}
                sx={{
                  marginBottom: '10px',
                  background: '#fff',
                  borderRadius: '4px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1976d2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2',
                    },
                  },
                }}
                fullWidth
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  width: '100%',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                    boxShadow: '0px 4px 20px rgba(0, 123, 255, 0.3)', // Added hover shadow
                  },
                }}
              >
                Subscribe
              </Button>
            </form>

            {/* Snackbar for notifications */}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              message={snackbarMessage}
              sx={{ bottom: '80px' }} // Positioning snackbar above the component
            />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FAQSection;
