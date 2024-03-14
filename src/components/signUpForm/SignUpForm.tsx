import { useState } from "react";
import { Typography, TextField, InputLabel, Box, Link } from "@mui/material";
import { CustomButton } from "../CustomButton";
import help from "../../resources/login/help.png";

import "./signUpForm.scss";

export const SignUpForm = () => {
  const [communityChecked, setCommunityChecked] = useState(false);
  const [registeredChecked, setRegisteredChecked] = useState(false);

  return (
    <Box component="form" noValidate autoComplete="off">
      {/* inputs emeil and password */}

      <InputLabel
        sx={{
          marginTop: "24px",
          marginBottom: "4px",
          display: "flex",
          alignItems: "end",
          color: "#000000",
          marginRight: "4px",
          fontWeight: 500,
          lineHeight: "16px",
        }}
        htmlFor="email"
      >
        Email
        <Typography
          sx={{
            marginLeft: "4px",
            color: "#828282",
            fontSize: "12px",
            lineHeight: "12px",
          }}
        >
          required
        </Typography>
      </InputLabel>
      <TextField fullWidth id="email" variant="outlined" defaultValue="" />

      <InputLabel
        sx={{
          marginTop: "24px",
          marginBottom: "4px",
          display: "flex",
          alignItems: "end",
          color: "#000000",
          marginRight: "4px",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "16px",
        }}
        htmlFor="password"
      >
        Password
        <Typography
          sx={{
            color: "#828282",
            marginLeft: "4px",
            fontSize: "12px",
            lineHeight: "12px",
          }}
        >
          required
        </Typography>
      </InputLabel>
      <TextField fullWidth id="password" variant="outlined" defaultValue="" />

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
          <Box sx={{ display: "flex", justifyContent: "space-between" }} className="wrapper"></Box>

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
