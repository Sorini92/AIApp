import { useState } from "react";

import { LogInForm } from "../logInForm";
import { LogInForgotPass } from "../logInForgotPass";
import { LogInEmailSent } from "../logInEmailSent";
// import { LogInSetNewPass } from "../app/logInSetNewPass";

export const LogIn = () => {
	const [subpage, setSubpage] = useState("LogInForm");
	const [emailSent, setEmailSent] = useState("");

	// const handleChangeSubpage = (nextpage: string) => {
	// 	setSubpage(nextpage);
	// };

	return (
		<>
			{subpage === "LogInForm" ? (
				<LogInForm handleChangeSubpage={setSubpage} />
			) : null}
			{subpage === "LogInForgotPass" ? (
				<LogInForgotPass
					handleChangeSubpage={setSubpage}
					handleChangeEmailSent={setEmailSent}
				/>
			) : null}
			{subpage === "LogInEmailSent" ? (
				<LogInEmailSent
					handleChangeSubpage={setSubpage}
					emailSent={emailSent}
				/>
			) : null}
			{/* {subpage === "LogInSetNewPass" ? (
				<LogInSetNewPass handleChangeSubpage={handleChangeSubpage} />
			) : null} */}
		</>
	);
};
