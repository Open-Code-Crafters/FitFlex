import {
  Grid,
  Typography,
  Box,
  CardActions,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import img from "../assets/home/biceps.webp";
import requirejs from "requirejs";
import forearms from "../assets/exercise/arms/forearms.jpeg";
import { useState, useEffect } from "react";

requirejs.config({
  nodeRequire: require,
});

function PlansCard({info}) {
  const [difficultyColor, setColor] = useState("green");
  
  if(!info){
    info={
      name:"Biceps Special",
      title:"Super Biceps Special",
      period:30,
      image: forearms,
      location:"Home",
      level:"Easy",
      
    }
  }

  const image = requirejs(`${info.image}`);
  
  useEffect(() => {
    
    if (info.level === "Easy") {
      setColor("green");
    } else if (info.level === "Medium") {
      setColor("orange");
    } else {
      setColor("red");
    }
  },[info.level])
  
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "280px",
        height: "18rem",
        margin: "20px 8px",
        borderRadius: "17px",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        transition: "0.4s",
        cursor: "pointer",
        position: "relative",
      }}
      component={motion.div}
      whileHover={{
        // scale: 1.01,
        translateY: -3,
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        transition: { duration: 0.2 },
      }}
    >
      <CardMedia component="img" height="160" image={image} alt="Chevrolet" />
      <CardContent >
        <div
          style={{
            position: "absolute",
            top: "40%",
            zIndex: 1,
            // padding: "1px",
            backgroundColor: "rgba(0, 0, 0, 0.25)", 
            width: "103%",
            backdropFilter: "blur(2px)",
            display: "inline",
            margin: 0,
            left: "-8px",
            // borderTopLeftRadius: "10px",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontFamily: "sans-serif",
            //   margin: "0px",
              marginBottom:"-5px",
              paddingRight: "10px",
              paddingLeft: "20px",
              lineSpacing: "0px",
              color : "#fff",
            }}
          >
            <strong>{info.name}</strong>
          </Typography>
          <Typography variant="h9" sx={{color : "#fff", paddingLeft: "10px",fontFamily: "sans-serif",margin:"0px" }}>
            {info.title}
          </Typography>
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            
            // alignItems: "start",
            paddingTop: "0px",
            width: "100%",
          }}
        >
          <CardActions sx={{ display: "flex", justifyContent: "space-between"}}>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"center"}}>
                <Typography variant="h4" sx={{marginBottom:"-10px", lineSpacing:"-3px"}}>{info.period}</Typography>
                <Typography variant="h6" sx={{marginBottom:"-10px", lineSpacing:"0px"}}>Days</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"end", justifyContent:"center"}}>
                <Typography variant="h4" sx={{marginBottom:"-10px", lineSpacing:"-3px", color:difficultyColor}}>{info.level}</Typography>
                <Typography variant="h6" sx={{marginBottom:"-10px", lineSpacing:"0px"}}>Level</Typography>
            </Box>
          </CardActions>
          <Typography
            variant="h9"
            component="div"
            sx={{ fontFamily: "sans-serif", fontWeight:"600", fontSize :"14px", marginTop: "5px"}}
          >
            20% completed
          </Typography>
          <div style={{ padding: "1px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                backgroundColor: "gray",
                height: "8px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "20%",
                background: "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
                height: "8px",
                borderRadius: "5px",
              }}
            ></div>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlansCard;
