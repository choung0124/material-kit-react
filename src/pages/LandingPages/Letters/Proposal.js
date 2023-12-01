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

function Proposal() {
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
            I love you :)
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
              <MKTypography variant="body2" marginBottom={1} color="beige">
                Lately I have noticed some things. Maybe I am a fool. Perhaps you could even call me
                a donut. But I’d rather be a fool, than to let this opportunity go.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1} color="beige">
                In the past I have loved you as a friend, but today I’d like to ask you for a chance
                to love you as a partner.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1} color="beige">
                I love you, and that love is complex.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1} color="beige">
                It’s not something I can just label as platonic or romantic.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1} color="beige">
                We’ve been spending more time together recently, and I find that I hold myself back.
                Hold myself back from expressing the ocean of love for you that resides in my heart.
                Hold myself back from crossing the line that sits between friendship and romance.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1} color="beige">
                If there is infinite number of ways to love you, I’d like to learn every single one
                of them, as a partners, with you. I can’t promise you what the future of tomorrow
                holds for us, but I can promise that I love you today and I will love you tomorrow.
                Because no matter how we change, I know that the charlotte I love, is a person. I’m
                in love with that person, not the individual things about them. Even If someone had
                the same life and characteristics as you, to me you are special, and I’d choose you
                over them every time. It’s the way you connect those parts of you and your life
                together that I fell in love with. If you’d like to stay friends, I’m okay with
                that. Whether our relationship is platonic or romantic I will love you the same. My
                love for you will not falter. My love is deeper, stronger, and more complex that it
                cannot be confined by boundary between platonic and romantic love.
              </MKTypography>
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default Proposal;
