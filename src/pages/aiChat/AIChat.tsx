import { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";

import { AIChatHeader } from "../../components/aiChat/aiChatHeader";
import { CustomButton } from "../../components/app/common/buttons";
import { CustomModal } from "../../components/app/common/modal";
import avatarIcon from "../../img/aiChat/avatarIcon.svg";
import close from "../../img/aiChat/close.svg";

export const AIChat = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

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
            clickFunction={() => {}}
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
            clickFunction={() => {}}
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
            clickFunction={() => {}}
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
            clickFunction={() => {}}
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
            clickFunction={() => {}}
            kind="dark"
            sx={{ height: "51px" }}
          />
        </Box>
      </Box>
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
              padding: "24px",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>Onboarding</Typography>
            <Box component="img" src={close}></Box>
          </Box>
          <Divider sx={{ height: "1px", width: "584px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 24px",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "16px", marginTop: "24px" }}>
              What type of financial analysis or research are you currently focusing on?
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Equities"
              sx={{
                margin: "12px 0 0 -4px",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Macroeconomic analysis"
              sx={{ margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fixed income"
              sx={{ margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<TextField placeholder="Other" />}
              sx={{ margin: "12px 0 0 -4px" }}
            />
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
              What type of financial analysis or research are you currently focusing on?
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Equities"
              sx={{ margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Macroeconomic analysis"
              sx={{ margin: "12px 0 0 -4px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<TextField placeholder="Other" />}
              sx={{ margin: "12px 0 0 -4px" }}
            />
          </Box>
          <Divider sx={{ height: "1px", width: "584px" }} />
          <Box></Box>
        </Box>
      </CustomModal>
    </>
  );
};
