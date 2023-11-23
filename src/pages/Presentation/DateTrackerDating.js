import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

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
    <MKBox>
      <MKTypography variant="body2" fontWeight="bold" gutterBottom color="white">
        {elapsedTime.days} d, {elapsedTime.hours} hr, {elapsedTime.minutes} min, and{" "}
        {elapsedTime.seconds} s ago.
      </MKTypography>
    </MKBox>
  );
};

export default DateTracker;

DateTracker.propTypes = {
  startDate: PropTypes.string.isRequired,
};

// Usage example:
// <DateTracker startDate="2023-01-01T00:00:00" />
