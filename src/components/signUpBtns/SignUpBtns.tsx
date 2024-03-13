import Button from "@mui/material/Button";

import "./signUpBtns.scss";

interface ISignUpBtns {
    setIsCreation: (isCreation: boolean) => void;
}

const SignUpBtns = ({ setIsCreation }: ISignUpBtns) => {
    const buttonStyle = {
        textTransform: "none",
        fontSize: 16,
        fontWeight: 500,
        marginTop: "8px",
        height: 56,
        color: "#4F4F4F",
        border: "1px solid #4F4F4F",
        ":hover": {
            backgroundColor: "#F2F2F2;",
            border: "1px solid #4F4F4F",
        },
    };

    return (
        <div className="signupBtns">
            <Button variant="outlined" sx={buttonStyle} onClick={() => setIsCreation(true)}>
                Sign Up with Email
            </Button>
            <Button variant="outlined" sx={buttonStyle}>
                Sign Up with Google
            </Button>
            <Button variant="outlined" sx={buttonStyle}>
                Sign Up with LinkedIn
            </Button>
            <Button variant="outlined" sx={buttonStyle}>
                Sign Up with Apple
            </Button>
        </div>
    );
};

export default SignUpBtns;
