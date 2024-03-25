import { useState, FormEvent, ChangeEvent } from "react";
import { Typography, Box, Link } from "@mui/material";
import { CustomButton } from "../../app/common/buttons";
import { FormInput, PassValidation } from "../../app/common/inputs";
import { IUser } from "../../../shared/interfaces/auth";

import help from "../../../img/auth/help.png";

export const SignUpForm = () => {
  const [communityChecked, setCommunityChecked] = useState<boolean>(false);
  const [creationStatus, setCreationStatus] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(true);
  //const [isEmailExisting, setIsEmailExisting] = useState<boolean>(false);
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
        // error={isEmailExisting}
      />
      {/* {isEmailExisting && (
        <Typography sx={{ fontSize: "14px", color: "red" }}>It's email already existing</Typography>
      )} */}

      <FormInput
        value={formData.password}
        onChange={handleChange}
        label="Password"
        showPasswordToggler
        name="password"
      />

      {/* validation mark */}

      <PassValidation
        value={formData.password}
        email={formData.email}
        setInputError={setInputError}
      />

      {/* agreement to join community */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "24px",
          margin: "24px 0",
        }}
      >
        <Box
          sx={{
            width: "16px",
            height: "16px",
            borderRadius: "4px",
            backgroundColor: `${communityChecked ? "#2F80ED" : "#E0E0E0"}`,
            position: "relative",
            cursor: "pointer",
            color: `${communityChecked ? "#fff" : "inherit "}`,
          }}
          onClick={() => setCommunityChecked(!communityChecked)}
        >
          <Box
            sx={{
              height: "12px",
              width: "12px",
              left: "1px",
              top: "2px",
              lineHeight: "12px",
              position: "absolute",
              color: "#E0E0E0",
              backgroundColor: "inherit",
              userSelect: "none",
            }}
            className="checkbox-checkmark"
          >
            &#10003;
          </Box>
          <Box
            component="input"
            sx={{ width: "16px", height: "16px", visibility: "hidden" }}
            type="checkbox"
            defaultChecked={communityChecked}
          />
        </Box>
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
        <Link
          sx={{
            marginRight: "4px",
            color: "#1976D2",
            ":hover": {
              color: "#1976D2",
            },
          }}
          underline="hover"
          href="#"
        >
          AdvisorZen Community
        </Link>
        <Box component="img" sx={{ width: "16px", height: "16px", cursor: "pointer" }} src={help} />
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
            <Box
              sx={{
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                backgroundColor: `${formData.isRegistered ? "#2F80ED" : "#E0E0E0"}`,
                position: "relative",
                cursor: "pointer",
                color: `${formData.isRegistered ? "#fff" : "inherit "}`,
              }}
              onClick={handleChangeCheckbox}
            >
              <Box
                sx={{
                  height: "12px",
                  width: "12px",
                  left: "1px",
                  top: "2px",
                  lineHeight: "12px",
                  position: "absolute",
                  color: "#E0E0E0",
                  backgroundColor: "inherit",
                  userSelect: "none",
                }}
                className="checkbox-checkmark"
              >
                &#10003;
              </Box>
              <Box
                component="input"
                sx={{ width: "16px", height: "16px", visibility: "hidden" }}
                type="checkbox"
                checked={formData.isRegistered}
                onChange={handleChange}
              />
            </Box>
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
            <Box
              component="img"
              sx={{ width: "16px", height: "16px", cursor: "pointer" }}
              src={help}
            />
          </Box>
        </>
      )}

      {/* create account button */}

      <CustomButton
        text="Create Account"
        clickFunction={() => console.log(formData)}
        kind="dark"
        type="submit"
        disabled={creationStatus || inputError}
      />
    </Box>
  );
};
