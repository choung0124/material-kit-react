import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import HeartAnimation from "./animation";
import bgImage from "assets/images/bgimage.jpg";

const AndieAndCharlotteGPT = () => {
  const [inputText, setInputText] = useState("");
  const [streamingResponseUrl, setStreamingResponseUrl] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [question, setQuestion] = useState("");

  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

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
          display: "flex", // Changed to flex for more control
          flexDirection: "column", // Stack children vertically
          justifyContent: "flex-start", // Align children to the start of the container
        }}
      >
        <HeartAnimation />
        <MKBox
          marginTop={15}
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
              marginBottom: 5,
              marginLeft: 1,
              marginRight: 1,
              // Multiple shadows to create the outline effect
              textShadow: `
          -1px -1px 0 #fff,  
          1px -1px 0 #fff,
          -1px 1px 0 #fff,
          1px 1px 0 #fff
        `,
            }}
          >
            Imagine ChatGPT, but about us !
          </MKTypography>
          <MKBox>
            <Card
              sx={{
                py: 2,
                mx: { xs: 3, lg: 2 },
                backgroundColor: "#dbcbe9",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid #fff4e4",
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
                  sx={{
                    border: "2px solid #fff4e4",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
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
    </>
  );
};

export default AndieAndCharlotteGPT;
