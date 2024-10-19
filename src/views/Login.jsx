import PropTypes from 'prop-types';
import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import styled, { ThemeProvider } from 'styled-components';
import chatBotAvatar from '/robot.png'; // Assuming the correct path to your avatar image

// Styled component to adjust chatbot layout on small screens
const ChatBotContainer = styled.div`
  @media screen and (max-width: 568px) {
    .rsc-container {
      border-radius: 0;
      bottom: 0 !important;
      height: 80% !important;
      width: 100% !important;
      top: 175px !important;
    }
  }
`;

// Reducer function to manage user state effectively
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FROM_STORAGE':
      const storedUsername = localStorage.getItem('username');
      return storedUsername ? { ...state, username: storedUsername, isNewUser: false } : state;
    case 'RESET_BMI':
      localStorage.removeItem('bmi');
      return { ...state, bmi: null };
    default:
      return state;
  }
};

// Component for handling the chatbot functionality
const FitFlexChatBot = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(userReducer, {
    username: null,
    isNewUser: !localStorage.getItem('username'),
  });
  const { isNewUser } = state;
  const arr = [];

  // Load username from localStorage on component mount
  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, []);

  // Utility function to calculate BMI
  const calculateBMI = (height, weight) => {
    const heightInMeters = parseFloat(height) / 100;
    const bmi = (parseFloat(weight) / (heightInMeters ** 2)).toFixed(2);
    if (heightInMeters > 0 && weight > 0) {
      localStorage.setItem('bmi', bmi);
      return bmi;
    }
    return "Invalid height or weight";
  };

  // Steps definition for the chatbot
  const steps = [
    {
      id: '0',
      message: 'Hello! How can I assist you today?',
      trigger: isNewUser ? 'showOptions' : 'showOptions',
    },
    {
      id: 'showOptions',
      options: [
        { value: 'workout plans', label: 'Workout Plans', trigger: 'workoutPlans' },
        { value: 'nutrition advice', label: 'Nutrition Advice', trigger: 'nutritionAdvice' },
        { value: 'customer support', label: 'Customer Support', trigger: 'customerSupport' },
        { value: 'calculate bmi', label: 'Calculate BMI', trigger: () => localStorage.getItem('bmi') ? 'showBMI' : 'askHeight' },
        { value: 'other', label: 'Other', trigger: 'otherQuery' },
      ],
    },
    {
      id: 'workoutPlans',
      message: "Great! We offer personalized workout plans. Would you like to know more?",
      trigger: 'yesOrNo',
    },
    {
      id: 'nutritionAdvice',
      message: "Nutrition is key to fitness. Do you have any specific dietary goals?",
      trigger: 'getDietaryGoals',
    },
    {
      id: 'customerSupport',
      message: "For customer support, please briefly describe your issue.",
      trigger: 'getSupportIssue',
    },
    {
      id: 'askHeight',
      message: "Let's calculate your BMI! Please enter your height in cm.",
      trigger: 'getHeight',
    },
    {
      id: 'getHeight',
      user: true,
      validator: value => !isNaN(value) && value > 0,  // Validate height input
      trigger: ({ previousValue }) => {
        arr[0] = previousValue;
        return 'askWeight';
      },
    },
    {
      id: 'askWeight',
      message: "Now, please enter your weight in kg.",
      trigger: 'getWeight',
    },
    {
      id: 'getWeight',
      user: true,
      validator: value => !isNaN(value) && value > 0,  // Validate weight input
      trigger: ({ previousValue }) => {
        arr[1] = previousValue;
        return 'showBMI';
      },
    },
    {
      id: 'showBMI',
      message: () => {
        const bmi = calculateBMI(arr[0], arr[1]);
        return `Your BMI is ${bmi}`;
      },
      trigger: 'askRecalculateBMI',
    },
    {
      id: 'askRecalculateBMI',
      message: "Would you like to recalculate your BMI?",
      trigger: 'recalculateOptions',
    },
    {
      id: 'recalculateOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'resetBMI' },
        { value: 'no', label: 'No', trigger: 'showOptions' },
      ],
    },
    {
      id: 'resetBMI',
      message: "Let's start again!",
      trigger: () => {
        dispatch({ type: 'RESET_BMI' });
        return 'askHeight';
      },
    },
    {
      id: 'yesOrNo',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'goToServices' },
        { value: 'no', label: 'No', trigger: 'showOptions' },
      ],
    },
    {
      id: 'getDietaryGoals',
      user: true,
      trigger: 'showOptions',
    },
    {
      id: 'getSupportIssue',
      user: true,
      trigger: 'showOptions',
    },
    {
      id: 'otherQuery',
      user: true,
      trigger: 'showOptions',
    },
    {
      id: 'goToServices',
      message: "Fantastic! Let's get started by visiting the services page!",
      end: true,
    },
  ];

  // Define chatbot theme with a modern yellow and grey look
  const theme = {
    background: '#f7f7f7',
    headerBgColor: '#FFD700',  // Yellow
    headerFontSize: '20px',
    botBubbleColor: '#FFD700',  // Yellow
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#808080',  // Grey
    userFontColor: 'white',
  };

  const config = {
    botAvatar: chatBotAvatar,
    floating: true,
  };

  return (
    <ChatBotContainer>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="FitFlex Customer Support"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </ChatBotContainer>
  );
};

// Type checking with PropTypes
FitFlexChatBot.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
        })
      ),
    })
  ),
};

export default FitFlexChatBot;
