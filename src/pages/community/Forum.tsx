import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

import themeIcon from "../../img/community/themeIcom.png";
import { CheckboxButton } from "../../components/app/common/buttons/CheckboxButton";

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
            component="form"
            sx={{
              display: "flex",
              width: "535px",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <CheckboxButton
              name="all"
              isChecked={checkBoxes.all}
              onChangeFunc={handleCheckBoxChange}
              text="All"
            />

            <CheckboxButton
              name="wellness"
              isChecked={checkBoxes.wellness}
              onChangeFunc={handleCheckBoxChange}
              text="Wellness"
              width={120}
            />

            <CheckboxButton
              name="investment"
              isChecked={checkBoxes.investment}
              onChangeFunc={handleCheckBoxChange}
              text="Investment"
              width={135}
            />

            <CheckboxButton
              name="financial"
              isChecked={checkBoxes.financial}
              onChangeFunc={handleCheckBoxChange}
              text="Financial Planning"
              width={190}
            />
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
