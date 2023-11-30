// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

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
import DateTracker from "pages/Presentation/DateTracker";
import DateTrackerDating from "pages/Presentation/DateTrackerDating";
import MKTypography from "components/MKTypography";
import { SpeechBubble } from "react-kawaii";
import { useEffect, useState, useRef } from "react";
import NowPlaying from "./NowPlaying";
import NowPlayingChar from "./NowPlayingChar";
import HeartAnimation from "./animation";

function Presentation() {
  const [imageHeight, setImageHeight] = useState(0);
  const containerRef = useRef(null);

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
          <MKBox display="flex" justifyContent="center">
            <SpeechBubble color="#dbcbe9" mood="happy" size={100} />
          </MKBox>
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
          <MKTypography
            variant="body2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 10,
              marginLeft: 2,
              marginRight: 2,
              // Multiple shadows to create the outline effect
              textShadow: `
            -1px -1px 0 #fff,  
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff
          `,
            }}
          >
            This Website is an archive of everything about us, but its also a platform where I can
            express my love for you. I hope you enjoy it :)
          </MKTypography>
        </MKBox>
        <MKBox>
          <MKBox>
            <MKBox display="flex" flexDirection="row" justifyContent="center" alignItems="center">
              <Card
                sx={{
                  width: { xs: "100%", sm: "50%", md: "33.333%", lg: "25%" }, // or fixed width in pixels
                  py: 2,
                  mx: { xs: 3, lg: 0 },
                  backgroundColor: "#dbcbe9",
                  backdropFilter: "saturate(200%) blur(30px)",
                  boxShadow: ({ boxShadows: { xxl } }) => xxl,
                  border: "2px solid #fff4e4",
                }}
              >
                <Container ref={containerRef}>
                  <Grid
                    container
                    item
                    xs={12}
                    lg={4}
                    justifyContent="center"
                    mx="auto"
                    marginTop={1}
                  >
                    <DateTrackerDating startDate="2023-04-16T21:00:00" />
                  </Grid>
                </Container>
                <Container ref={containerRef}>
                  <Grid
                    container
                    item
                    xs={12}
                    lg={4}
                    justifyContent="center"
                    mx="auto"
                    marginTop={1}
                  >
                    <DateTracker startDate="2023-11-21T20:17:00" />
                    <MKTypography variant="body2" color="beige" pt={2}>
                      시간 금방가지? ㅋㅋ
                    </MKTypography>
                  </Grid>
                </Container>
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
              }}
            >
              Now Playing, for Charlotte
            </MKTypography>
            <MKBox
              sx={{
                mx: { xs: 3 },
                backgroundColor: "#dbcbe9",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid #fff4e4",
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
                backgroundColor: "#dbcbe9",
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                border: "2px solid #fff4e4",
                borderRadius: "16px",
              }}
              marginTop={0}
            >
              <NowPlaying />
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb", border: "2px solid #fff4e4" }}></MKBox>
    </>
  );
}

export default Presentation;
