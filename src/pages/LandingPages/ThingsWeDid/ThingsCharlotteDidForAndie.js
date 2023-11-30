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
import MKTypography from "components/MKTypography";
import { useEffect, useState } from "react";
import HeartAnimation from "./animation";
import HeartComponent from "./CharlotteCode";

function ThingsCharlotteDidForAndie() {
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
          Code that Charlotte made !
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
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MKBox
              sx={{ backgroundColor: "#fff", border: "2px solid #fff4e4", borderRadius: "10px" }}
              style={{ marginRight: "1rem", marginLeft: "1rem" }}
            >
              <HeartComponent />
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
    </>
  );
}

export default ThingsCharlotteDidForAndie;
