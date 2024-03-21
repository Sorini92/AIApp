import { Typography, Box } from "@mui/material";

import { FormInput, PassValidation } from "../../app/common/inputs";
import { CustomButton } from "../../app/common/buttons";
import { useEffect, useRef, useState } from "react";

interface ILogInSetNewPass {
  handleChangeSubpage: (nextpage: string) => void;
}

export const LogInSetNewPass = ({ handleChangeSubpage }: ILogInSetNewPass) => {
  const [inputError, setInputError] = useState<boolean>(true);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const email = useRef<string>();
  email.current = "aaa@gmail.com";

  useEffect(() => {
    confirmNewPassword.length >= 1 ? setIsTouched(true) : null;
  }, [confirmNewPassword, newPassword]);
  console.log(confirmNewPassword === newPassword);

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

      <FormInput
        label="Password"
        name="newPassword"
        showPasswordToggler
        marginTop="24px"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <PassValidation value={newPassword} email={email.current} setInputError={setInputError} />

      <FormInput
        label="Confirm New Password"
        name="newPassword"
        showPasswordToggler
        marginTop="24px"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
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
        <Box
          sx={{
            color: isTouched ? (confirmNewPassword === newPassword ? "green" : "red") : "#828282",
          }}
        >
          {isTouched ? (confirmNewPassword === newPassword ? "\u2713" : "\u00D7") : "\u00D7"}
          &nbsp;Both passwords must match
        </Box>
      </Box>

      <CustomButton
        text="Reset Password and Log In"
        disabled={!(!inputError && confirmNewPassword === newPassword)}
        kind="dark"
        type="submit"
        sx={{ marginTop: "24px" }}
        clickFunction={() => handleChangeSubpage("LogInForm")}
      />
    </>
  );
};
