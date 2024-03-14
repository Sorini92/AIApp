import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../CustomButton";
import SignUpForm from "../signUpForm/SignUpForm";

const SignUp = () => {
  const [isCreation, setIsCreation] = useState(false);

  const handleClickCreationNewAccount = () => {
    setIsCreation(!isCreation);
  };

  return (
    <>
      <Box sx={{ flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          Sign Up
        </Typography>
        <Typography sx={{ fontWeight: "400px", fontSize: "px" }}>
          Create an account to access the best AI helper for finance advisors.
        </Typography>
      </Box>

      {isCreation ? (
        <SignUpForm />
      ) : (
        <Box
          sx={{
            marginTop: "24px",
            display: "flex",
            height: "248px",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <CustomButton
            text={"Sign Up with Email"}
            clickFunction={handleClickCreationNewAccount}
            type="transperent"
          />
          <CustomButton text={"Sign Up with Google"} clickFunction={() => {}} type="transperent" />
          <CustomButton
            text={"Sign Up with LinkedIn"}
            clickFunction={() => {}}
            type="transperent"
          />
          <CustomButton text={"Sign Up with Apple"} clickFunction={() => {}} type="transperent" />
        </Box>
      )}
    </>
  );
};

export default SignUp;
