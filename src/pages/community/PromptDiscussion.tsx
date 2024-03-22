import { Avatar, Box, Button, SelectChangeEvent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/app/common/header/Header";
import { useState } from "react";
import { CustomSelect } from "../../components/app/common/select";
import { CustomTable } from "../../components/community/customTable";

import avatarIcon from "../../img/navigation/avatar.png";
import threeDotsIcon from "../../img/navigation/threeDots.svg";

export const PromptDiscussion = () => {
  const [category, setCategory] = useState<string>("");

  const promptreadcrumbs = [
    { text: "Community", type: "link", to: "/community" },
    { text: "Prompt Discussion", type: "text", to: "" },
  ];

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
      <Header breadcrumbs={promptreadcrumbs} searchFunc={() => {}} />
      <Box
        sx={{
          padding: "0 24px",
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <Box
          sx={{
            marginRight: "24px",
            width: "810px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            padding: "16px",
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
              <img alt="leftArrow" src={threeDotsIcon} />
            </Button>
          </Box>

          <Typography sx={{ fontWeight: 600, margin: "16px 0" }}>
            Analyze economic trends in one minute!
          </Typography>

          <Typography sx={{ fontWeight: 400, color: "#000" }}>
            Hello, community! I've utilized this prompt to analyze market trends, and from my
            perspective, it's been incredibly effective! I'm sharing it with you all in case it
            proves beneficial to someone, or perhaps someone can offer suggestions on how to further
            enhance it. Looking forward to your insights!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "320px",
            borderRadius: "16px",
            backgroundColor: "#fff",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
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
