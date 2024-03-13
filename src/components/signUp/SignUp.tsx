import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SignUpBtns from "../signUpBtns/SignUpBtns";
import SignUpForm from "../signUpForm/SignUpForm";

const SignUp = () => {
    const [isCreation, setIsCreation] = useState(false);

    return (
        <>
            <Box sx={{ flexDirection: "column" }}>
                <Typography
                    sx={{
                        fontSize: "32px",
                        fontWeight: "600",
                        marginBottom: "8px",
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    Sign Up
                </Typography>
                <Typography
                    sx={{ fontWeight: "400px", fontSize: "px", fontFamily: "'Inter', sans-serif" }}
                >
                    Create an account to access the best AI helper for finance advisors.
                </Typography>
            </Box>

            {isCreation ? <SignUpForm /> : <SignUpBtns setIsCreation={setIsCreation} />}
        </>
    );
};

export default SignUp;
