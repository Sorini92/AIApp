import { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Button,
  OutlinedInput,
} from "@mui/material";

import { AIChatHeader } from "../../components/aiChat/aiChatHeader/AIChatHeader";
import { CustomButton } from "../../components/app/common/buttons";
import { CustomModal } from "../../components/app/common/modal";
import avatarIcon from "../../img/aiChat/avatarIcon.svg";
import close from "../../img/aiChat/close.svg";

export const AIChat = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <AIChatHeader />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "32px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Let’s start your first chat
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "18px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Choose your chat partner
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "28px 12px",
        }}
      >
        {/* Item 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
            margin: "12px",
            padding: "24px",
            width: "368px",
            height: "323px",
            background: "#FFFFFF",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={avatarIcon} sx={{ width: "56px", height: "56px" }} />
              <Typography
                sx={{
                  marginLeft: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineGeight: "125%",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                James, The Practice Management Guru
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                margin: "24px 0 0 24px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Help in drafting client emails, newsletters and educational content.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Create templates, agendas and scripts for effective and efficient client meetings.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Create and implement a plan to build your professional network in your local area
              </Box>
            </Box>
          </Box>
          <CustomButton
            text="Start chat with James"
            clickFunction={() => setIsOpenModal(true)}
            kind="dark"
            sx={{ height: "51px" }}
          />
        </Box>

        {/* Item 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
            margin: "12px",
            padding: "24px",
            width: "368px",
            height: "323px",
            background: "#FFFFFF",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={avatarIcon} sx={{ width: "56px", height: "56px" }} />
              <Typography
                sx={{
                  marginLeft: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineGeight: "125%",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                John, <br />
                the Research Analyst
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                margin: "24px 0 0 24px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Dashboard showing whether important ETFs are technically bullish, bearish or
                neutral.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Craft white papers, research reports, trade notes and market analysis.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Conducts in-depth research, delivers insights and articulates findings.
              </Box>
            </Box>
          </Box>
          <CustomButton
            text="Start chat with John"
            clickFunction={() => setIsOpenModal(true)}
            kind="dark"
            sx={{ height: "51px" }}
          />
        </Box>

        {/* Item 3 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
            margin: "12px",
            padding: "24px",
            width: "368px",
            height: "323px",
            background: "#FFFFFF",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={avatarIcon} sx={{ width: "56px", height: "56px" }} />
              <Typography
                sx={{
                  marginLeft: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineGeight: "125%",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Olivia, <br />
                The Ghost Writer / Journalist
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                margin: "24px 0 0 24px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Write articles and press releases for various publications.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Craft talking points on trending topics to pitch to Journalists and TV Producers.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Communicate to your network about industry trends and regulatory updates.
              </Box>
            </Box>
          </Box>
          <CustomButton
            text="Start chat with Olivia"
            clickFunction={() => setIsOpenModal(true)}
            kind="dark"
            sx={{ height: "51px" }}
          />
        </Box>

        {/* Item 4 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
            margin: "12px",
            padding: "24px",
            width: "368px",
            height: "323px",
            background: "#FFFFFF",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={avatarIcon} sx={{ width: "56px", height: "56px" }} />
              <Typography
                sx={{
                  marginLeft: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineGeight: "125%",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Rayna, <br />
                the SMM & Content Strategist
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                margin: "24px 0 0 24px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Brainstorm content ideas based on what’s trending now.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Create engaging SM campaigns across various platforms.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Develop content strategies and editorial calendars.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Build brand awareness
              </Box>
            </Box>
          </Box>
          <CustomButton
            text="Start chat with Rayna"
            clickFunction={() => setIsOpenModal(true)}
            kind="dark"
            sx={{ height: "51px" }}
          />
        </Box>

        {/* Item 5 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
            margin: "12px",
            padding: "24px",
            width: "368px",
            height: "323px",
            background: "#FFFFFF",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="avatar" src={avatarIcon} sx={{ width: "56px", height: "56px" }} />
              <Typography
                sx={{
                  marginLeft: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineGeight: "125%",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                James, Your Mindset & Communication Coach
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyleType: "disc",
                margin: "24px 0 0 24px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Sharpen communication pillars.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Dial in your mindset to help everything else fall into place.
              </Box>
              <Box component="li" sx={{ listStyleType: "disc" }}>
                Learn how to frame and ask the right questions.
              </Box>
            </Box>
          </Box>
          <CustomButton
            text="Start chat with James"
            clickFunction={() => setIsOpenModal(true)}
            kind="dark"
            sx={{ height: "51px" }}
          />
        </Box>
      </Box>

      {/* Onboarding modal */}

      <CustomModal
        open={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        width={584}
        padding={0}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "688px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 24px",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>Onboarding</Typography>
            <Button
              sx={{
                minWidth: "40px",
                height: "40px",
                padding: "0",
                borderRadius: "100%",
              }}
              onClick={() => setIsOpenModal(false)}
            >
              <Box component="img" src={close}></Box>
            </Button>
          </Box>
          <Divider sx={{ height: "1px", width: "584px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 24px",
              height: "534px",
              overflow: "auto",
            }}
          >
            {/* first question */}
            <Typography sx={{ fontWeight: 600, fontSize: "16px", margin: "24px 0 4px 0" }}>
              What type of financial analysis or research are you currently focusing on?
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Equities"
              sx={{
                height: "24px",
                margin: "12px 0 0 -4px",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Macroeconomic analysis"
              sx={{ height: "24px", margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fixed income"
              sx={{ height: "24px", margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <OutlinedInput
                  placeholder="Other"
                  name="otherTypeOfFinAnalysis"
                  sx={{
                    borderRadius: "4px",
                    width: "200px",
                    height: "40px",
                  }}
                />
              }
              sx={{
                padding: "0",
                margin: "12px 0 0 -4px",
              }}
            />
            {/* second question */}
            <Typography sx={{ fontWeight: 600, fontSize: "16px", margin: "24px 0 4px 0" }}>
              What challenges do you typically encounter during your research process?
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Data Accuracy"
              sx={{
                height: "24px",
                margin: "12px 0 0 -4px",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Time-consuming Analysis"
              sx={{ height: "24px", margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Information Overload"
              sx={{ height: "24px", margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <OutlinedInput
                  placeholder="Other"
                  name="otherChallenges"
                  sx={{
                    borderRadius: "4px",
                    width: "200px",
                    height: "40px",
                  }}
                />
              }
              sx={{
                padding: "0",
                margin: "12px 0 0 -4px",
              }}
            />
            {/* third question */}
            <Typography sx={{ fontWeight: 600, fontSize: "16px", margin: "24px 0 4px 0" }}>
              Which data sources do you rely on the most for your analysis?
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Bloomberg"
              sx={{
                height: "24px",
                margin: "12px 0 0 -4px",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Reuters"
              sx={{ height: "24px", margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Financial Statements"
              sx={{ height: "24px", margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              name="otherDataSources"
              label={
                <OutlinedInput
                  placeholder="Other"
                  sx={{
                    borderRadius: "4px",
                    width: "200px",
                    height: "40px",
                  }}
                />
              }
              sx={{
                padding: "0",
                margin: "12px 0 0 -4px",
              }}
            />
          </Box>
          <Divider sx={{ height: "1px", width: "584px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "center",
              padding: "16px",
              width: "584px",
              height: "80px",
            }}
          >
            <Button
              onClick={() => {}}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#454545",
                cursor: "pointer",
                padding: "0",
                marginRight: "24px",
                ":hover": {
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              Start without onboarding
            </Button>
            <CustomButton
              text="Apply and start"
              clickFunction={() => {}}
              kind="dark"
              width="198px"
              height={48}
            ></CustomButton>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};
