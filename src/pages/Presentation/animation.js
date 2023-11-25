import React from "react";
import "./animation.css"; // Importing the CSS file
import flower1 from "assets/images/flowers/flower1.png";
import flower2 from "assets/images/flowers/flower2.png";
import flower3 from "assets/images/flowers/flower3.png";
import flower4 from "assets/images/flowers/flower4.png";
import flower5 from "assets/images/flowers/flower5.png";
import flower6 from "assets/images/flowers/flower6.png";
import flower7 from "assets/images/flowers/flower7.png";
import flower8 from "assets/images/flowers/flower8.png";
import flower9 from "assets/images/flowers/flower9.png";
import flower10 from "assets/images/flowers/flower10.png";

const HeartAnimation = React.memo(function HeartAnimation() {
  const heartCount = 20; // Number of hearts to animate
  const hearts = [];
  const segmentCount = 5; // Divide the width into 5 segments
  const heartImages = [
    flower1,
    flower2,
    flower3,
    flower4,
    flower5,
    flower6,
    flower7,
    flower8,
    flower9,
    flower10,
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
});
export default HeartAnimation;
