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
          display: "grid",
          placeItems: "top",
        }}
      >
        <MKBox
          marginTop={18}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 3,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff,  
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff
    `,
            }}
          >
            Happy Birthday Charlotte :3
          </MKTypography>
        </MKBox>
        <MKBox>
          <Card
            sx={{
              py: 2,
              mt: -90,
              mx: { xs: 3, lg: 2 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
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
        <MKTypography variant="h2">yes</MKTypography>
      </MKBox>
    </>
  );
}

export default HappyBirthdayCharlotte;
