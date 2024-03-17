import { useState, FormEvent, ChangeEvent } from "react";
import { Typography, Box, Link } from "@mui/material";
import { CustomButton } from "../app/common/buttons";
import { FormInput } from "../app/common/inputs";
import { IUser } from "../../shared/interfaces/auth";
import help from "../../img/auth/help.png";

import "./signUpForm.scss";

export const SignUpForm = () => {
  const [communityChecked, setCommunityChecked] = useState(false);
  const [creationStatus, setCreationStatus] = useState<boolean>(false);
  const [formData, setFormData] = useState<IUser>({
    email: "",
    password: "",
    userName: "",
    firstName: "",
    lastName: "",
    isRegistered: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreationStatus(true);

    setFormData({
      email: "",
      password: "",
      userName: "",
      firstName: "",
      lastName: "",
      isRegistered: false,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeCheckbox = () => {
    setFormData((prevData) => ({
      ...prevData,
      isRegistered: !formData.isRegistered,
    }));
  };

  //console.log(formData);

  return (
    <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
      {/* inputs emeil and password */}

      <FormInput
        marginTop="24px"
        value={formData.email}
        onChange={handleChange}
        label="Email"
        name="email"
      />
      <FormInput
        value={formData.password}
        onChange={handleChange}
        label="Password"
        showPasswordToggler
        name="password"
      />

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
          <FormInput
            value={formData.userName}
            onChange={handleChange}
            label="Usename"
            name="userName"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }} className="wrapper">
            <FormInput
              value={formData.firstName}
              onChange={handleChange}
              label="First Name"
              width={"226px"}
              name="firstName"
            />
            <FormInput
              value={formData.lastName}
              onChange={handleChange}
              label="Last Name"
              width={"226px"}
              name="lastName"
            />
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
              className={formData.isRegistered ? "checkbox checked" : "checkbox"}
              onClick={handleChangeCheckbox}
            >
              <div className="checkbox-checkmark">&#10003;</div>
              <input type="checkbox" checked={formData.isRegistered} onChange={handleChange} />
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
      <CustomButton
        text="Create Account"
        clickFunction={() => console.log(formData)}
        kind="dark"
        type="submit"
        disabled={creationStatus}
      />
    </Box>
  );
};
