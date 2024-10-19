import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import chatBotAvatar from '/robot.png';

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 1000;
  transition: all 0.3s ease;

  @media screen and (max-width: 568px) {
    width: 100%;
    height: 80%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #FF5733; /* Chatbot header color */
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ChatBubble = styled.div`
  background: ${({ isUser }) => (isUser ? '#FF5733' : '#eee')};
  color: ${({ isUser }) => (isUser ? 'white' : 'black')};
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  max-width: 70%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
`;

const ChatInput = styled.input`
  flex-grow: 3;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 1em;

  &:focus {
    outline: none;
    border-color: #FF5733;
  }
`;

const ChatButton = styled.button`
  padding: 12px 18px;
  border-radius: 5px;
  background-color: #FFC107; /* Yellow */
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #e6a600; /* Darker yellow */
  }
`;

const ChatBotIcon = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 568px) {
    bottom: 80px;
    right: 20px;
  }
`;

const FitFlexChatBot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isChatBotVisible, setChatBotVisible] = useState(false);
  const chatEndRef = useRef(null); // Reference for auto-scrolling

  useEffect(() => {
    const welcomeMessage = 'Hello from FitFlex! Ready to achieve your fitness goals?';
    setMessages([{ id: Date.now().toString(), message: welcomeMessage, isUser: false }]);
  }, []);

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (userInput.trim() === '') return;

    const userMessage = { id: Date.now().toString(), message: userInput, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Direct keyword checks for responses
    let responseMessage = "I'm not sure how to help with that.";
    const lowerInput = userInput.toLowerCase();

    // List of intents and their responses
    const intentsResponses = {
      "workout": [
        { question: "What workout should I do today?", answer: "It depends on your goals! For strength, try lifting weights; for cardio, consider running or cycling." },
        { question: "Can you suggest a leg day routine?", answer: "Sure! Try squats, lunges, and deadlifts." },
        { question: "How do I build muscle?", answer: "Focus on strength training with progressive overload and consume enough protein." },
        { question: "What are some effective cardio exercises?", answer: "Running, cycling, swimming, and HIIT are great options." },
        { question: "Help me create a balanced workout plan.", answer: "Include strength training, cardio, and flexibility exercises in your weekly routine." },
        { question: "I want to lose weight; what workouts are best?", answer: "Combine cardio with strength training for optimal fat loss." },
        { question: "How often should I work out?", answer: "Aim for at least 150 minutes of moderate exercise per week." },
      ],
      "diet": [
        { question: "What should I eat for breakfast?", answer: "Try oatmeal with fruits, eggs with veggies, or a smoothie." },
        { question: "Can you recommend a healthy snack?", answer: "Greek yogurt, nuts, or sliced veggies with hummus are great choices." },
        { question: "What's a good post-workout meal?", answer: "A protein shake with a banana or a chicken salad works well." },
        { question: "How many calories should I consume daily?", answer: "It varies; use a calorie calculator based on your age, gender, weight, and activity level." },
        { question: "What are some high-protein foods?", answer: "Chicken, fish, eggs, legumes, and dairy products are excellent sources." },
        { question: "Can you suggest a meal plan for muscle gain?", answer: "Focus on protein-rich foods with healthy carbs and fats." },
        { question: "Are carbs bad for weight loss?", answer: "No, carbs are essential; focus on the type of carbs you consume." },
      ],
      "supplement": [
        { question: "What supplements should I take for muscle gain?", answer: "Consider protein powder, creatine, and BCAAs." },
        { question: "Are protein shakes necessary?", answer: "Not necessary but helpful for meeting protein goals." },
        { question: "How do I choose the right multivitamin?", answer: "Look for a multivitamin that covers your nutritional gaps." },
        { question: "What are the benefits of creatine?", answer: "It helps improve strength and muscle mass." },
        { question: "Can you explain the use of BCAAs?", answer: "BCAAs help reduce muscle soreness and aid recovery." },
        { question: "Is pre-workout safe to take?", answer: "Generally safe, but check ingredients for high caffeine levels." },
        { question: "How do I know if I need supplements?", answer: "If your diet lacks certain nutrients, supplements may be beneficial." },
      ],
      "motivation": [
        { question: "How can I stay motivated to work out?", answer: "Set clear goals, find a workout buddy, and track your progress." },
        { question: "What should I do if I skip a workout?", answer: "Don't stress; just get back on track with your next scheduled workout." },
        { question: "How do I set fitness goals?", answer: "Use the SMART criteria: Specific, Measurable, Achievable, Relevant, and Time-bound." },
        { question: "Can you share some motivational quotes?", answer: "Sure! 'The only bad workout is the one that didn't happen.'" },
        { question: "What should I do on days when I feel lazy?", answer: "Start with a short workout; often, getting started helps boost your motivation." },
        { question: "How to overcome workout plateaus?", answer: "Change your routine, increase weights, or adjust workout frequency." },
        { question: "What if I don't see results?", answer: "Be patient, reassess your routine, and ensure you're consistent." },
      ],
      "injuries": [
        { question: "What should I do if I feel pain during exercise?", answer: "Stop the exercise and assess the pain; consider seeing a professional if it persists." },
        { question: "How can I prevent injuries while working out?", answer: "Warm up properly, use correct form, and listen to your body." },
        { question: "What are some effective recovery strategies?", answer: "Hydrate, stretch, and consider foam rolling after workouts." },
        { question: "How long should I rest after a workout?", answer: "It depends on intensity; generally, 48 hours for intense workouts is good." },
        { question: "What are the signs of overtraining?", answer: "Fatigue, decreased performance, and increased injuries are common signs." },
        { question: "Can I work out with a minor injury?", answer: "Consult a professional; sometimes modified exercises are safe." },
        { question: "How do I treat common workout injuries?", answer: "Rest, ice, compression, and elevation (RICE) are effective for minor injuries." },
      ],
      "gym": [
        { question: "What equipment should I use for strength training?", answer: "Dumbbells, barbells, and resistance bands are great options." },
        { question: "How do I properly use gym machines?", answer: "Ask a trainer for guidance on form and settings." },
        { question: "Can you explain how to do a squat correctly?", answer: "Keep your feet shoulder-width apart, chest up, and lower until thighs are parallel to the ground." },
        { question: "What are the benefits of free weights vs. machines?", answer: "Free weights improve stability and range of motion; machines can help isolate muscles." },
        { question: "How do I create a home gym?", answer: "Start with basics like dumbbells, resistance bands, and a mat." },
        { question: "What should I wear to the gym?", answer: "Comfortable, moisture-wicking clothes and proper shoes are recommended." },
        { question: "How can I make my gym workouts more effective?", answer: "Focus on form, vary your routine, and gradually increase weights." },
      ],
      "progress": [
        { question: "How can I track my fitness progress?", answer: "Keep a workout journal, use fitness apps, or take progress photos." },
        { question: "What are good fitness apps to use?", answer: "Apps like MyFitnessPal, Strava, and Fitbit can be helpful." },
        { question: "How often should I measure my body fat?", answer: "Once a month is generally sufficient." },
        { question: "What's the best way to log my workouts?", answer: "Use an app or a notebook; record exercises, sets, reps, and weights." },
        { question: "How can I stay accountable for my fitness goals?", answer: "Share your goals with friends or join a fitness community." },
        { question: "What are the benefits of keeping a fitness journal?", answer: "It helps you stay motivated and see how far you've come." },
        { question: "How do I celebrate my fitness milestones?", answer: "Treat yourself to something enjoyable, like a massage or new workout gear." },
      ],
    };

    // Search for a matching intent
    for (const [key, responses] of Object.entries(intentsResponses)) {
      const matchedResponse = responses.find((r) => lowerInput.includes(key));
      if (matchedResponse) {
        responseMessage = matchedResponse.answer; // Set response to the matching answer
        break;
      }
    }

    // Simulate typing animation and respond
    setTimeout(() => {
      const botMessage = { id: Date.now().toString(), message: responseMessage, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000); // Delay for typing animation

    setUserInput(''); // Clear input field
  };

  const toggleChatBot = () => {
    setChatBotVisible(!isChatBotVisible);
  };

  const closeChatBot = () => {
    setChatBotVisible(false);
  };

  return (
    <>
      <ChatBotIcon src={chatBotAvatar} alt="Chatbot Icon" onClick={toggleChatBot} />
      <ChatBotContainer isVisible={isChatBotVisible}>
        <ChatHeader>
          <span>FitFlex Chatbot</span>
          <CloseButton onClick={closeChatBot}>&times;</CloseButton>
        </ChatHeader>
        <ChatContent>
          {messages.map((msg) => (
            <ChatBubble key={msg.id} isUser={msg.isUser}>
              {msg.message}
            </ChatBubble>
          ))}
          <div ref={chatEndRef} /> {/* Dummy div for auto-scrolling */}
        </ChatContent>
        <ChatInputContainer>
          <ChatInput
            value={userInput}
            onChange={handleUserInput}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <ChatButton onClick={handleSubmit}>Send</ChatButton>
        </ChatInputContainer>
      </ChatBotContainer>
    </>
  );
};

export default FitFlexChatBot;
