import { useState, FormEvent } from "react";
import { Typography, Box } from "@mui/material";

import { FormInput } from "../../app/common/inputs";
import { CustomButton } from "../../app/common/buttons";

interface ILogInForgotPass {
  handleChangeSubpage: (nextpage: string) => void;
  handleChangeEmailSent: (emailSent: string) => void;
}

export const LogInForgotPass = ({
  handleChangeSubpage,
  handleChangeEmailSent,
}: ILogInForgotPass) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`email: ${email}`);
    handleChangeEmailSent(email);
    handleChangeSubpage("LogInEmailSent");
  };

  return (
    <Box
      component="form"
      className="logIn__form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "40px",
        }}
      >
        Forgot Password?
      </Typography>
      <FormInput
        label="Email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        marginTop={24}
      />
      <CustomButton
        text="Request a Reset Link"
        kind="dark"
        type="submit"
        sx={{ marginTop: "24px" }}
      />
      <Box
        sx={{
          marginTop: "12px",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          textAlign: "center",
          textDecoration: "none",
          color: "#2F80ED",
          cursor: "pointer",
        }}
        onClick={() => {
          handleChangeSubpage("LogInForm");
        }}
      >
        Back to Log In
      </Box>
    </Box>
  );
};