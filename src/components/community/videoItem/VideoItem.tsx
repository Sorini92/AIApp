import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IVideoItem {
  text: string;
  videoImg: string;
  link: string;
}

export const VideoItem = ({ text, videoImg, link }: IVideoItem) => {
  return (
    <Box
      component={Link}
      to={link}
      sx={{
        borderRadius: "12px",
        padding: "16px",
        width: "270px",
        height: "260px",
        marginTop: "16px",
        backgroundColor: "#f1f1f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "16px",
        ":last-child": {
          marginRight: "0",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "120px",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{ width: "100%", height: "100%" }}
          component="img"
          alt="video img"
          src={videoImg}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          color: " #333",
          marginTop: "12px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
