import { Box, TextField, Typography } from "@mui/material";
import { CustomButton } from "../../components/app/common/buttons";
import { useNavigate } from "react-router-dom";

import leftArrowIcon from "../../img/community/leftArrow.svg";
import {
  attachIcon,
  attachImageIcon,
  boldTextIcon,
  caseIcon,
  dottedListIcon,
  italicTextIcon,
  numerousListIcon,
  paragraphtIcon,
  quotesIcon,
  smileIcon,
  underlineIcon,
} from "../../img/community/createPost";

export const NewPost = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          height: "56px",
          width: "100%",
          backgroundColor: "#fff",
          padding: "8px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton
            clickFunction={() => navigate(-1)}
            kind="transparent"
            text=""
            width={94}
            height={40}
            sx={{ marginRight: "24px" }}
          >
            <Box component="img" src={leftArrowIcon} />
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>Back</Typography>
          </CustomButton>
          <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>Create new Post</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton
            kind="transparent"
            text="Save as a Draft"
            width={164}
            height={40}
            sx={{ marginRight: "12px" }}
          />
          <CustomButton kind="dark" text="Publish" width={104} height={40} />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}
      >
        <Box sx={{ width: "840px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="New post title here..."
            sx={{
              width: "100%",
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: 40,
                fontWeight: 600,
                height: "48px",
              },
            }}
          />

          <Box
            sx={{
              height: "40px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "24px 0",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{
                  border: "none",
                  width: "72px",
                  height: "40px",
                  backgroundColor: "#fff",
                  marginRight: "4px",
                }}
              >
                <Box component="img" src={attachImageIcon} alt="attach image" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "72px", height: "40px", backgroundColor: "#fff" }}
              >
                <Box component="img" src={attachIcon} alt="attach" />
              </CustomButton>
            </Box>
            <Box>
              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={boldTextIcon} alt="make text bold icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={italicTextIcon} alt="make text italic icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={underlineIcon} alt="make text underline icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={caseIcon} alt="uppercase or lowercase icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={numerousListIcon} alt="numerious list icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={dottedListIcon} alt="dotted list icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={paragraphtIcon} alt="paragrapgh icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={quotesIcon} alt="quotes icon" />
              </CustomButton>

              <CustomButton
                clickFunction={() => {}}
                text=""
                kind="transparent"
                sx={{ border: "none", width: "40px", height: "40px", backgroundColor: "inherit" }}
              >
                <Box component="img" src={smileIcon} alt="smile icon" />
              </CustomButton>
            </Box>
          </Box>

          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Start typing here"
            sx={{
              width: "100%",
            }}
            multiline
            InputProps={{
              disableUnderline: true,
              style: {
                fontWeight: 500,
                fontSize: "16px",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};
