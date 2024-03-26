import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import { VideoItem } from "../videoItem";

import leftArrowIcon from "../../../img/community/leftArrow.svg";
import rightArrowIcon from "../../../img/community/rightArrow.svg";

interface IMyCarouselItem {
  text: string;
  videoImg: string;
  link: string;
}

interface IMyCarousel {
  items: IMyCarouselItem[];
}

export const MyCarousel = ({ items }: IMyCarousel) => {
  const chunkSize = 4;
  const arrayOfArrays: IMyCarouselItem[][] = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    arrayOfArrays.push(items.slice(i, i + chunkSize));
  }

  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      indicators={false}
      animation="slide"
      cycleNavigation={false}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          borderRadius: "100%",
          width: "56px",
          height: "56px",
          boxShadow: "0 4px 13px 0 rgba(0, 0, 0, 0.15)",
          marginRight: "-10px",
          marginLeft: "-15px",
        },
      }}
      sx={{
        height: "276px",
      }}
      NextIcon={<Box component="img" alt="rightArrow" src={rightArrowIcon} />}
      PrevIcon={<Box component="img" alt="leftArrow" src={leftArrowIcon} />}
    >
      {arrayOfArrays.map((slide, i) => (
        <Box key={i} sx={{ display: "flex", justifyContent: "flex-start" }}>
          {slide.map((item, j) => (
            <VideoItem key={j} text={item.text} videoImg={item.videoImg} link={item.link} />
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
