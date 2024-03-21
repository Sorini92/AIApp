import { Typography, Box, Link } from "@mui/material";

import { CustomButton } from "../../app/common/buttons";

interface ILogInEmailSent {
  handleChangeSubpage: (nextpage: string) => void;
  emailSent: string;
}

export const LogInEmailSent = ({ handleChangeSubpage, emailSent }: ILogInEmailSent) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "40px",
        }}
      >
        Email Sent
      </Typography>

      <Typography
        sx={{
          marginTop: "16px",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#4F4F4F",
        }}
      >
        Instructions to reset your password have been sent to
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {emailSent}
      </Typography>

      <Box
        sx={{
          marginTop: "16px",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#4F4F4F",
        }}
      >
        If you don’t recieve it, please&nbsp;
        <Link href="#" underline="hover">
          contact support
        </Link>
        &nbsp;or&nbsp;
        <Link
          underline="hover"
          component="button"
          onClick={() => handleChangeSubpage("LogInForgotPass")}
        >
          try another email address
        </Link>
      </Box>

      <CustomButton
        text="Back to Log In"
        kind="dark"
        sx={{ marginTop: "24px" }}
        clickFunction={() => handleChangeSubpage("LogInForgotPass")}
      />
    </>
  );
};
