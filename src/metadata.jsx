import { Helmet } from "react-helmet";

const Metadata = () => (
  <Helmet>
    <title>FitFlex - Your Fitness Journey</title>
    <meta
      name="description"
      content="FitFlex is a fitness and weight loss website offering daily, structured workout plans for a set period. Users can follow day-wise exercises tailored to their goals."
    />
    <meta name="keywords" content="fitness, weight loss, workout plans, health, exercise" />
    <meta name="author" content="Your Name" />


    <meta property="og:title" content="FitFlex - Your Fitness Journey" />
    <meta
      property="og:description"
      content="Join FitFlex to access daily workout plans that cater to your fitness goals."
    />
    <meta property="og:image" content="https://befiteveryday.netlify.app/og-image.jpg" />
    <meta property="og:url" content="https://befiteveryday.netlify.app" />
    <meta property="og:type" content="website" />


    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="FitFlex - Your Fitness Journey" />
    <meta
      name="twitter:description"
      content="Access structured workout plans for weight loss and fitness with FitFlex."
    />
    <meta name="twitter:image" content="https://befiteveryday.netlify.app/og-image.jpg" />


    <meta name="robots" content="index, follow" />

    <link rel="canonical" href="https://befiteveryday.netlify.app" />
  </Helmet>
);

export default Metadata;
