import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {faqData} from '../data/FAQ'
// Sample FAQ Data

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

 
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FAQSection;
