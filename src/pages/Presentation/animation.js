import React from "react";
import "./animation.css"; // Importing the CSS file
import heart1 from "assets/images/hearts/heart_1.png";
import heart2 from "assets/images/hearts/heart_2.png";
import heart3 from "assets/images/hearts/heart_3.png";
import heart4 from "assets/images/hearts/heart_4.png";
import heart5 from "assets/images/hearts/heart_5.png";
import heart6 from "assets/images/hearts/heart_6.png";
import heart7 from "assets/images/hearts/heart_7.png";
import heart8 from "assets/images/hearts/heart_8.png";
import heart9 from "assets/images/hearts/heart_9.png";
import heart10 from "assets/images/hearts/heart_10.png";

function HeartAnimation() {
  const heartCount = 20; // Number of hearts to animate
  const hearts = [];
  const segmentCount = 5; // Divide the width into 5 segments
  const heartImages = [
    heart1,
    heart2,
    heart3,
    heart4,
    heart5,
    heart6,
    heart7,
    heart8,
    heart9,
    heart10,
  ];

  for (let i = 0; i < heartCount; i++) {
    const segmentWidth = 100 / segmentCount;
    const segmentIndex = i % segmentCount;
    const baseLeft = segmentWidth * segmentIndex;
    const randomOffset = Math.random() * segmentWidth; // Random offset within the segment

    const heartStyle = {
      "--n": Math.random() * 10, // More varied durations between 10s and 20s
      "--delay": `${Math.random() * 20}s`, // More varied start delays up to 20 seconds
      backgroundImage: `url(${heartImages[i % heartImages.length]})`,
      left: `${baseLeft + randomOffset}%`,
    };

    hearts.push(<div key={i} className="heart" style={heartStyle} />);
  }

  return <div className="heart-container">{hearts}</div>;
}
export default HeartAnimation;
