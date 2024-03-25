import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import arrowLeftGreyIcon from "../../img/community/leftArrowGrey.svg";
import themeIcon from "../../img/community/themeIcom.png";
import { CustomButton } from "../../components/app/common/buttons";

export const Category = () => {
  const navigate = useNavigate();

  const recentThreads = [
    {
      title: "Tactical vs. strategic asset allocation: pros and cons",
      user: "@dabis.botosh",
    },
    {
      title: "Diversification strategies for minimizing portfolio risk",
      user: "@george.mm",
    },
    {
      title: "What's your go-to asset mix?",
      user: "@jordyn.dorwart",
    },
    {
      title: "Risk Management horror stories: what went wrong and how did you handle it?",
      user: "@jordyn.dorwart",
    },
    {
      title: "Tax season survival stories",
      user: "@hanna.saris",
    },
  ];

  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          textTransform: "none",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "150%",
          height: "20px",
          color: "#333",
          cursor: "pointer",
          padding: "0",
          margin: "24px",
          display: "flex",
          alignItems: "center",
          ":hover": {
            backgroundColor: "#F2F2F2",
          },
        }}
      >
        <Box
          sx={{ width: "16px", height: "16px", marginRight: "2px" }}
          component="img"
          src={arrowLeftGreyIcon}
          alt="arrow left"
        />
        Back
      </Button>
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
            alignSelf: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
              Asset Allocation Techniques
            </Typography>
            <Link to={"/community/forum/newpost"}>
              <CustomButton kind="dark" text="Create a Post" width={152} height={40} />
            </Link>
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
              justifyContent: "flex-start",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#333" }}>
              Popular Prompts
            </Typography>
          </Box>

          <Box sx={{ marginTop: "8px" }}>
            {recentThreads.map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    borderRadius: "12px",
                    padding: "12px",
                    width: "288px",
                    background: "#f6f6f6",
                    marginTop: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{ width: "56px", height: "56px" }}
                    component="img"
                    src={themeIcon}
                    alt="theme icon"
                  />

                  <Box sx={{ display: "flex", flexDirection: "column", width: "195px" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>{item.title}</Typography>
                    <Box
                      sx={{
                        fontWeight: 500,
                        fontSize: "12px",
                        color: "#828282",
                        lineHeight: "167%",
                      }}
                      component={Link}
                      to={""}
                    >
                      {item.user}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};
