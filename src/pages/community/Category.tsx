import {
  Avatar,
  Box,
  Button,
  Divider,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/app/common/buttons";
import { RatingCounter } from "../../components/community/ratingCounter";

import arrowLeftGreyIcon from "../../img/community/leftArrowGrey.svg";
import themeIcon from "../../img/community/themeIcom.png";
import avatarIcon from "../../img/navigation/avatar.png";
import commentsIcon from "../../img/community/comments.svg";
import paginationLeftArrowIcon from "../../img/community/paginationLeftArrow.svg";
import paginationRightArrowIcon from "../../img/community/paginationRightArrow.svg";

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

  const posts = [
    {
      avatar: avatarIcon,
      userName: "@dabis.botosh",
      lastUpdate: "Last post 4h ago",
      title: "Sharing My Experience: Fine-Tuning Asset Allocation for Consistent Growth",
      text: "Hey everyone! I've been on a journey to optimize my asset allocation strategy for steady growth in my portfolio. Over the past few years, I've experimented with various asset mixes, rebalancing techniques, and risk management approaches...",
      rating: 110,
      comments: 110,
    },
    {
      avatar: avatarIcon,
      userName: "@dabis.botosh",
      lastUpdate: "Last post 4h ago",
      title: "Sharing My Experience: Fine-Tuning Asset Allocation for Consistent Growth",
      text: "Hey everyone! I've been on a journey to optimize my asset allocation strategy for steady growth in my portfolio. Over the past few years, I've experimented with various asset mixes, rebalancing techniques, and risk management approaches...",
      rating: 110,
      comments: 110,
    },
    {
      avatar: avatarIcon,
      userName: "@dabis.botosh",
      lastUpdate: "Last post 4h ago",
      title: "Sharing My Experience: Fine-Tuning Asset Allocation for Consistent Growth",
      text: "Hey everyone! I've been on a journey to optimize my asset allocation strategy for steady growth in my portfolio. Over the past few years, I've experimented with various asset mixes, rebalancing techniques, and risk management approaches...",
      rating: 110,
      comments: 110,
    },
    {
      avatar: avatarIcon,
      userName: "@dabis.botosh",
      lastUpdate: "Last post 4h ago",
      title: "Sharing My Experience: Fine-Tuning Asset Allocation for Consistent Growth",
      text: "Hey everyone! I've been on a journey to optimize my asset allocation strategy for steady growth in my portfolio. Over the past few years, I've experimented with various asset mixes, rebalancing techniques, and risk management approaches...",
      rating: 110,
      comments: 110,
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
              Asset Allocation Techniques
            </Typography>
            <Link to={"/community/forum/newpost"}>
              <CustomButton kind="dark" text="Create a Post" width={152} height={40} />
            </Link>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {posts.map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "16px",
                    backgroundColor: "#f2f2f2",
                    marginTop: "8px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="avatar"
                      src={item.avatar}
                      sx={{ marginRight: "12px", maxWidth: "24px", maxHeight: "24px" }}
                    />
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}>
                      {item.userName}
                    </Typography>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ height: "7px", margin: "10px 12px" }}
                    />
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", color: "#828282" }}>
                      {item.lastUpdate}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{ fontWeight: 600, fontSize: "16px", color: "#333", marginTop: "16px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 500, fontSize: "14px", color: "#333", marginTop: "12px" }}
                    >
                      {item.text}
                    </Typography>

                    <Box sx={{ display: "flex", marginTop: "16px" }}>
                      <RatingCounter
                        count={item.rating}
                        handleUpClick={() => {}}
                        handleDownClick={() => {}}
                        backgroundColor="#d6d8e1"
                        height={32}
                      />

                      <Button
                        onClick={() => {}}
                        sx={{
                          color: "#333",
                          width: "75px",
                          height: "32px",
                          borderRadius: "999px",
                          backgroundColor: "#d6d8e1",
                          marginLeft: "12px",
                          ":hover": {
                            backgroundColor: "#d6d8e1",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={commentsIcon}
                          alt="comments icon"
                          sx={{ maxHeight: "24px", maxWidth: "24px", marginRight: "4px" }}
                        />
                        <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                          {item.comments}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              kind="dark"
              text="Load more"
              clickFunction={() => {}}
              width={130}
              height={40}
              sx={{ marginTop: "24px" }}
            />
          </Box>

          <Box
            sx={{
              marginTop: "16px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={3}>
              <Pagination
                sx={{
                  "& li .Mui-selected": {
                    backgroundColor: "#fff",
                    color: "#0a77ff",
                  },
                }}
                count={15}
                renderItem={(item) => (
                  <PaginationItem
                    sx={{
                      color: "#858c95",
                      padding: "0",
                    }}
                    slots={{
                      previous: () => (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "#333",
                              width: "80px",
                              height: "40px",
                              borderRadius: "999px",
                              backgroundColor: "#fff",
                              ":hover": {
                                backgroundColor: "#fff",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={paginationLeftArrowIcon}
                              alt="share icon"
                              sx={{ maxHeight: "24px", maxWidth: "24px", marginRight: "4px" }}
                            />
                            <Typography
                              sx={{ fontWeight: 500, fontSize: "14px", color: "#858c95" }}
                            >
                              Prev
                            </Typography>
                          </Box>
                        </>
                      ),
                      next: () => (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "16px",
                              color: "#333",
                              width: "80px",
                              height: "40px",
                              borderRadius: "999px",
                              backgroundColor: "#fff",
                              ":hover": {
                                backgroundColor: "#fff",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 500,
                                fontSize: "14px",
                                marginRight: "4px",
                                color: "#858c95",
                              }}
                            >
                              Next
                            </Typography>
                            <Box
                              component="img"
                              src={paginationRightArrowIcon}
                              alt="share icon"
                              sx={{ maxHeight: "24px", maxWidth: "24px" }}
                            />
                          </Box>
                        </>
                      ),
                    }}
                    {...item}
                  />
                )}
              />
            </Stack>
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
