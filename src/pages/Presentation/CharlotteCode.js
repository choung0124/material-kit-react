import React from "react";

const HeartComponent = () => {
  const handleClick = () => {
    alert("I love you");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15vh", // Adjust this as needed
  };

  const heartStyle = {
    width: "100px",
    height: "100px",
    position: "relative",
  };

  const squareStyle = (top, left, transform) => ({
    position: "absolute",
    top,
    left,
    width: "50px",
    height: "50px",
    backgroundColor: "purple",
    transform,
  });

  return (
    <div style={containerStyle}>
      <div id="heart" style={heartStyle} onClick={handleClick}>
        <div style={squareStyle("30px", "50px", "rotate(45deg)")}></div>
        <div style={squareStyle("30px", "0px", "rotate(-45deg)")}></div>
        <div style={squareStyle("42px", "30px", "rotate(-180deg)")}></div>
      </div>
    </div>
  );
};

export default HeartComponent;
