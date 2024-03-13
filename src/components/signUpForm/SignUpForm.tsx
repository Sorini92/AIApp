import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import help from "../../resources/login/help.png";
import "./signUpForm.scss";
import { useState } from "react";

const SignUpForm = () => {
    const [communityChecked, setCommunityChecked] = useState(false);
    const [registeredChecked, setRegisteredChecked] = useState(false);

    const CustomInput = styled(InputBase)(({ theme }) => ({
        "& .MuiInputBase-input": {
            borderRadius: 8,
            position: "relative",
            backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1A2027",
            border: "1px solid #BDBDBD",
            borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
            fontSize: 16,
            padding: "10px 12px",
            transition: theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
            ]),
            "&:focus": {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));

    const buttonStyle = {
        textTransform: "none",
        fontSize: 16,
        fontWeight: 500,
        height: 56,
        color: "#fff",
        backgroundColor: "#454545",
        border: "1px solid #4F4F4F",
        marginTop: "16px",
        marginBottom: "12px",
        ":hover": {
            backgroundColor: "#828282",
            border: "1px solid #4F4F4F",
        },
    };

    return (
        <Box
            className="signupForm"
            component="form"
            sx={{
                "& > :not(style)": { width: "100%" },
            }}
            noValidate
            autoComplete="off"
        >
            <label htmlFor="email">
                Email <span>required</span>
            </label>
            <CustomInput defaultValue="" id="email" />

            <label className="signupForm__label" htmlFor="password">
                Password <span>required</span>
            </label>
            <CustomInput defaultValue="" id="password" />

            <div className="signupForm__validation">
                <div className="signupForm__validation-line validated">
                    &#10003; Minimum 8 characters
                </div>
                <div className="signupForm__validation-line">
                    &times; Contains at least 1 uppercase
                </div>

                <div className="signupForm__validation-line">
                    &times; Contains at least 1 number or symbol
                </div>
                <div className="signupForm__validation-line">
                    &times; Cannot contain your name or email address
                </div>
            </div>

            <div className="signupForm__agreemant">
                <div
                    className={
                        communityChecked
                            ? "signupForm__agreemant-checkbox checked"
                            : "signupForm__agreemant-checkbox"
                    }
                    onClick={() => setCommunityChecked(!communityChecked)}
                >
                    <div className="signupForm__agreemant-checkbox-checkmark">&#10003;</div>
                    <input type="checkbox" defaultChecked={communityChecked} />
                </div>
                <div className="signupForm__agreemant-text">
                    I want to be a part of <a href="#">AdvisorZen Community</a>
                </div>
                <img src={help} />
            </div>

            {communityChecked ? (
                <>
                    <label htmlFor="username">
                        Username <span>required</span>
                    </label>
                    <CustomInput defaultValue="" id="username" />

                    <div className="signupForm__wrapper">
                        <div>
                            <label htmlFor="firstname">
                                First name <span>required</span>
                            </label>
                            <CustomInput defaultValue="" id="firstname" />
                        </div>

                        <div>
                            <label htmlFor="lastname">
                                Last name <span>required</span>
                            </label>
                            <CustomInput defaultValue="" id="lastname" />
                        </div>
                    </div>

                    <div className="signupForm__agreemant">
                        <div
                            className={
                                registeredChecked
                                    ? "signupForm__agreemant-checkbox checked"
                                    : "signupForm__agreemant-checkbox"
                            }
                            onClick={() => setRegisteredChecked(!registeredChecked)}
                        >
                            <div className="signupForm__agreemant-checkbox-checkmark">&#10003;</div>
                            <input type="checkbox" defaultChecked={registeredChecked} />
                        </div>
                        <div className="signupForm__agreemant-text">
                            I’m Registered Investment Advisor
                        </div>
                        <img src={help} />
                    </div>
                </>
            ) : null}

            <Button variant="outlined" sx={buttonStyle}>
                Create Account
            </Button>
        </Box>
    );
};

export default SignUpForm;
