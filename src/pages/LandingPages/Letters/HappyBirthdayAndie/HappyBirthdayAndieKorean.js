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

function HappyBirthdayAndieKorean() {
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
            Happy Birthday Andie(Korean) :3
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
                이세상에 존재하는 모든 언어로 얼마나 내가 널 사랑하는지 말해주고 싶어.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                네가 내 삶에 존재해줘서, 내가 너라는 존재를 알게 해줘서 고마워.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                아직도 내 마음 속 어진가에서는 네가 내 인생에 존재하다는 걸 믿기 어려워하는 부분이
                있어.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                이렇게 아름다운 사람을 사랑할수 있게 되었다니.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                너는 이 세상을 다 줘도 아깝지 않을 사람이야.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                선하고, 똑똑하고, 열정적이고, 예쁜 사람이야.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                너의 모든 부분이 아름다워.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                네가 행복할 때는 물론이고, 그렇지 않을 때도 말이야.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                오늘 그리고 다가올 시간 동안 널 진심으로 사랑하고 아껼줄께.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                함께 성장하고 같이 나이들어 가고 싶어.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                내가 널 사랑할 수 있게 기회를 줘서 고마워.
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                생일, 축하헤 !
              </MKTypography>
              <MKTypography variant="body2" marginBottom={1}>
                샬롯 <FavoriteIcon />
              </MKTypography>
            </MKBox>
          </Card>
        </MKBox>
      </MKBox>
      <MKBox sx={{ bacgroundColor: "#f3e5cb" }}></MKBox>
    </>
  );
}

export default HappyBirthdayAndieKorean;
