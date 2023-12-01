// @mui material components
import Card from "@mui/material/Card";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Presentation page components

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bgimage.jpg";

// DateTracker
import MKTypography from "components/MKTypography";
import { useEffect, useState } from "react";
import HeartAnimation from "./animation";
import GraphData from "./data";
import OurVis from "./Network";
import { Modal, Slide } from "@mui/material";
import OurVisText from "./NetworkText";
import OurVisTextLandscape from "./NetworkTextLandscape";
import MKAlert from "components/MKAlert";
import HeartComponent from "./CharlotteCode";
import axios from "axios";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

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

function GraphOfUs() {
  const [imageHeight, setImageHeight] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const { width, height } = useWindowSize();
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [inputText, setInputText] = useState("");
  const [streamingResponseUrl, setStreamingResponseUrl] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [question, setQuestion] = useState("");

  const askQuestion = async (question) => {
    try {
      const response = await axios.post(
        "https://virginia-sunshine-allowance-perry.trycloudflare.com/question/",
        {
          question: question,
        }
      );
      setStreamingResponseUrl(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const getStreamingResponse = async () => {
    try {
      const response = await fetch(streamingResponseUrl);

      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let content = "";
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          content += decoder.decode(value, { stream: true });
          setAnswer(content);
        }
        setAnswer((prev) => prev + decoder.decode());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const processQuestion = async () => {
      if (question && !isGenerating) {
        setIsGenerating(true);
        await askQuestion(question);
        setIsGenerating(false);
      }
    };
    processQuestion();
  }, [question]);

  useEffect(() => {
    if (streamingResponseUrl) {
      getStreamingResponse();
    }
  }, [streamingResponseUrl]);

  const modalStyle = {
    width: width > 600 ? "80%" : "90%",
    height: height > 600 ? "70vh" : "80vh",
    backgroundColor: "#fff4e4",
    border: "2px solid #fff4e4",
    borderRadius: "10px",
    position: "relative",
    outline: "none",
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              marginRight: 2,
              marginLeft: 2,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff4e4,  
      1px -1px 0 #fff4e4,
      -1px 1px 0 #fff4e4,
      1px 1px 0 #fff4e4
    `,
            }}
          >
            We&apos;re connected in so many different ways !
          </MKTypography>
          <MKBox display="flex" justifyContent="center" alignItems="center" marginBottom={5}>
            <Card
              sx={{
                width: { xs: "100%", sm: "50%", md: "33.333%", lg: "25%" }, // or fixed width in pixels
                py: 2,
                mx: { xs: 3, lg: 0 },
                backgroundColor: "#d3b8c3",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid #fff4e4",
              }}
            >
              <MKBox
                sx={{
                  mx: "auto", // Set both left and right margins to auto to center the box
                  borderTop: "2px solid #fff4e4", // Your border specification
                  width: "72 %", // Adjust the width as needed for your design
                  height: 0, // Set the height to 0 to make the box act like just a line
                }}
                marginTop={1}
                marginBottom={0}
              />
              <MKBox display="flex" alignItems="center" justifyContent="center">
                <MKTypography variant="body2" color="beige" marginTop={0} px={2} textAlign="center">
                  This is a graph I made to show you all the different ways we are connected:)
                </MKTypography>
              </MKBox>
              <MKBox
                sx={{
                  mx: "auto", // Set both left and right margins to auto to center the box
                  borderTop: "2px solid #fff4e4", // Your border specification
                  width: "72%", // Adjust the width as needed for your design
                  height: 0, // Set the height to 0 to make the box act like just a line
                }}
                marginTop={1}
                marginBottom={2}
              />
              <MKBox
                sx={{
                  backgroundColor: "#fff4e4",
                  border: "2px solid transparent",
                  borderRadius: "10px",
                  position: "relative", // Add this line
                }}
                style={{ marginRight: "3rem", marginLeft: "3rem" }}
              >
                <OurVis data={GraphData} />
                <OpenInFullIcon
                  style={{
                    position: "absolute", // Position the icon absolutely
                    top: 8, // Adjust top as per requirement
                    right: 8, // Adjust right as per requirement
                  }}
                  onClick={toggleModal}
                />
              </MKBox>
              <MKBox
                sx={{
                  mx: "auto", // Set both left and right margins to auto to center the box
                  borderTop: "2px solid #fff4e4", // Your border specification
                  width: "72%", // Adjust the width as needed for your design
                  height: 0, // Set the height to 0 to make the box act like just a line
                }}
                marginTop={2}
                marginBottom={0}
              />
              <MKBox display="flex" alignItems="center" justifyContent="center">
                <MKTypography variant="body2" color="beige" marginTop={1} px={2} textAlign="center">
                  You even learnt code for me ! I really appreciate this heart
                </MKTypography>
              </MKBox>
              <MKBox
                sx={{
                  mx: "auto", // Set both left and right margins to auto to center the box
                  borderTop: "2px solid #fff4e4", // Your border specification
                  width: "72%", // Adjust the width as needed for your design
                  height: 0, // Set the height to 0 to make the box act like just a line
                }}
                marginTop={1}
                marginBottom={2}
              />
              <MKBox
                sx={{
                  backgroundColor: "#fff4e4",
                  border: "2px solid #fff4e4",
                  borderRadius: "10px",
                }}
                style={{ marginRight: "3rem", marginLeft: "3rem" }}
              >
                <HeartComponent />
              </MKBox>
              <MKBox
                sx={{
                  mx: "auto", // Set both left and right margins to auto to center the box
                  borderTop: "2px solid #fff4e4", // Your border specification
                  width: "72%", // Adjust the width as needed for your design
                  height: 0, // Set the height to 0 to make the box act like just a line
                }}
                marginTop={2}
                marginBottom={1}
              />
              <MKBox display="flex" alignItems="center" justifyContent="center">
                <MKTypography variant="body2" color="beige" marginTop={1} px={2} textAlign="center">
                  It&apos;s not working right now, but I made a chatGPT about us :) I&apos;ll fix it
                  soon hehe
                </MKTypography>
              </MKBox>
              <MKBox
                sx={{
                  mx: "auto", // Set both left and right margins to auto to center the box
                  borderTop: "2px solid #fff4e4", // Your border specification
                  width: "72%", // Adjust the width as needed for your design
                  height: 0, // Set the height to 0 to make the box act like just a line
                }}
                marginTop={2}
                marginBottom={1}
              />
              <MKBox px={3} py={1} style={{ marginRight: "1.5rem", marginLeft: "1.5rem" }}>
                <MKBox display="flex" style={{ backgroundColor: "#fff4e4", borderRadius: "10px" }}>
                  <MKInput
                    varint="standard"
                    multiline
                    value={inputText}
                    fullWidth
                    style={{
                      bacgroundColor: "#fff4e4",
                    }} // Add this line
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        setQuestion(inputText);
                      }
                    }}
                  />
                </MKBox>
                <MKBox marginTop={2} display="flex" alignItems="center" justifyContent="center">
                  <MKButton
                    onClick={() => setQuestion(inputText)}
                    color="beige"
                    sx={{ color: "#d3b8c3" }}
                  >
                    Ask Away !
                  </MKButton>
                </MKBox>
                <MKBox
                  marginTop={2}
                  height="20vh"
                  overflow="auto"
                  sx={{
                    border: "2px solid #fff4e4",
                    borderRadius: "10px",
                    backgroundColor: "#fff4e4",
                  }}
                >
                  <MKTypography variant="body2" marginBottom={1} p={2}>
                    {answer}
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Card>
            <Modal
              open={showModal}
              onClose={toggleModal}
              sx={{ display: "grid", placeItems: "center" }}
            >
              <Slide direction="down" in={showModal}>
                {isLandscape ? (
                  <MKBox
                    alignItems="center"
                    justifyContent="center"
                    sx={modalStyle}
                    style={{ marginRight: "1rem", marginLeft: "1rem" }}
                  >
                    <OurVisTextLandscape data={GraphData} />
                  </MKBox>
                ) : (
                  <MKBox
                    alignItems="center"
                    justifyContent="center"
                    sx={modalStyle}
                    style={{ marginRight: "1rem", marginLeft: "1rem" }}
                  >
                    <OurVisText data={GraphData} />
                    <MKAlert color="lilac">Turn your phone for a better view!</MKAlert>
                  </MKBox>
                )}
              </Slide>
            </Modal>
          </MKBox>
        </MKBox>
      </MKBox>
    </>
  );
}

export default GraphOfUs;
