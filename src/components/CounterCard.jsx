import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CounterCard({ val, icon, text }) {
  return (
    <div
      className="data-container"
      id="a0"
      style={{
        fontFamily: "Poppins, sans-serif",
        width: "28vmin",
        height: "28vmin",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "1em 0",
        position: "relative",
        fontSize: "16px",
        borderRadius: "0.5em",
        backgroundColor: "#21242b",
        borderBottom: "10px solid #FF4F04",
        transition: "transform 0.5s ease, box-shadow 0.7s ease",
      }}
    >
      <i className="fas fa-male"></i>
      <FontAwesomeIcon
        style={{
          paddingTop: "20px",
          color: "#FF4F04",
          fontSize: "2.5em",
          textAlign: "center",
        }}  
        icon={icon}
      />
      <span
        style={{
          color: "#ffffff",
          display: "grid",
          placeItems: "center",
          fontWeight: "600",
          fontSize: "3em",
          marginBottom: "70px",
        }}
        className="num"
        data-val="20"
        id="hero"
      >
        {val}
      </span>
      <span
        style={{
          color: "#e0e0e0",
          fontSize: "1em",
          textAlign: " center",
          padding: " 0.7em 0",
          fontWeight: "400",
          lineHeight: "0",
        }}
        className="text"
      >
        {text}
      </span>
    </div>
  );
}

export default CounterCard;
