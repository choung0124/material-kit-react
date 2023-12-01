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

function HappyBirthdayCharlotte() {
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
            Happy Birthday Charlotte :3
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
                Happy birthday :)
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I really do wish you a happy birthday. We celebrate our birthdays to celebrate the
                day, or even the fact that we were born, right? So let me say this.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I’m so happy that you were born, and I genuinely wish to celebrate that.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Thank you for being my friend. And thank you for being, you :)
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I love you, and being friends with you. Even if my facial expressions may not always
                show it ㅋㅋㅋ, I really enjoy your company :) As people, we may change, and
                sometimes we may not always see eye to eye, but that won’t change how much I value
                our friendship. That’s because at the heart of everything that makes me appreciate
                you and our friendship, is your heart(you see what i did there? ㅎㅎ).
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                You have a good heart. Everything you do and say comes from this good place, and I
                trust that.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                So, thank you for being, you :)
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Happy birthday Charlotte
              </MKTypography>
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default HappyBirthdayCharlotte;
