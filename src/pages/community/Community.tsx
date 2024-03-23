import { useState } from "react";
import { Box, Divider, Typography, SelectChangeEvent } from "@mui/material";
import { Header } from "../../components/app/common/header/Header";
import { Link } from "react-router-dom";
import { CustomTable } from "../../components/community/customTable";
import { CustomSelect } from "../../components/app/common/select";

import stub from "../../img/community/stub.png";

export const Community = () => {
  const communityBreadcrumbs = [{ text: "Community", type: "text", to: "" }];

  const data = [
    { name: "Some text here", rating: 159, link: "discussion" },
    { name: "Some text here", rating: 159, link: "discussion" },
    {
      name: "As an experienced financial advisor, your task is to analyze economic trends for a [sector].",
      rating: 159,
      link: "discussion",
    },
    {
      name: "As an experienced financial advisor, your task is to analyze economic trends for a [sector].",
      rating: 159,
      link: "discussion",
    },
    { name: "Some text here", rating: 159, link: "discussion" },
    { name: "Some text here", rating: 159, link: "discussion" },
    {
      name: "As an experienced financial advisor, your task is to analyze economic trends for a [sector].",
      rating: 159,
      link: "discussion",
    },
    { name: "Some text here", rating: 159, link: "discussion" },
    { name: "Some text here", rating: 159, link: "discussion" },
    { name: "Some text here", rating: 159, link: "discussion" },
  ];

  const categories = ["For Another Advisor", "For Test Advisor"];

  const [category, setCategory] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Header breadcrumbs={communityBreadcrumbs} searchFunc={() => {}} />
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
            display: "flex",
            flexDirection: "column",
            marginRight: "24px",
            alignSelf: "flex-start",
          }}
        >
          <Box
            sx={{ width: "830px", borderRadius: "16px", backgroundColor: "#fff", padding: "16px" }}
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
            <CustomTable data={data} />
          </Box>

          {/* forum */}

          <Box
            sx={{
              width: "830px",
              borderRadius: "16px",
              backgroundColor: "#fff",
              padding: "16px",
              marginTop: "24px",
            }}
          >
            <Box
              sx={{
                height: "24px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#333" }}>
                Forum
              </Typography>
              <Box
                component={Link}
                to={""}
                sx={{
                  color: "#2f80ed",
                  ":hover": { textDecoration: "underline", color: "#2f80ed" },
                }}
              >
                See All Categories
              </Box>
            </Box>

            {/* categories */}

            <Box>
              <Divider sx={{ margin: "12px 0" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "16px", color: "#333" }}>
                Prospecting, Marketing, and Selling
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                  124 Topics
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ margin: "7px 12px", height: "7px" }}
                />
                <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                  Last post 4h 30m ago
                </Typography>
              </Box>
            </Box>

            <Box>
              <Divider sx={{ margin: "12px 0" }} />
              <Typography sx={{ fontWeight: 500, fontSize: "16px", color: "#333" }}>
                Investments
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                  90 Topics
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ margin: "7px 12px", height: "7px" }}
                />
                <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                  Last post 5h ago
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* right side */}

        <Box
          sx={{
            width: "300px",
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

          {/* video item */}

          <Box
            sx={{
              borderRadius: "12px",
              padding: "16px",
              width: "100%",
              height: "260px",
              marginTop: "16px",
              backgroundColor: "#f1f1f1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "120px",
                borderRadius: "8px",
              }}
            >
              <img alt="video img" src={stub} />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: " #333",
                marginTop: "12px",
              }}
            >
              How to get the best results while working with John, the Research Analyst
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "12px",
              padding: "16px",
              width: "100%",
              height: "260px",
              marginTop: "16px",
              backgroundColor: "#f1f1f1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "120px",
                borderRadius: "8px",
              }}
            >
              <img alt="video img" src={stub} />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: " #333",
                marginTop: "12px",
              }}
            >
              How to get the best results while working with Rayna, the SMM & Content Strategist
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "12px",
              padding: "16px",
              width: "100%",
              height: "260px",
              marginTop: "16px",
              backgroundColor: "#f1f1f1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "120px",
                borderRadius: "8px",
              }}
            >
              <img alt="video img" src={stub} />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "16px",
                color: " #333",
                marginTop: "12px",
              }}
            >
              How to get the best results while working with Olivia, the Journalist
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
