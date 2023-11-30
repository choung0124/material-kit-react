import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

const AndieAndCharlotteGPT = () => {
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

  return (
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
  );
};

export default AndieAndCharlotteGPT;
