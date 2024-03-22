import { Box, IconButton, Typography } from "@mui/material";

import upRatingIcon from "../../../img/community/upRating.svg";
import downRatingIcon from "../../../img/community/downRating.svg";

interface IRatingCounter {
  count: number | undefined;
  handleUpClick: () => void;
  handleDownClick: () => void;
  backgroundColor?: string;
  height?: number;
}

export const RatingCounter = ({
  count,
  handleUpClick,
  handleDownClick,
  backgroundColor = "#d6d8e1",
  height = 28,
}: IRatingCounter) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: "999px",
        padding: "2px",
        width: "104px",
        height: height,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton sx={{ padding: "0" }} onClick={handleUpClick}>
        <img alt="up rating button" src={upRatingIcon} />
      </IconButton>
      <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>{count}</Typography>
      <IconButton sx={{ padding: "0" }} onClick={handleDownClick}>
        <img alt="down rating button" src={downRatingIcon} />
      </IconButton>
    </Box>
  );
};
