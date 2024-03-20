import { Box, Typography, Avatar } from "@mui/material";

import avatarIcon from "../../../img/settings/avatar.png";
import { CustomButton } from "../../app/common/buttons";
import { FormInput } from "../../app/common/inputs";

export const PublicProfile = () => {
  return (
    <Box
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
        <CustomButton
          kind="dark"
          text="Upload New Photo"
          sx={{
            borderRadius: "999px",
            width: "170px",
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
          <FormInput label="Username" name="username" width={326} />
          <FormInput label="Job Role" name="jobRole" required={false} width={326} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormInput label="First Name" name="firstName" width={326} />
          <FormInput label="Last Name" name="lastName" width={326} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormInput label="Location" name="location" required={false} width={326} />
          <FormInput label="Personal Website" name="personalSite" required={false} width={326} />
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
      />

      <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
        <CustomButton
          kind="dark"
          text="Save Profile"
          sx={{
            width: "170px",
            height: "48px",
            fontSize: "14px",
          }}
        />
      </Box>
    </Box>
  );
};
