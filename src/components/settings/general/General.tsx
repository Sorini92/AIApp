import { Box, Typography } from "@mui/material";
import { FormInput } from "../../app/common/inputs";
import { CustomButton } from "../../app/common/buttons";

export const General = () => {
  return (
    <>
      <Box
        sx={{
          width: "716px",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#fff",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Email
        </Typography>
        <FormInput label="Email Addres" name="email" required={false} />

        {/* if email changed */}

        {/* <FormInput label="Password" name="password" required={false} />
        <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            kind="transparent"
            text="Cancel"
            sx={{
              width: "130px",
              height: "48px",
              fontSize: "14px",
              marginRight: "12px",
            }}
          />
          <CustomButton
            kind="dark"
            text="Save Changes"
            sx={{
              width: "170px",
              height: "48px",
              fontSize: "14px",
            }}
          />
        </Box> */}
      </Box>

      <Box
        sx={{
          width: "716px",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#fff",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Password
        </Typography>
        <FormInput label="Current Password" name="currentPassword" />
        <FormInput label="New Password" name="newPassword" />
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
        <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            kind="dark"
            text="Save Changes"
            sx={{
              width: "170px",
              height: "48px",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "716px",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#fff",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Delete Account
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Would you like to delete your account? Please note that you will not be able <br /> to
          recover your chat history after deleting your account.
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            textDecoration: "underline",
            textDecorationSkipInk: "none",
            color: "#eb5757",
            cursor: "pointer",
          }}
        >
          I want to delete my account
        </Typography>
      </Box>
    </>
  );
};
