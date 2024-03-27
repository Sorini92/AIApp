import { useState, createRef } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../app/common/buttons";
import { InputFileUpload } from "../../app/common/inputs";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./myCropper.scss";

import stub from "../../../img/navigation/avatar.png";

const defaultSrc = stub;

export const MyCropper = () => {
  const [image, setImage] = useState(defaultSrc);
  const [isDefaultButtonClick, setIsDefaultButtonClick] = useState(false);
  const [cropData, setCropData] = useState("#");

  const cropperRef = createRef<ReactCropperElement>();

  const onChange = (e: any) => {
    e.preventDefault();
    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as any);
    };

    if (files[0] && files[0].type.match("image.*")) {
      reader.readAsDataURL(files[0]);
    }

    setIsDefaultButtonClick(false);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleUseDefault = () => {
    setImage(defaultSrc);
    setIsDefaultButtonClick(true);
  };

  return (
    <Box>
      <Box
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "16px",
          backgroundColor: " #f1f1f1",
        }}
      >
        <Cropper
          ref={cropperRef}
          style={{ height: "100%", width: "100%", maxWidth: "700px", maxHeight: "300px" }}
          zoomTo={0}
          initialAspectRatio={1}
          aspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "9px 0" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "20px", width: "50%", textAlign: "center" }}>
          Crop
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "20px", width: "50%", textAlign: "center" }}>
          Preview
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "332px",
            overflow: "hidden",
            padding: "16px",
            borderRadius: "16px",
            backgroundColor: " #f1f1f1",
          }}
        >
          <Box
            style={{ width: "100%", display: "flex", justifyContent: "center", maxHeight: "300px" }}
          >
            <img
              style={{
                objectFit: "cover",
                height: "300px",
                borderRadius: "50%",
                opacity: `${cropData === "#" ? 0 : 1}`,
              }}
              src={cropData}
              alt="cropped"
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "332px",
            overflow: "hidden",
            padding: "16px",
            borderRadius: "16px",
            backgroundColor: " #f1f1f1",
          }}
        >
          <Box
            className="img-preview"
            style={{
              width: "100%",
              height: "300px",
              overflow: "hidden",
              margin: "0 auto",
              borderRadius: "50%",
              maxHeight: "300px",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: "12px", display: "flex", justifyContent: "flex-start" }}>
        <InputFileUpload
          name="Upload"
          onChange={onChange}
          isDefaultButtonClick={isDefaultButtonClick}
        />
        <CustomButton
          kind="transparent"
          text="Crop Image"
          clickFunction={getCropData}
          height={40}
          width={150}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
        <CustomButton
          kind="transparent"
          text="Use default img"
          clickFunction={handleUseDefault}
          height={40}
          width={180}
        />
        <CustomButton kind="dark" text="Save" clickFunction={() => {}} height={40} width={100} />
      </Box>
    </Box>
  );
};
