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
function PlansCard() {
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
      <CardMedia component="img" height="170" image={img} alt="Chevrolet" />
      <CardContent>
        <div
          style={{
            position: "absolute",
            top: "40%",
            zIndex: 1,
            padding: "1px",
            backdropFilter: "blur(2px)",
            display: "inline",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontFamily: "sans-serif",
            //   margin: "0px",
              marginBottom:"-5px",
              lineSpacing: "0px",
            }}
          >
            <strong>Biceps special</strong>
          </Typography>
          <Typography variant="h9" sx={{ fontFamily: "sans-serif",margin:"0px" }}>
            30 days rock hard biceps
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
          <CardActions sx={{ display: "flex", justifyContent: "center", gap:3 }}>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <Typography variant="h4" sx={{marginBottom:"-10px", lineSpacing:"-3px"}}>30</Typography>
                <Typography variant="h6" sx={{marginBottom:"-10px", lineSpacing:"0px"}}>Days</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <Typography variant="h4" sx={{marginBottom:"-10px", lineSpacing:"-3px", color:"green"}}>Easy</Typography>
                <Typography variant="h6" sx={{marginBottom:"-10px", lineSpacing:"0px"}}>Level</Typography>
            </Box>
          </CardActions>
          <Typography
            variant="h9"
            component="div"
            sx={{ fontFamily: "sans-serif" }}
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
