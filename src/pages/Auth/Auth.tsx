import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SignUp from "../../components/signUp/SignUp";
import TermsAndPrivacyPolicy from "../../components/termsAndPrivacyPolicy/TermsAndPrivacyPolicy";

const Auth = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box
                sx={{
                    padding: "48px",
                    backgroundColor: "#fff",
                    width: "560px",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab
                            sx={{ width: "232px", fontFamily: "'Inter', sans-serif" }}
                            label="Sign Up"
                        />
                        <Tab
                            sx={{ width: "232px", fontFamily: "'Inter', sans-serif" }}
                            label="Log In"
                        />
                    </Tabs>
                </Box>

                <Box>{value ? <div>login</div> : <SignUp />}</Box>

                <TermsAndPrivacyPolicy />
            </Box>
        </Box>
    );
};

export default Auth;
