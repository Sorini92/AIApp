import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import themeIcon from "../../img/community/themeIcom.png";

type CheckBoxState = {
  [key: string]: boolean;
};

export const Forum = () => {
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxState>({
    all: true,
    wellness: false,
    investment: false,
    financial: false,
  });

  const handleCheckBoxChange = (name: string) => {
    setCheckBoxes((prevState) => {
      const updatedState = { ...prevState };

      updatedState[name] = !prevState[name];

      for (const key in updatedState) {
        if (key !== name) {
          updatedState[key] = false;
        }
      }
      return updatedState;
    });

    console.log(checkBoxes);
  };

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

  const themes = [
    {
      title: "Asset Allocation Techniques",
      timeEgo: "Last post 4h ago",
      threads: "150",
      messages: "1.5K",
    },
    {
      title: "Portfolio Diversification",
      timeEgo: "Last post 30m ago",
      threads: "90",
      messages: "1K",
    },
    {
      title: "Risk Management",
      timeEgo: "Last post 30m ago",
      threads: "12",
      messages: "980",
    },
    {
      title: "Retirement Planning",
      timeEgo: "Last post 4h ago",
      threads: "20",
      messages: "4.1K",
    },
    {
      title: "Estate Planning",
      timeEgo: "Last post 30m ago",
      threads: "52",
      messages: "200",
    },
    {
      title: "Tax Planning",
      timeEgo: "Last post 30m ago",
      threads: "204",
      messages: "10K",
    },
    {
      title: "Prospecting, Marketing, and Selling",
      timeEgo: "Last post 30m ago",
      threads: "98",
      messages: "1.2K",
    },
  ];

  return (
    <>
      <Typography sx={{ fontWeight: 600, fontSize: "24px", margin: "24px" }}>
        Community Forum
      </Typography>
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
          <Box
            component="form"
            sx={{
              display: "flex",
              width: "535px",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <Button
              sx={{
                padding: "0",
                width: "70px",
                height: "40px",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: "8px",
                color: `${checkBoxes.all ? "#fff" : "#4F4F4F"}`,
                border: `1px solid ${checkBoxes.all ? "#454545" : "#4F4F4F"}`,
                backgroundColor: `${checkBoxes.all ? "#454545" : "inherit"}`,
                ":hover": {
                  border: `1px solid ${checkBoxes.all ? "#454545" : "#4F4F4F"}`,
                  backgroundColor: `${checkBoxes.all ? "#828282" : "#F2F2F2"}`,
                },
              }}
            >
              All
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                }}
                name="all"
                component="input"
                type="checkbox"
                checked={checkBoxes.all}
                onChange={() => handleCheckBoxChange("all")}
              />
            </Button>

            <Button
              sx={{
                padding: "0",
                width: "120px",
                height: "40px",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: "8px",
                color: `${checkBoxes.wellness ? "#fff" : "#4F4F4F"}`,
                border: `1px solid ${checkBoxes.wellness ? "#454545" : "#4F4F4F"}`,
                backgroundColor: `${checkBoxes.wellness ? "#454545" : "inherit"}`,
                ":hover": {
                  border: `1px solid ${checkBoxes.wellness ? "#454545" : "#4F4F4F"}`,
                  backgroundColor: `${checkBoxes.wellness ? "#828282" : "#F2F2F2"}`,
                },
              }}
            >
              Wellness
              <Box
                sx={{ position: "absolute", width: "100%", height: "100%", opacity: 0 }}
                component="input"
                type="checkbox"
                name="wellness"
                checked={checkBoxes.wellness}
                onChange={() => handleCheckBoxChange("wellness")}
              />
            </Button>

            <Button
              sx={{
                padding: "0",
                width: "135px",
                height: "40px",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: "8px",
                color: `${checkBoxes.investment ? "#fff" : "#4F4F4F"}`,
                border: `1px solid ${checkBoxes.investment ? "#454545" : "#4F4F4F"}`,
                backgroundColor: `${checkBoxes.investment ? "#454545" : "inherit"}`,
                ":hover": {
                  border: `1px solid ${checkBoxes.investment ? "#454545" : "#4F4F4F"}`,
                  backgroundColor: `${checkBoxes.investment ? "#828282" : "#F2F2F2"}`,
                },
              }}
            >
              Investment
              <Box
                sx={{ position: "absolute", width: "100%", height: "100%", opacity: 0 }}
                component="input"
                type="checkbox"
                name="investment"
                checked={checkBoxes.investment}
                onChange={() => handleCheckBoxChange("investment")}
              />
            </Button>

            <Button
              sx={{
                padding: "0",
                width: "190px",
                height: "40px",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: "8px",
                color: `${checkBoxes.financial ? "#fff" : "#4F4F4F"}`,
                border: `1px solid ${checkBoxes.financial ? "#454545" : "#4F4F4F"}`,
                backgroundColor: `${checkBoxes.financial ? "#454545" : "inherit"}`,
                ":hover": {
                  border: `1px solid ${checkBoxes.financial ? "#454545" : "#4F4F4F"}`,
                  backgroundColor: `${checkBoxes.financial ? "#828282" : "#F2F2F2"}`,
                },
              }}
            >
              Financial Planning
              <Box
                sx={{ position: "absolute", width: "100%", height: "100%", opacity: 0 }}
                component="input"
                type="checkbox"
                name="financial"
                checked={checkBoxes.financial}
                onChange={() => handleCheckBoxChange("financial")}
              />
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {themes.map((item, i) => {
              return (
                <Link to={"category"} key={i}>
                  <Box
                    sx={{
                      width: "100%",
                      minHeight: "80px",
                      padding: "16px",
                      borderRadius: "16px",
                      backgroundColor: "#f2f2f2",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        component="img"
                        src={themeIcon}
                        alt="theme icon"
                        sx={{ marginRight: "16px", width: "56px", height: "56px" }}
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                          {item.timeEgo}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "256px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column", width: "120px" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                          {item.threads}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                          Threads
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "120px",
                        }}
                      >
                        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                          {item.messages}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#828282" }}>
                          Messages
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              );
            })}
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
