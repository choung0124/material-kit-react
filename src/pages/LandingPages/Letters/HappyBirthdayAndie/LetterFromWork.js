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

import FavoriteIcon from "@mui/icons-material/Favorite";

function LetterFromWork() {
  const [imageHeight, setImageHeight] = useState(0);
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
            Letter From Work :3
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
            <MKBox px={3} py={2}>
              <MKTypography variant="body2" marginBottom={1}>
                Your first Monday after your birthday !
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I wish I could be there with you...
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                But instead of me, I&apos;m giving you this gift.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                This is the mini version of the calendar for your desk as well as a cute pen that
                matches you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I wanted to say in here how happy I am to have you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I am really lucky to have you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I wish one day I can be on your your frist mondays after every of one of your
                birthdays.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I hope the world gives you the best oppurtunities and people.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I want you to always have the best.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                You are the most beautiful person I meet here, and (if I can say it) in my life.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Keep with you hard work and remember that you are loved, not only because of the
                actions you make but how lovely you are.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Hope for the best start of the week.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Love you ! <FavoriteIcon />
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                -Charlotte
              </MKTypography>
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default LetterFromWork;
