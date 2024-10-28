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
import forearms from "../assets/exercise/arms/forearms.jpeg";
import { useState, useEffect } from "react";
import abs from "../assets/exercise/upper body/abs.jpeg";
import chest from "../assets/exercise/upper body/chest.jpeg";
import lats from "../assets/exercise/upper body/lats.jpeg";
import lowerback from "../assets/exercise/upper body/lowerback.jpeg";
import neck from "../assets/exercise/upper body/neck.jpeg";
import obliques from "../assets/exercise/upper body/obliques.jpeg";
import shoulders from "../assets/exercise/upper body/shoulders.jpeg";
import traps from "../assets/exercise/upper body/traps.jpeg";
import upperback from "../assets/exercise/upper body/upperback.jpeg";
import biceps from "../assets/exercise/arms/biceps.jpeg";
import palmarfacsia from "../assets/exercise/arms/palmarfacsia.jpeg";
import triceps from "../assets/exercise/arms/triceps.jpeg";
import abductors from "../assets/exercise/lower body/abductors.jpeg";
import adductors from "../assets/exercise/lower body/adductors.jpeg";
import calves from "../assets/exercise/lower body/calves.jpeg";
import glutes from "../assets/exercise/lower body/glutes.jpeg";
import hamstrings from "../assets/exercise/lower body/hamstrings.jpeg";
import hipflexors from "../assets/exercise/lower body/hipflexors.jpeg";
import itband from "../assets/exercise/lower body/itband.jpeg";
import plantarfascia from "../assets/exercise/lower body/plantarfascia.jpeg";
import quads from "../assets/exercise/lower body/quads.jpeg";

const imageMap = {
  forearms,
  abs,
  chest,
  lats,
  lowerback,
  neck,
  obliques,
  shoulders,
  traps,
  upperback,
  biceps,
  palmarfacsia,
  triceps,
  abductors,
  adductors,
  calves,
  glutes,
  hamstrings,
  hipflexors,
  itband,
  plantarfascia,
  quads,  
};

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
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px;",
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
      <CardMedia component="img" height="160" image={info.image.startsWith("https")?info.image:imageMap[info.image]} alt={info.image} />
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
