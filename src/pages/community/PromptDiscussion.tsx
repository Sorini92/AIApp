import { useState } from "react";
import { Avatar, Box, Button, Divider, SelectChangeEvent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomSelect } from "../../components/app/common/select";
import { CustomTable } from "../../components/community/customTable";
import { RatingCounter } from "../../components/community/ratingCounter";
import { CustomButton } from "../../components/app/common/buttons";

import avatarIcon from "../../img/navigation/avatar.png";
import threeDotsIcon from "../../img/navigation/threeDots.svg";
import shareIcon from "../../img/community/share.svg";
import commentsIcon from "../../img/community/comments.svg";
import secondAvatarIcon from "../../img/community/secondAvatar.png";

export const PromptDiscussion = () => {
  const [category, setCategory] = useState<string>("");

  const data = [
    { name: "Some text here", link: "discussion" },
    { name: "Some text here", link: "discussion" },
    {
      name: "As an experienced financial advisor, your task is to analyze economic trends for a [sector].",

      link: "discussion",
    },
    {
      name: "As an experienced financial advisor, your task is to analyze economic trends for a [sector].",

      link: "discussion",
    },
    { name: "Some text here", link: "discussion" },
    { name: "Some text here", link: "discussion" },
    {
      name: "As an experienced financial advisor, your task is to analyze economic trends for a [sector].",
      link: "discussion",
    },
    { name: "Some text here", link: "discussion" },
    { name: "Some text here", link: "discussion" },
    { name: "Some text here", link: "discussion" },
  ];

  const categories = ["For Another Advisor", "For Test Advisor"];

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          padding: "0 24px",
          display: "flex",
          justifyContent: "center",
          margin: "24px 0",
        }}
      >
        <Box
          sx={{
            marginRight: "24px",
            width: "810px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            padding: "16px",
            alignSelf: "flex-start",
          }}
        >
          <Box
            sx={{
              height: "40px",
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={avatarIcon} sx={{ marginRight: "10px" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>Davis Botosh</Typography>
            </Box>
            <Button
              sx={{
                width: "32px",
                height: "32px",
                minWidth: "30px",
                border: "none",
                color: "#797979",
                borderRadius: "100%",
                ":hover": {
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              <Box component="img" alt="leftArrow" src={threeDotsIcon} />
            </Button>
          </Box>

          {/* title */}

          <Typography sx={{ fontWeight: 600, margin: "16px 0" }}>
            Analyze economic trends in one minute!
          </Typography>

          {/* text */}

          <Typography sx={{ fontWeight: 400, color: "#000" }}>
            Hello, community! I've utilized this prompt to analyze market trends, and from my
            perspective, it's been incredibly effective! I'm sharing it with you all in case it
            proves beneficial to someone, or perhaps someone can offer suggestions on how to further
            enhance it. Looking forward to your insights!
          </Typography>

          <Box
            sx={{
              width: "100%",
              backgroundColor: "#f1f1f1",
              borderRadius: " 12px",
              padding: "12px",
              marginTop: "16px",
            }}
          >
            <Typography sx={{ fontWight: 400, fontSize: "16px" }}>
              As an experienced financial advisor, your task is to analyze economic trends for a
              [sector]. You are required to conduct comprehensive research on current market
              conditions, historical data, and future projections. Your analysis should identify key
              factors influencing the sector, such as regulatory changes, technological
              advancements, and consumer behavior shifts. Provide detailed insights and actionable
              recommendations for stakeholders. Your report should be clear, concise, and backed by
              data, enabling informed decision-making for investors and businesses within the
              sector.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
              <RatingCounter count={100} handleUpClick={() => {}} handleDownClick={() => {}} />

              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ height: "7px", margin: "10px 12px" }}
              />

              <Button
                onClick={() => {}}
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#333",
                  cursor: "pointer",
                  padding: "0",
                  ":hover": {
                    backgroundColor: "#F2F2F2",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Box>

          <Box sx={{ marginTop: "16px" }}>
            <Button
              onClick={() => {}}
              sx={{
                color: "#333",
                width: "75px",
                height: "32px",
                borderRadius: "999px",
                backgroundColor: "#f1f1f1",
                marginRight: "8px",
                ":hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              <Box
                component="img"
                src={commentsIcon}
                alt="comments icon"
                sx={{ maxHeight: "24px", maxWidth: "24px", marginRight: "4px" }}
              />
              <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>110</Typography>
            </Button>

            <Button
              onClick={() => {}}
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#333",
                cursor: "pointer",
                padding: "0",
                width: "91px",
                height: "32px",
                borderRadius: "999px",
                backgroundColor: "#f1f1f1",
                ":hover": {
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              <Box
                component="img"
                src={shareIcon}
                alt="share icon"
                sx={{ maxHeight: "24px", maxWidth: "24px", marginRight: "4px" }}
              />
              <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>Share</Typography>
            </Button>
          </Box>

          <Divider sx={{ marginTop: "16px" }} />

          <CustomButton
            kind="dark"
            text="Add a Comment"
            height={48}
            width={200}
            sx={{ margin: "32px 0" }}
          />

          {/* comments */}

          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={secondAvatarIcon} sx={{ marginRight: "10px" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>Marcus Westervelt</Typography>
            </Box>
          </Box>

          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "12px" }}>
            Thanks for sharing,{" "}
            <Box component={Link} to={""} sx={{ color: "#2f80ed" }}>
              @davis.botosh!
            </Box>{" "}
            This prompt seems quite insightful. Have you noticed any specific trends or patterns
            that stood out to you? It'd be interesting to hear more about your analysis!
          </Typography>

          <Box sx={{ marginTop: "16px", display: "flex" }}>
            <RatingCounter
              count={100}
              handleUpClick={() => {}}
              handleDownClick={() => {}}
              backgroundColor="#f1f1f1"
              height={32}
            />

            <Button
              onClick={() => {}}
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#333",
                cursor: "pointer",
                padding: "0",
                width: "91px",
                height: "32px",
                borderRadius: "999px",
                backgroundColor: "#f1f1f1",
                margin: "0 8px",
                ":hover": {
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              <Box
                component="img"
                src={commentsIcon}
                alt="share icon"
                sx={{ maxHeight: "24px", maxWidth: "24px", marginRight: "4px" }}
              />
              <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>Reply</Typography>
            </Button>

            <Button
              sx={{
                width: "32px",
                height: "32px",
                minWidth: "30px",
                border: "none",
                color: "#797979",
                borderRadius: "100%",
                ":hover": {
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              <Box component="img" alt="leftArrow" src={threeDotsIcon} />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "320px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
          }}
        >
          <Box
            sx={{
              height: "24px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#333" }}>
              Popular Prompts
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

          <CustomSelect value={category} categories={categories} onChange={handleChange} />
          <CustomTable data={data} isShowRaiting={false} maxSimbols={30} height={48} />
        </Box>
      </Box>
    </>
  );
};
