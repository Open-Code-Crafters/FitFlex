import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

// Styled components for the contact form
const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '600px',
  margin: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
  },
}));

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: '#ff6f61',
    },
    secondary: {
      main: '#ff3d00',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

// Background container styled
const BackgroundContainer = styled(Box)(() => ({
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(135deg, #1F1C2C 10%, #232526 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
}));

// Gradient text field styled with CheckIcon
const GradientTextField = styled(TextField)(({ theme, error, showError, showIcon }) => ({
  input: { color: 'white' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '2px',
      borderImageSlice: 1,
      borderImageSource: error
        ? 'linear-gradient(90deg, #ff3d00 0%, #ff6f61 100%)'
        : 'linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)',
    },
    '&:hover fieldset': {
      borderWidth: '2px',
      borderImageSlice: 1,
      borderImageSource: error
        ? 'linear-gradient(90deg, #ff3d00 0%, #ff6f61 100%)'
        : 'linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '2px',
      borderImageSlice: 1,
      borderImageSource: error
        ? 'linear-gradient(90deg, #ff3d00 0%, #ff6f61 100%)'
        : 'linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)',
    },
  },
  '& .MuiFormLabel-root': {
    color: showError ? '#ded8ce' : 'white',
  },
  '& .MuiInputAdornment-root': {
    display: showIcon ? 'block' : 'none',
    color: 'green',
  },
}));

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showNameIcon, setShowNameIcon] = useState(false);
  const [showEmailIcon, setShowEmailIcon] = useState(false);
  const [showMessageIcon, setShowMessageIcon] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state based on the input name
    if (name === 'name') {
      setName(value);
      const isValid = validateName(value);
      setShowNameIcon(isValid);
    } else if (name === 'email') {
      setEmail(value);
      const isValid = validateEmail(value);
      setShowEmailIcon(isValid);
    } else if (name === 'message') {
      setMessage(value);
      const isValid = validateMessage(value);
      setShowMessageIcon(isValid);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setShowError(true);
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_nlds6fh',
      'template_iyudm0r',
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      'CPgZoAFYXY-JYOWyg'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setOpen(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setShowError(false);
    setShowNameIcon(false);
    setShowEmailIcon(false);
    setShowMessageIcon(false);
  };

  const validateName = (name) => {
    if (name.length > 3) {
      setNameError(false);
      return true;
    } else {
      setNameError(true);
      return false;
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (re.test(String(email).toLowerCase())) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };

  const validateMessage = (message) => {
    if (message.split(' ').length > 10) {
      setMessageError(false);
      return true;
    } else {
      setMessageError(true);
      return false;
    }
  };

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
  setShowError(false); // Reset showError state when closing the error alert
};


  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <Container>
          <Box sx={{ py: 5 }}>
            <ContactForm>
              <Typography variant="h4" align="center" color='white' gutterBottom>
                Contact Us
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    error={nameError}
                    showError={showError}
                    showIcon={showNameIcon} // Pass showIcon prop
                    InputProps={{
                      endAdornment: showNameIcon ? <CheckIcon /> : null, // Conditionally render CheckIcon
                    }}
                    helperText={nameError ? 'Enter full name (more than 3 characters)' : ''}
                  />
                </Box>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    error={emailError}
                    showError={showError}
                    showIcon={showEmailIcon} // Pass showIcon prop
                    InputProps={{
                      endAdornment: showEmailIcon ? <CheckIcon /> : null, // Conditionally render CheckIcon
                    }}
                    helperText={emailError ? 'Please enter a valid email address.' : ''}
                  />
                </Box>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    error={messageError}
                    showError={showError}
                    showIcon={showMessageIcon} // Pass showIcon prop
                    InputProps={{
                      endAdornment: showMessageIcon ? <CheckIcon /> : null, // Conditionally render CheckIcon
                    }}
                    helperText={messageError ? 'Message should be more than 10 words.' : ''}
                  />
                </Box>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                      background: nameError || emailError || messageError ? 'radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%)' : 'linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)',
                      color: nameError || emailError || messageError ? 'black' : 'white',
                      '&:hover': {
                        background: nameError || emailError || messageError ? 'red' : 'linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </ContactForm>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Message sent successfully!
              </Alert>
            </Snackbar>
            <Snackbar open={showError} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Please fix the errors in the form.
              </Alert>
            </Snackbar>
          </Box>
        </Container>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Contact;
