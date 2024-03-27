import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import videoImgStub from "../../img/community/videoImgStub.png";
import imgStub from "../../img/community/guidlinesImgStub.png";
import stub from "../../img/community/stub.png";

import { MyCarousel } from "../../components/community/myCarousel/MyCarousel";

export const GuidlinesItem = () => {
  const videoItems = [
    {
      text: "How to get the best results while working with John, the Research Analyst",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Rayna, the SMM & Content Strategist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
    {
      text: "How to get the best results while working with Olivia, the Journalist",
      videoImg: stub,
      link: "guidlines",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ padding: "56px 280px" }}>
        <Typography sx={{ fontWeight: 500, fontSize: "32px" }}>
          How to get the best results while working with John, the Research Analyst
        </Typography>
        <Box
          sx={{ width: "640px", height: "400px", margin: "32px 0" }}
          component="img"
          src={videoImgStub}
        />
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          Working effectively with John, the Research Analyst, can significantly enhance the
          outcomes of your research endeavors. This guideline outlines key strategies to maximize
          the benefits of collaborating with John, ensuring a productive and fruitful partnership.
        </Typography>

        <Typography sx={{ fontWeight: 500, fontSize: "18px", marginTop: "24px" }}>
          1. Clearly Define Objectives.
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "12px" }}>
          Before engaging with John, clearly define your research objectives and goals. Provide John
          with a detailed overview of what you aim to achieve and the specific areas you need
          assistance with.
        </Typography>

        <Typography sx={{ fontWeight: 500, fontSize: "18px", marginTop: "24px" }}>
          2. Communicate Expectations.
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "12px" }}>
          Clearly communicate your expectations to John regarding the scope of work, timelines, and
          deliverables. Ensure mutual understanding to avoid any misunderstandings or delays.
        </Typography>

        <Box
          sx={{ width: "640px", height: "400px", margin: "32px 0" }}
          component="img"
          src={imgStub}
        />

        <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "12px" }}>
          Working effectively with John, the Research Analyst, can significantly enhance the
          outcomes of your research endeavors. This guideline outlines key strategies to maximize
          the benefits of collaborating with John, ensuring a productive and fruitful partnership.
        </Typography>

        <Typography sx={{ fontWeight: 500, fontSize: "18px", marginTop: "24px" }}>
          1. Clearly Define Objectives.
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "12px" }}>
          Before engaging with John, clearly define your research objectives and goals. Provide John
          with a detailed overview of what you aim to achieve and the specific areas you need
          assistance with.
        </Typography>

        <Typography sx={{ fontWeight: 500, fontSize: "18px", marginTop: "24px" }}>
          2. Communicate Expectations.
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "12px" }}>
          Clearly communicate your expectations to John regarding the scope of work, timelines, and
          deliverables. Ensure mutual understanding to avoid any misunderstandings or delays.
        </Typography>
      </Box>

      <Box
        sx={{
          height: "348px",
          padding: "24px 0",
          borderTopLeftRadius: "16px",
          backgroundColor: "#fff",
          margin: "112px 0 56px 24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "0 24px",
            height: "24px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#333" }}>
            Guidlines
          </Typography>
          <Box
            component={Link}
            to={""}
            sx={{
              color: "#2f80ed",
              ":hover": { textDecoration: "underline", color: "#2f80ed" },
            }}
          >
            See All
          </Box>
        </Box>

        {/* carousel */}

        <MyCarousel items={videoItems} />

        {/* end carousel */}

        {/* <Box sx={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
          <Button
            sx={{
              position: "absolute",
              left: "-14px",
              top: "43%",
              width: "56px",
              height: "56px",
              minWidth: "30px",
              color: "#797979",
              border: "1px solid #e9e9e9;",
              borderRadius: "100%",
              backgroundColor: "#fff",
              ":hover": {
                backgroundColor: "#F2F2F2",
              },
            }}
          >
            <Box component="img" alt="leftArrow" src={leftArrowIcon} />
          </Button>
          {videoItems.map((item, i) => {
            return <VideoItem key={i} text={item.text} videoImg={item.videoImg} link={item.link} />;
          })}
          <Button
            sx={{
              position: "absolute",
              right: "-14px",
              top: "43%",
              width: "56px",
              height: "56px",
              minWidth: "30px",
              color: "#797979",
              border: "1px solid #e9e9e9;",
              borderRadius: "100%",
              backgroundColor: "#fff",
              ":hover": {
                backgroundColor: "#F2F2F2",
              },
            }}
          >
            <Box component="img" alt="leftArrow" src={rightArrowIcon} />
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};
