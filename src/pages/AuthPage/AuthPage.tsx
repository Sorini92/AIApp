import { useState } from "react";
import SignUp from "../../components/signUp/SignUp";

import "./authPage.scss";

const AuthPage = () => {
    const [activeTab, setIsActiveTab] = useState<"signup" | "login">("signup");

    return (
        <div className="authPageWrapper">
            <div className="authPageWrapper__modal">
                <div className="authPageWrapper__tabs">
                    <div
                        className={
                            activeTab === "signup"
                                ? "authPageWrapper__tab activeTab"
                                : "authPageWrapper__tab"
                        }
                        onClick={() => setIsActiveTab("signup")}
                    >
                        Sign Up
                    </div>
                    <div
                        className={
                            activeTab === "login"
                                ? "authPageWrapper__tab activeTab"
                                : "authPageWrapper__tab"
                        }
                        onClick={() => setIsActiveTab("login")}
                    >
                        Log In
                    </div>

                    <div
                        className="line"
                        style={
                            activeTab === "signup" ? { left: 0 } : { left: 232 }
                        }
                    ></div>
                </div>
                {activeTab === "signup" ? <SignUp /> : <div>login</div>}
            </div>
        </div>
    );
};

export default AuthPage;
