import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

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

const DateTracker = ({ startDate }) => {
  // State to hold the elapsed time
  const [elapsedTime, setElapsedTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  useEffect(() => {
    // Function to update the elapsed time
    const updateTime = () => {
      const now = new Date();
      const start = new Date(startDate);
      const difference = now - start;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setElapsedTime({ days, hours, minutes, seconds });
    };

    // Update the elapsed time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <MKBox
      display="flex"
      flexDirection="column" // Stack children vertically
      alignItems="center" // Center children horizontally
      justifyContent="center" // Center children vertically
      pb={2}
      sx={{ borderBottom: "2px solid #fff4e4", width: "80%" }}
    >
      <MKBox marginBottom={2}>
        <MKTypography variant="body2" color="beige" pt={1}>
          Time since we first started dating
        </MKTypography>
      </MKBox>
      <MKBox
        display="flex"
        justifyContent="center"
        pt={3}
        sx={{ borderTop: "2px solid #fff4e4", width: "100%" }}
      >
        <TimeBox value={elapsedTime.days} label="Days" noLeft />
        <TimeBox value={elapsedTime.hours} label="Hours" noLeft />
        <TimeBox value={elapsedTime.minutes} label="Mins" noLeft />
        <TimeBox value={elapsedTime.seconds} label="Secs" noLeft hasMargin />
      </MKBox>
    </MKBox>
  );
};

TimeBox.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

DateTracker.propTypes = {
  startDate: PropTypes.string.isRequired,
};

export default DateTracker;

// Usage example:
// <DateTracker startDate="2023-01-01T00:00:00" />
