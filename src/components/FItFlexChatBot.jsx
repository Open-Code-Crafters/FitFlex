import { useNavigate } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const FItFlexChatBot = () => {
    const arr = [];
    const navigate = useNavigate();
    const handleEnd = () => {
        navigate('/services');
    };

    const calculateBMI = () => {
        console.log("H:", arr[0]);
        console.log("W:", arr[1]);

        const heightInMeters = parseFloat(arr[0]) / 100;
        if (heightInMeters > 0) {
            return (parseFloat(arr[1]) / (heightInMeters * heightInMeters)).toFixed(2);
        }
        return "Invalid height";
    };

    const steps = [
        {
            id: '0',
            message: 'Hello from FitFlex! Ready to achieve your fitness goals?',
            trigger: '1',
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
            message: "Hi {previousValue}, how can I assist you today?",
            trigger: '4',
        },
        {
            id: '4',
            options: [
                { value: 'workout plans', label: 'Workout Plans', trigger: '5' },
                { value: 'nutrition advice', label: 'Nutrition Advice', trigger: '6' },
                { value: 'customer support', label: 'Customer Support', trigger: '7' },
                { value: 'calculate bmi', label: 'Calculate BMI', trigger: 'bmiInput' },
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
                arr.push(previousValue);
                const bmi = calculateBMI();
                return `Your BMI is ${ bmi }`;
            },
            trigger: 'endChat',
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
        botAvatar: "src/assets/img/robot.png",
        floating: true,
    };

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="FitFlex Customer Support"
                    steps={steps}
                    {...config}
                    endChat={handleEnd}
                />
            </ThemeProvider>
        </div>
    );
};

export default FItFlexChatBot;