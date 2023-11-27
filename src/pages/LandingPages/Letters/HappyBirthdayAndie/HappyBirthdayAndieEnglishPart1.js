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

function HappyBirthdayAndieEnglishPart1() {
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
          <HeartAnimation />
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
            Happy Birthday Andie(English) :3
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
              height: "100%",
            }}
          >
            <MKBox px={3} py={2}>
              <MKTypography variant="body2" marginBottom={1}>
                Andie,
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Today is a really significant day since it marks the birth of a truly lovely
                individual that I will always cherish.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I am very thankful that you were placed in my life and that I fell in love with
                you...
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                It&apos;s incredible how I can&apos;t stop talking about you; you&apos;re constantly
                there in most of my conversations or thoughts.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I am excited to tell everyone about how fantastic you are. I tell them how brilliant
                you are and how amazing it is what you have achieved so far.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                And everyone agree with me and compliment you more. I&apos;m completely in love with
                the way you speak, how you express yourself, and how lovely your voice sounds.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                It also makes me want to pay m ore attention to you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                But it&apos;s not only you voice.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I adore everything about you. The way you smile and laugh or how adorable you look
                while sleeping...
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I&apos;m continuously looking forward and counting the days till the weekend so I
                can see you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I don&apos;t care about how far away you are, what hour it is, or the circumstances
                you are in; I still want to see you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Being with you fills my entire body and heart <FavoriteIcon />.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I can say you are one of my major inspirations right now.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I view you as somone who motivates me to improve myself.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I aspire to be like you one day, hardworking, kind and a beautiful person.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                But I also want to me someone who is worthy of you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                You motivate me to become a better version of myself so that, one day, I can give
                everything you need.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I consider myself extremely fortunate to have you in my life, as does everyone else.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Your friends, relatives and even coworkers are blessed too.
              </MKTypography>
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default HappyBirthdayAndieEnglishPart1;
