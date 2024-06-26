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
  IconButton,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '600px',
  margin: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease-in-out',
  backgroundImage: 'linear-gradient(135deg, #1F1C2C 10%, #232526 100%)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(90deg, #232526 0%, #1F1C2C 35%, #414345 100%)',
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

const BackgroundContainer = styled(Box)({
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(135deg, #1F1C2C 10%, #232526 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const GradientTextField = styled(TextField)(({ theme, error, showError }) => ({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setShowError(true);
      return;
    }


    emailjs.send(
      'service_nlds6fh', // Service ID
      'template_iyudm0r', // Template ID
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      'CPgZoAFYXY-JYOWyg' // User ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setOpen(true);
    }).catch((err) => {
      console.error('FAILED...', err);
    });

    setName('');
    setEmail('');
    setMessage('');
    setShowError(false);
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
                    color="primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                    showError={showError}
                    helperText={nameError ? 'Enter full name (more than 3 characters)' : ''}
                  />
                </Box>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    color="primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                    showError={showError}
                    helperText={emailError ? 'Please enter a valid email address.' : ''}
                  />
                </Box>
                <Box mb={2}>
                  <GradientTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    color="primary"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={messageError}
                    showError={showError}
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
          </Box>
        </Container>
      </BackgroundContainer>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Message sent successfully
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default Contact;
