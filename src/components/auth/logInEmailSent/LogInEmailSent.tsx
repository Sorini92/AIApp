import { Typography, Box } from "@mui/material";

import { CustomButton } from "../../app/common/buttons";
import { Link, useNavigate } from "react-router-dom";

/* interface ILogInEmailSent {
  handleChangeSubpage: (nextpage: string) => void;
  emailSent: string;
} */

export const LogInEmailSent = () => {
  const navigate = useNavigate();
  return (
    <Box>
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
        email@gmail
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
        <Link to={""}>
          <Typography
            sx={{
              color: "#2F80ED",
              cursor: "pointer",
              fontSize: "16px",
              ":hover": { color: "#2F80ED" },
            }}
          >
            contact support
          </Typography>
        </Link>
        &nbsp;or&nbsp;
        <Typography
          sx={{
            color: "#2F80ED",
            cursor: "pointer",
            fontSize: "16px",
            ":hover": { color: "#2F80ED" },
          }}
          onClick={() => navigate(-1)}
        >
          try another email address
        </Typography>
      </Box>

      <Box component={Link} to={"/auth/login"} sx={{ width: "100%" }}>
        <CustomButton
          text="Back to Log In"
          kind="dark"
          sx={{ marginTop: "24px" }}
          //clickFunction={() => handleChangeSubpage("LogInForgotPass")}
        />
      </Box>
    </Box>
  );
};
