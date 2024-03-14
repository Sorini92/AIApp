import { useState } from "react";
import { Typography, Box, Link } from "@mui/material";
import { CustomButton } from "../app/common/buttons/CustomButton";
import help from "../../img/auth/help.png";

import "./signUpForm.scss";
import { FormInput } from "../app/common/inputs";

export const SignUpForm = () => {
  const [communityChecked, setCommunityChecked] = useState(false);
  const [registeredChecked, setRegisteredChecked] = useState(false);

  return (
    <Box component="form" noValidate autoComplete="off">
      {/* inputs emeil and password */}

      <Box
        sx={{
          marginTop: "24px",
          height: "168px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <FormInput label="Email" />
        <FormInput label="Password" showPasswordToggler />
      </Box>

      {/* validation mark */}
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

      {/* agreement to join community */}
      <Box sx={{ display: "flex", alignItems: "center", height: "24px", margin: "24px 0" }}>
        <div
          className={communityChecked ? "checkbox checked" : "checkbox"}
          onClick={() => setCommunityChecked(!communityChecked)}
        >
          <div className="checkbox-checkmark">&#10003;</div>
          <input type="checkbox" defaultChecked={communityChecked} />
        </div>
        <Typography
          sx={{
            marginLeft: "12px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            marginRight: "4px",
          }}
        >
          I want to be a part of
        </Typography>
        <Link sx={{ marginRight: "4px" }} underline="none" href="#">
          AdvisorZen Community
        </Link>
        <img className="help" src={help} />
      </Box>

      {/* render new inputs when checkbox checked */}
      {communityChecked && (
        <>
          <FormInput label="Usename" />
          <Box
            sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}
            className="wrapper"
          >
            <FormInput label="First Name" width={"226px"} />
            <FormInput label="Last Name" width={"226px"} />
          </Box>

          {/* checkbox registered advisor */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "24px",
              margin: "24px 0",
            }}
          >
            <div
              className={registeredChecked ? "checkbox checked" : "checkbox"}
              onClick={() => setRegisteredChecked(!registeredChecked)}
            >
              <div className="checkbox-checkmark">&#10003;</div>
              <input type="checkbox" defaultChecked={registeredChecked} />
            </div>
            <Typography
              sx={{
                marginLeft: "12px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                marginRight: "4px",
              }}
            >
              I’m Registered Investment Advisor
            </Typography>
            <img className="help" src={help} />
          </Box>
        </>
      )}

      {/* create account button */}
      <CustomButton text="Create Account" clickFunction={() => {}} type="dark" />
    </Box>
  );
};
