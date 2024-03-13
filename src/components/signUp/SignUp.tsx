import { useState } from "react";
import TermsAndPrivacyPolicy from "../../components/termsAndPrivacyPolicy/TermsAndPrivacyPolicy";
import SignUpBtns from "../signUpBtns/SignUpBtns";
import SignUpForm from "../signUpForm/SignUpForm";
import "./signUp.scss";

const SignUp = () => {
    const [isCreation, setIsCreation] = useState(false);

    return (
        <>
            <div className="signup__title">
                <div className="signup__title-header">Sign Up</div>
                <div className="signup__title-text">
                    Create an account to access the best AI helper for finance advisors.
                </div>
            </div>

            {isCreation ? <SignUpForm /> : <SignUpBtns setIsCreation={setIsCreation} />}

            <TermsAndPrivacyPolicy />
        </>
    );
};

export default SignUp;
