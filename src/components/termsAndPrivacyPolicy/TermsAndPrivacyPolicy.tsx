import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const TermsAndPrivacyPolicy = () => {
    return (
        <Box fontSize={14} color={"#4F4F4F"}>
            By proceeding, you agree to our
            <Link href="#" underline="none">
                &nbsp;Terms&nbsp;
            </Link>
            and
            <Link href="#" underline="none">
                &nbsp;Privacy Policy&nbsp;
            </Link>
        </Box>
    );
};

export default TermsAndPrivacyPolicy;
