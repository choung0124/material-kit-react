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
import { useEffect, useState, useRef } from "react";
import NowPlaying from "./NowPlaying";
import NowPlayingChar from "./NowPlayingChar";
import HeartAnimation from "./animation";
import Icon3 from "assets/images/icon3.png";
import Icon2 from "assets/images/icon2.png";

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
          zIndex={1}
        >
          <MKBox display="flex" justifyContent="center">
            <img src={Icon3} alt="icon" width="150" />
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
            -1px -1px 0 #fff4e4,  
            1px -1px 0 #fff4e4,
            -1px 1px 0 #fff4e4,
            1px 1px 0 #fff4e4
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
            -1px -1px 0 #fff4e4,  
            1px -1px 0 #fff4e4,
            -1px 1px 0 #fff4e4,
            1px 1px 0 #fff4e4
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
                  backgroundColor: "#d3b8c3",
                  backdropFilter: "saturate(200%) blur(30px)",
                  boxShadow: ({ boxShadows: { xxl } }) => xxl,
                  border: "2px solid #fff4e4",
                }}
              >
                <MKBox display="flex" justifyContent="center" alignItems="center" marginTop={0}>
                  <MKTypography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    color="beige"
                    sx={{
                      marginTop: 0,
                      marginBottom: 0,
                      marginRight: 2,
                      // Multiple shadows to create the outline effect
                    }}
                  >
                    Dashboard
                  </MKTypography>
                  <img src={Icon2} alt="icon" width="75" />
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
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
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={2}
                  marginBottom={1}
                />
                <MKBox display="flex" alignItems="center" justifyContent="center">
                  <MKTypography variant="body2" color="beige" marginTop={1}>
                    Lets see what Charlotte is listening to :3
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
                <MKBox px={1} paddingRight={2}>
                  <NowPlayingChar />
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "72%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={1}
                  marginBottom={1}
                />
                <MKBox display="flex" alignItems="center" justifyContent="center">
                  <MKTypography variant="body2" color="beige" marginTop={1}>
                    Lets see what Andie is listening to :3
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
                <MKBox px={1} paddingRight={2}>
                  <NowPlaying />
                </MKBox>
                <MKBox
                  sx={{
                    mx: "auto", // Set both left and right margins to auto to center the box
                    borderTop: "2px solid #fff4e4", // Your border specification
                    width: "90%", // Adjust the width as needed for your design
                    height: 0, // Set the height to 0 to make the box act like just a line
                  }}
                  marginTop={1}
                  marginBottom={2}
                />
              </Card>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb", border: "2px solid #fff4e4" }}></MKBox>
    </>
  );
}

export default Presentation;
