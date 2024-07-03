// this component is temperary and will be replaced with the actual workout and exercise components

import { Grid, Typography, Box } from "@mui/material";
import { useState } from "react";
import PlansCard from "../components/PlansCard";

const Plans = () => {
  const [isLogged, setLogged] = useState(true);
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "Rs 9.99",
      features: ["Access to basic workouts", "Limited support"],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "Rs 19.99",
      features: ["Access to premium workouts", "24/7 support"],
    },
    {
      id: 3,
      name: "Pro Plan",
      price: "Rs 29.99",
      features: ["Access to all workouts", "Personal trainer support"],
    },
    {
      id: 3,
      name: "Pro Plan",
      price: "Rs 29.99",
      features: ["Access to all workouts", "Personal trainer support"],
    },
    {
      id: 4,
      name: "Pro Plan",
      price: "Rs 29.99",
      features: ["Access to all workouts", "Personal trainer support"],
    },
    {
      id: 5,
      name: "Pro Plan",
      price: "Rs 29.99",
      features: ["Access to all workouts", "Personal trainer support"],
    },
  ];

  return (
    <Box
      sx={{
        marginRight: { sm: "5%", md: "15%" },
        marginLeft: { sm: "5%", md: "15%" },
        marginTop: "2%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: "gray",
            fontWeight: "thin",
          }}
        >
          Welcome to,
        </Typography>
        <Typography
          variant="h2"
          color="black"
          sx={{
            fontWeight: "bold",
          }}
        >
          FlexPlans
        </Typography>
      </Box>

      {isLogged && (
        <div>
          <Typography sx={{ marginTop: "2%", color: "#858585" }}>
            Your current plans,
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              // marginTop: "2%",
              width: { sm: "90vw", md: "70vw" },
              overflowX: "scroll",
              gap: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                cursor: "",
                paddingY: "10px",
                margin: "8px 0px 8px 0px",
              }}
            >
              {plans.map((obj, index) => {
                // console.log(obj)
                return <PlansCard key={index} />;
              })}
            </div>
            {/* <p style={{textWrap:'nowrap'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores sequi adipisci aliquam obcaecati deleniti ipsam, modi iusto necessitatibus tempora rerum optio, blanditiis ducimus. Necessitatibus aliquam quasi sint, sequi vero voluptatum.</p> */}
          </Box>
        </div>
      )}





      {/* yoga specials */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          marginTop: "2%",
          color: "#858585",
          fontWeight: "bold",
        }}
      >
        Yoga Sepcial
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: { sm: "90vw", md: "70vw" },
          overflowX: "scroll",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "",
            paddingY: "10px",
            margin: "8px 0px 8px 0px",
          }}
        >
          {plans.map((obj, index) => {
            return <PlansCard key={index} />;
          })}
        </div>
      </Box>

      {/* muscle builder */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          marginTop: "2%",
          color: "#858585",
          fontWeight: "bold",
        }}
      >
        Muscle Builders
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: { sm: "90vw", md: "70vw" },
          overflowX: "scroll",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "",
            paddingY: "10px",
            margin: "8px 0px 8px 0px",
          }}
        >
          {plans.map((obj, index) => {
            return <PlansCard key={index} />;
          })}
        </div>
      </Box>


      {/* fat burner */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          marginTop: "2%",
          color: "#858585",
          fontWeight: "bold",
        }}
      >
        Fat Burners
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: { sm: "90vw", md: "70vw" },
          overflowX: "scroll",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "",
            paddingY: "10px",
            margin: "8px 0px 8px 0px",
          }}
        >
          {plans.map((obj, index) => {
            return <PlansCard key={index} />;
          })}
        </div>
      </Box>


      {/* cardio export */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          marginTop: "2%",
          color: "#858585",
          fontWeight: "bold",
        }}
      >
        Cardio Expert
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: { sm: "90vw", md: "70vw" },
          overflowX: "scroll",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "",
            paddingY: "10px",
            margin: "8px 0px 8px 0px",
          }}
        >
          {plans.map((obj, index) => {
            return <PlansCard key={index} />;
          })}
        </div>
      </Box>



      {/* something new */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          marginTop: "2%",
          color: "#858585",
          fontWeight: "bold",
        }}
      >
        Something New
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: { sm: "90vw", md: "70vw" },
          overflowX: "scroll",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            cursor: "",
            paddingY: "10px",
            margin: "8px 0px 8px 0px",
          }}
        >
          {plans.map((obj, index) => {
            return <PlansCard key={index} />;
          })}
        </div>
      </Box>
    </Box>
  );
};

export default Plans;
