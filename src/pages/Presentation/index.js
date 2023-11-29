// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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

import PropTypes from "prop-types";

// DateTracker
import DateTracker from "pages/Presentation/DateTracker";
import DateTrackerDating from "pages/Presentation/DateTrackerDating";
import Gallery from "./Gallery";
import MKTypography from "components/MKTypography";
import { SpeechBubble } from "react-kawaii";
import { useEffect, useState, useRef } from "react";
import NowPlaying from "./NowPlaying";
import NowPlayingChar from "./NowPlayingChar";
import MKInput from "components/MKInput";
import HeartAnimation from "./animation";
import axios from "axios";
import MKButton from "components/MKButton";
import HeartComponent from "./CharlotteCode";
import GraphData from "./data";
import OurVis from "./Network";
import { Modal, Slide } from "@mui/material";
import OurVisText from "./NetworkText";
import OurVisTextLandscape from "./NetworkTextLandscape";
import MKAlert from "components/MKAlert";

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

function Presentation() {
  const [imageHeight, setImageHeight] = useState(0);
  const containerRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [streamingResponseUrl, setStreamingResponseUrl] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [question, setQuestion] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const { width, height } = useWindowSize();
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  const modalStyle = {
    width: width > 600 ? "80%" : "90%",
    height: height > 600 ? "70vh" : "80vh",
    backgroundColor: "#fff",
    border: "2px solid white",
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

  const images = [
    { id: 1, src: require("assets/images/gallery1.jpg"), alt: "Description of image 1" },
    { id: 2, src: require("assets/images/gallery2.jpg"), alt: "Description of image 2" },
    { id: 3, src: require("assets/images/gallery3.jpg"), alt: "Description of image 2" },
    { id: 4, src: require("assets/images/gallery4.jpg"), alt: "Description of image 2" },
    // Add more images as necessary
  ];

  function VideoPlayer({ videoSrc }) {
    return (
      <video width="100%" height="100%" controls autoPlay loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  VideoPlayer.propTypes = {
    videoSrc: PropTypes.string.isRequired,
  };

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
          display: "grid",
          placeItems: "top",
        }}
      >
        <HeartAnimation />

        <MKBox
          marginTop={20}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <SpeechBubble color="#e6d7ff" mood="happy" size={100} />
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 0,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff
    `,
            }}
          >
            Welcome !
          </MKTypography>
        </MKBox>
        <MKBox>
          <Card
            sx={{
              py: 2,
              mx: { xs: 3, lg: 2 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
            }}
          >
            <Container ref={containerRef}>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={0}>
                <Gallery images={images} />
              </Grid>
              <Grid container item xs={12} lg={4} justifyContent="center" mx="auto" marginTop={2}>
                <DateTrackerDating startDate="2023-04-16T21:00:00" />
                <DateTracker startDate="2023-11-21T20:17:00" />
              </Grid>
            </Container>
          </Card>
          <MKTypography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 2,
              marginBottom: 1,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff
    `,
            }}
          >
            Code that Charlotte made !
          </MKTypography>
          <MKBox>
            <Card
              sx={{
                py: 2,
                mx: { xs: 3, lg: 2 },
                backgroundColor: "#e6d7ff",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid white",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <MKBox
                sx={{ backgroundColor: "#fff", border: "2px solid white", borderRadius: "10px" }}
                style={{ marginRight: "1rem", marginLeft: "1rem" }}
              >
                <HeartComponent />
              </MKBox>
            </Card>
          </MKBox>
          <MKTypography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 2,
              marginBottom: 1,
              // Multiple shadows to create the outline effect
              textShadow: `
              -1px -1px 0 #fff,  
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff
            `,
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            We are connected on so many different levels :)
          </MKTypography>
          <MKBox>
            <Card
              sx={{
                py: 2,
                mx: { xs: 3, lg: 2 },
                backgroundColor: "#e6d7ff",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid white",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <MKBox
                sx={{
                  backgroundColor: "#fff",
                  border: "2px solid white",
                  borderRadius: "10px",
                  position: "relative", // Add this line
                }}
                style={{ marginRight: "1rem", marginLeft: "1rem" }}
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
          <MKTypography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 2,
              marginBottom: 1,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff
    `,
            }}
          >
            Now Playing, for Charlotte
          </MKTypography>
          <MKBox
            sx={{
              mx: { xs: 3 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
              borderRadius: "16px",
            }}
            marginTop={0}
          >
            <NowPlayingChar />
          </MKBox>
          <MKTypography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 2,
              marginBottom: 1,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff
    `,
            }}
          >
            Now Playing, for Andie
          </MKTypography>
          <MKBox
            sx={{
              mx: { xs: 3 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
              borderRadius: "16px",
            }}
            marginTop={0}
          >
            <NowPlaying />
          </MKBox>
          <MKTypography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 2,
              marginBottom: 2,
              // Multiple shadows to create the outline effect
              textShadow: `
               -1px -1px 0 #fff,  
               1px -1px 0 #fff,
               -1px 1px 0 #fff,
               1px 1px 0 #fff
             `,
            }}
          >
            Ask a question about us !
          </MKTypography>
          <MKBox>
            <Card
              sx={{
                py: 2,
                mx: { xs: 3, lg: 2 },
                backgroundColor: "#e6d7ff",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid white",
              }}
            >
              <MKBox px={3} py={1}>
                <MKBox display="flex" style={{ backgroundColor: "#fff", borderRadius: "10px" }}>
                  <MKInput
                    varint="standard"
                    multiline
                    value={inputText}
                    fullWidth
                    style={{
                      bacgroundColor: "#fff",
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
                  <MKButton onClick={() => setQuestion(inputText)}>Ask Away !</MKButton>
                </MKBox>
                <MKBox
                  marginTop={2}
                  height="20vh"
                  overflow="auto"
                  sx={{ border: "2px solid white", borderRadius: "10px", backgroundColor: "#fff" }}
                >
                  <MKTypography variant="body2" marginBottom={1} p={2}>
                    {answer}
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Card>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb", border: "2px solid white" }}></MKBox>
    </>
  );
}

export default Presentation;
