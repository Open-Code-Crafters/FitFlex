import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import chatBotAvatar from '/robot.png';

const ChatBotContainer = styled.div`
  @media screen and (max-width: 568px) {
    .rsc-container {
      border-radius: 0;
      bottom: 0 !important;
      left: initial !important;
      height: 80% !important;
      right: 0 !important;
      top: 175px !important;
      width: 100% !important;
    }
  }
`;

const FItFlexChatBot = () => {
    const arr = [];
    const navigate = useNavigate();
    const [isNewUser, setIsNewUser] = useState(localStorage.getItem('username')?false:true);
    const [username, setUsername] = useState(localStorage.getItem('username'));

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            setIsNewUser(false);
        }
    }, []);

    const handleEnd = () => {
        navigate('/services');
    };

    const handleSaveUsername = (name) => {
        localStorage.setItem('username', name);
        setUsername(name);
    };

    const calculateBMI = () => {
        const heightInMeters = parseFloat(arr[0]) / 100;
        const bmi = (parseFloat(arr[arr.length - 1]) / (heightInMeters * heightInMeters)).toFixed(2);
        if (heightInMeters > 0) {
            localStorage.setItem('bmi', bmi);
            return bmi;
        }
        return "Invalid height";
    };

    const steps = [
        {
            id: '0',
            message: 'Hello from FitFlex! Ready to achieve your fitness goals?',
            trigger: isNewUser ? '1' : 'skipToOptions',
        },
        {
            id: '1',
            message: 'Please write your name',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: ({ previousValue }) => {
                handleSaveUsername(previousValue);
                return `Hi ${previousValue}, how can I assist you today?`;
            },
            trigger: '4',
        },
        {
            id: 'skipToOptions',
            message: `Welcome back, ${username}! How can I assist you today?`,
            trigger: '4',
        },
        {
            id: '4',
            options: [
                { value: 'workout plans', label: 'Workout Plans', trigger: '5' },
                { value: 'nutrition advice', label: 'Nutrition Advice', trigger: '6' },
                { value: 'customer support', label: 'Customer Support', trigger: '7' },
                { value: 'calculate bmi', label: 'Calculate BMI', trigger: () => { return localStorage.getItem('bmi') ? 'bmiResult' : 'bmiInput' }  },
                { value: 'other', label: 'Other', trigger: '8' },
            ],
        },
        {
            id: '5',
            message: "Great! We offer personalized workout plans. Would you like to know more?",
            trigger: '9',
        },
        {
            id: '6',
            message: "Nutrition is key to fitness. Do you have any specific dietary goals?",
            trigger: '10',
        },
        {
            id: '7',
            message: "For customer support, please provide your issue briefly.",
            trigger: '11',
        },
        {
            id: '8',
            message: "Please specify your query or concern, and I'll do my best to help!",
            trigger: '12',
        },
        {
            id: 'bmiInput',
            message: "Let's calculate your BMI! Please enter your height in cm.",
            trigger: 'bmiHeight',
        },
        {
            id: 'bmiHeight',
            user: true,
            trigger: 'bmiWeight',
        },
        {
            id: 'bmiWeight',
            message: ({ previousValue }) => {
                arr.push(previousValue);
                return "Now, please enter your weight in kg.";
            },
            trigger: 'bmiWeightInput',
        },
        {
            id: 'bmiWeightInput',
            user: true,
            trigger: 'bmiResult',
        },
        {
            id: 'bmiResult',
            message: ({ previousValue }) => {
                if (localStorage.getItem('bmi')){
                    return `Your BMI is ${localStorage.getItem('bmi') }`;
                }
                arr.push(previousValue);
                const bmi = calculateBMI();
                return `Your BMI is ${bmi}`;
            },
            trigger: () => {
                const bmi = localStorage.getItem('bmi')
                return (bmi>=18 ? ( bmi<=25 ? 'preEndChat' : 'overweight' ) : 'underweight');
            },
        },
        {
            id: 'underweight',
            message: "You are underweight. Please consult a nutritionist for a balanced diet.",
            trigger: 'preEndChat',
        },
        {
            id: 'overweight',
            message: "You are overweight. Checkout our workout plans for better health.",
            trigger: 'preEndChat',
        },
        {
            id: '9',
            options: [
                { value: 'yes', label: 'Yes', trigger: '13' },
                { value: 'no', label: 'No', trigger: '14' },
            ],
        },
        {
            id: '10',
            user: true,
            trigger: '15',
        },
        {
            id: '11',
            user: true,
            trigger: '16',
        },
        {
            id: '12',
            user: true,
            trigger: '17',
        },
        {
            id: '13',
            message: "Fantastic! Our plans are tailored to your fitness level. Let's get started by visiting the services page!",
            trigger: 'endChat',
        },
        {
            id: '14',
            message: "No problem! Let me know if you need anything else.",
            trigger: 'endChat',
        },
        {
            id: '15',
            message: "Awesome! You can check our nutrition section on the website for detailed guidance.",
            trigger: 'endChat',
        },
        {
            id: '16',
            message: "Thank you for sharing! Our support team will get back to you shortly.",
            trigger: 'endChat',
        },
        {
            id: '17',
            message: "Thanks for your input! Feel free to explore our website for more information.",
            trigger: 'endChat',
        },
        {
            id: 'preEndChat',
            message: "Want to recalculate BMI ?",
            trigger: 'reCalculate',
        },
        {
            id: 'reCalculate',
            options: [
                {
                    value: 'yes', label: 'Yes', trigger: ({ previousValue }) => {
                        localStorage.removeItem('bmi');
                        arr.length = 0;
                        return 'bmiInput'
                    }
                },
                { value: 'no', label: 'No', trigger: 'endChat' },
            ],
        },
        {
            id: 'endChat',
            message: "Thanks for your input! Feel free to explore our website for more information.",
            end: true,
        },
    ];

    const theme = {
        background: 'gray',
        headerBgColor: 'orange',
        headerFontSize: '20px',
        botBubbleColor: 'orange',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
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
                    endChat={handleEnd}
                />
            </ThemeProvider>
        </ChatBotContainer>
    );
};

export default FItFlexChatBot;