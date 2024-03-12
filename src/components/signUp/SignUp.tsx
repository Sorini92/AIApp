import TermsAndPrivacyPolicy from "../../components/termsAndPrivacyPolicy/TermsAndPrivacyPolicy";

import "./signUp.scss";

const SignUp = () => {
    return (
        <>
            <div className="signup__title">
                <div className="signup__title-header">Sign Up</div>
                <div className="signup__title-text">
                    Create an account to access the best AI helper for finance
                    advisors.
                </div>
            </div>

            <div className="signup__btns">
                <button className="signup__btns-btn">Sign Up with Email</button>
                <button className="signup__btns-btn">
                    Sign Up with Google
                </button>
                <button className="signup__btns-btn">
                    Sign Up with LinkedIn
                </button>
                <button className="signup__btns-btn">Sign Up with Apple</button>
            </div>

            <TermsAndPrivacyPolicy />
        </>
    );
};

export default SignUp;
