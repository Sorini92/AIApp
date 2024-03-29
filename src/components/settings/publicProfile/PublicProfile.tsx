import { useState, ChangeEvent, FormEvent } from "react";
import { Box, Typography, Avatar, Link } from "@mui/material";
import { CustomButton } from "../../app/common/buttons";
import { FormInput } from "../../app/common/inputs";
import { IPublicProfileUser } from "../../../shared/interfaces/settings";
import { CustomModal } from "../../app/common/modal";
import { MyCropper } from "../myCropper";

import avatarIcon from "../../../img/settings/avatar.png";
import closeBtn from "../../../img/common/close.svg";

/* interface FileState {
  file: File | null;
  imagePreviewUrl: ArrayBuffer | string | null;
} */

export const PublicProfile = () => {
  const [creationStatus, setCreationStatus] = useState<boolean>(false);
  //const [file, setFile] = useState<FileState>({ file: null, imagePreviewUrl: "" });
  const [formData, setFormData] = useState<IPublicProfileUser>({
    userName: "",
    firstName: "",
    lastName: "",
    jobRole: "",
    location: "",
    personalSite: "",
    biography: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreationStatus(true);

    setFormData({
      userName: "",
      firstName: "",
      lastName: "",
      jobRole: "",
      location: "",
      personalSite: "",
      biography: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /* const handleChangeFoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.onloadend = () => {
        setFile({ file: file, imagePreviewUrl: reader.result });
      };

      reader.readAsDataURL(file);
    }
  }; */

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "716px",
        height: "680px",
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "120%",
          color: "#333",
        }}
      >
        Public Profile
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "80px",
          margin: "24px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar"
          src={avatarIcon}
          sx={{ width: "80px", height: "80px", marginRight: "24px" }}
        />
        {/* <InputFileUpload name="avatar" onChange={handleChangeFoto} /> */}
        <CustomButton
          clickFunction={() => handleOpen()}
          kind="dark"
          text="Upload New Foto"
          sx={{
            borderRadius: "999px",
            width: "173px",
            height: "40px",
            fontSize: "14px",
            marginRight: "12px",
          }}
        />
        <CustomButton
          kind="transparent"
          text="Delete"
          sx={{ borderRadius: "999px", width: "92px", height: "40px", fontSize: "14px" }}
        />
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormInput
            label="Username"
            name="userName"
            width={326}
            onChange={handleChange}
            value={formData.userName}
          />
          <FormInput
            label="Job Role"
            name="jobRole"
            required={false}
            width={326}
            onChange={handleChange}
            value={formData.jobRole}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormInput
            label="First Name"
            name="firstName"
            width={326}
            onChange={handleChange}
            value={formData.firstName}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            width={326}
            onChange={handleChange}
            value={formData.lastName}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormInput
            label="Location"
            name="location"
            required={false}
            width={326}
            onChange={handleChange}
            value={formData.location}
          />
          <FormInput
            label="Personal Website"
            name="personalSite"
            required={false}
            width={326}
            onChange={handleChange}
            value={formData.personalSite}
          />
        </Box>
      </Box>

      <FormInput
        label="Bio"
        name="biography"
        required={false}
        multiline
        rows={4}
        height={104}
        placeholder="Write a short introduction"
        onChange={handleChange}
        value={formData.biography}
      />

      <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
        <CustomButton
          kind="dark"
          text="Save Profile"
          type="submit"
          disabled={creationStatus}
          clickFunction={() => console.log(formData)}
          sx={{
            width: "170px",
            height: "48px",
            fontSize: "14px",
          }}
        />
      </Box>

      <CustomModal open={open} handleClose={handleClose} width={750}>
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
              marginBottom: "12px",
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "20px", lineHeight: "120%", color: "#333" }}
            >
              Change foto
            </Typography>
            <Link
              component="button"
              onClick={() => handleClose()}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                backgroundColor: "#f1f1f1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component="img" src={closeBtn} alt="close btn" />
            </Link>
          </Box>
          <MyCropper />
        </>
      </CustomModal>
    </Box>
  );
};
