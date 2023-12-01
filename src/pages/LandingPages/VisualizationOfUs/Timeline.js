import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Presentation page components

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bgimage.jpg";
import { useEffect, useState } from "react";

import HeartAnimation from "pages/Presentation/animation";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MKButton from "components/MKButton";
import Slide from "@mui/material/Slide";
import Modal from "@mui/material/Modal";

const Data = [
  {
    date: "2023-04-16",
    description: "Charlotte and Andie met for the first time.",
    title: "First Meeting",
    story: "",
  },
  {
    date: "2023-04-28",
    description: "Charlotte and Andie's first time alone together.",
    title: "First date",
  },
  {
    date: "2023-08-18",
    description: "Charlotte, Andie and Jae had a group workout.",
    title: "Group Workout",
  },
  {
    date: "2023-09-23",
    description: "First time seeing each other in a while",
    title: "Feelings Start",
  },
  {
    date: "2023-10-06",
    description: "Charlotte's Birthday Party",
    title: "Charlotte's 21st Birthday Party",
  },
  {
    date: "2023-10-09",
    description: "Charlotte's Birthday",
    title: "Charlotte's 21st Birthday",
  },
  {
    date: "2023-11-21",
    description: "Charlotte and Andie started dating officially",
    title: "Dating Start!",
  },
  {
    date: "2023-10-18",
    description: "마리 began to live at Andie's house",
    title: "마리 joined the family",
  },
  {
    date: "2023-10-29",
    description: "Charlotte's first visit to see 마리",
    title: "Charlotte met 마리",
  },
  {
    date: "2023-11-26",
    description: "Andie's Birthday Party",
    title: "Andie's 21st Birthday Party",
  },
];

// Custom hook to get window size
const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

function OurTimeline() {
  const [imageHeight, setImageHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { width, height } = useWindowSize();

  const modalStyle = {
    width: width > 600 ? "80%" : "90%",
    height: height > 600 ? "70vh" : "80vh",
    backgroundColor: "#fff",
    border: "2px solid #fff4e4",
    borderRadius: "10px",
    position: "relative",
    outline: "none",
  };

  const handleButtonClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight={`${imageHeight}px`}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex", // Changed to flex for more control
          flexDirection: "column", // Stack children vertically
          justifyContent: "flex-start", // Align children to the start of the container
        }}
      >
        <HeartAnimation />
        <MKBox
          marginTop={20}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          sx={{
            width: "100%",
            height: "10%",
          }}
        >
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 10,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff4e4,  
      1px -1px 0 #fff4e4,
      -1px 1px 0 #fff4e4,
      1px 1px 0 #fff4e4
    `,
            }}
          >
            Our Timeline
          </MKTypography>
        </MKBox>
        <MKBox display="flex" justifyContent="center" alignItems="center" marginBottom={5}>
          <Card
            sx={{
              width: { xs: "100%", sm: "50%", md: "33.333%", lg: "25%" }, // or fixed width in pixels
              py: 1,
              mx: { xs: 3, lg: 0 },
              backgroundColor: "#d3b8c3",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid #fff4e4",
            }}
          >
            <Timeline position="alternate">
              {Data.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="beige" />
                    {index < Data.length - 1 && <TimelineConnector sx={{ bgcolor: "#fff4e4" }} />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <MKBox
                      display="flex"
                      flexDirection="column"
                      alignItems={index % 2 === 0 ? "flex-start" : "flex-end"}
                    >
                      <MKButton
                        variant="contained"
                        color="beige"
                        onClick={() => handleButtonClick(item)}
                        sx={{ color: "#d3b8c3", width: "100%", padding: "6px 16px" }}
                      >
                        {item.date}
                      </MKButton>
                      <MKTypography
                        variant="body2"
                        color="beige"
                        py={0.5}
                        sx={{
                          textAlign: index % 2 === 0 ? "left" : "right",
                          marginLeft: index % 2 === 0 ? 0.5 : 0,
                          marginRight: index % 2 === 0 ? 0 : 0.5,
                        }}
                      >
                        {item.title}
                      </MKTypography>
                      <MKTypography
                        variant="caption"
                        color="beige"
                        sx={{
                          textAlign: index % 2 === 0 ? "left" : "right",
                          marginLeft: index % 2 === 0 ? 0.5 : 0,
                          marginRight: index % 2 === 0 ? 0 : 0.5,
                        }}
                      >
                        {item.description}
                      </MKTypography>
                    </MKBox>
                  </TimelineContent>
                </TimelineItem>
              ))}
              <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                sx={{ display: "grid", placeItems: "center" }}
              >
                <Slide direction="down" in={isModalOpen}>
                  <MKBox
                    alignItems="center"
                    justifyContent="center"
                    sx={modalStyle}
                    style={{ marginRight: "1rem", marginLeft: "1rem" }}
                  >
                    {selectedItem && (
                      <>
                        <MKTypography variant="h4" color="primary.main">
                          {selectedItem.title}
                        </MKTypography>
                        <MKTypography variant="body1">{selectedItem.description}</MKTypography>
                        {/* Add more details as needed */}
                      </>
                    )}
                  </MKBox>
                </Slide>
              </Modal>
            </Timeline>
          </Card>
        </MKBox>
      </MKBox>
    </>
  );
}

export default OurTimeline;
