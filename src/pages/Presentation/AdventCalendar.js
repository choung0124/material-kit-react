import React, { useState } from "react";
import { Grid, Modal } from "@mui/material";
import MKBox from "components/MKBox";

function AdventCalendar() {
  // Array for 1st to 24th December
  const dates = Array.from({ length: 25 }, (_, i) => i + 1);

  // State to manage the current date
  const [currentDate] = useState(new Date().getDate());

  // State to manage modal open/close
  const [openModal, setOpenModal] = useState(false);

  // Function to handle date box click
  const handleDateClick = (date) => {
    if (date <= currentDate) {
      // Open modal or show content for the date
      setOpenModal(true);
    }
  };

  // Function to close modal
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <MKBox>
      <Grid container spacing={2}>
        {dates.map((date) => (
          <Grid item xs={2} key={date}>
            <MKBox
              onClick={() => handleDateClick(date)}
              sx={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: date <= currentDate ? "#d3b8c3" : "lightgrey",
                cursor: date <= currentDate ? "pointer" : "default",
              }}
            >
              {date}
            </MKBox>
          </Grid>
        ))}
      </Grid>

      <Modal open={openModal} onClose={handleClose}>
        {/* Modal content here */}
      </Modal>
    </MKBox>
  );
}

export default AdventCalendar;
