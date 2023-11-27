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

function HappyBirthdayAndieEnglishPart3() {
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
              <MKTypography variant="body2" marginBottom={1}>
                Everyone who meets you says the same thing: &quot;She is simply too good, kind and
                pretty.&quot;
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                And I agree with them.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I know that others are as proud as I am of yourself.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I&apos;m sure your grandfather will be happy and glad of how far you came.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I know it may be too soon to say it, but, if I can stay for a long time with you;
                I&apos;d like to be a family one day...
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                With the goal of being together for a long time, I want to be there for all of your
                birthdays, christmas, new years, as well as for all of your acheivements in your
                life.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I want to with you and love you completely.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I wish you the best things and happiness for today, next days and years to come.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                I will do alll in my power to ensure that you have it.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                You are the best present I have every received.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                And the present I want to offer you today is a promise that I will always love you.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                Charlotte <FavoriteIcon />
              </MKTypography>
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default HappyBirthdayAndieEnglishPart2;
