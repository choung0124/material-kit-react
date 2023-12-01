import React, { useEffect, useState } from "react";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";

const TimeBox = ({ value, label, hasMargin, noLeft }) => (
  <MKBox
    display="inline-flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    marginRight={hasMargin ? 0 : 0}
  >
    <MKBox
      sx={{
        borderLeft: noLeft ? "none" : "2px solid #fff4e4",
        borderRight: hasMargin ? "none" : "2px solid #fff4e4",
        minWidth: "20px", // Set a fixed width
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2.5,
      }}
    >
      <MKTypography variant="h3" color="beige" sx={{ textAlign: "center" }}>
        {String(value).padStart(2, "0")} {/* Pad single digits with a leading zero */}
      </MKTypography>
    </MKBox>
    <MKBox>
      <MKTypography variant="body2" color="beige">
        {label}
      </MKTypography>
    </MKBox>
  </MKBox>
);

TimeBox.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  hasMargin: PropTypes.bool,
  noLeft: PropTypes.bool,
};

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <MKBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pb={2}
      sx={{ borderBottom: "2px solid #fff4e4", width: "80%" }}
    >
      <MKBox marginBottom={2}>{/* Title for the current time display */}</MKBox>
      <MKBox
        display="flex"
        justifyContent="center"
        pt={3}
        sx={{ borderTop: "2px solid #fff4e4", width: "100%" }}
      >
        {/* Using TimeBox for each time unit */}
        <TimeBox value={currentTime.getHours()} label="Hours" noLeft />
        <TimeBox value={currentTime.getMinutes()} label="Minutes" />
        <TimeBox value={currentTime.getSeconds()} label="Seconds" hasMargin />
      </MKBox>
    </MKBox>
  );
};

export default CurrentTime;
