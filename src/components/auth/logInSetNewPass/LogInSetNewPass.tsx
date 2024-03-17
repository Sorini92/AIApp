import { Typography, Box } from "@mui/material";

import { FormInput } from "../../app/common/inputs";
import { CustomButton } from "../../app/common/buttons";
// import { CustomButton } from "../common/buttons";

export const LogInSetNewPass = () => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "40px",
        }}
      >
        Create New Password
      </Typography>

      <Typography
        sx={{
          marginTop: "16px",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#4F4F4F",
        }}
      >
        Your new password must be different from the previous password you used.
      </Typography>

      <FormInput label="Password" name="password" showPasswordToggler marginTop="24px" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "4px",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#828282",
        }}
      >
        <Box className="validated">&#10003; Minimum 8 characters</Box>
        <Box>&times; Contains at least 1 uppercase</Box>
        <Box>&times; Contains at least 1 number or symbol</Box>
        <Box>&times; Cannot contain your name or email address</Box>
      </Box>

      <FormInput
        label="Confirm New Password"
        name="newPassword"
        showPasswordToggler
        marginTop="24px"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "4px",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#828282",
        }}
      >
        <Box>&times; Both passwords must match</Box>
      </Box>

      <CustomButton
        text="Reset Password and Log In"
        kind="dark"
        type="submit"
        sx={{ marginTop: "24px" }}
        clickFunction={() => {}}
      />
    </>
  );
};
