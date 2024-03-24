import { FormEvent, useState } from "react";
import { Typography, Box } from "@mui/material";

import { FormInput } from "../../app/common/inputs";
import { CustomButton } from "../../app/common/buttons";
import { Link } from "react-router-dom";

/* interface ILogInForm {
	handleChangeSubpage: (nextpage: string) => void;
} */

export const LogIn = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// const [isForgotPassword, setIsForgotPassword] = useState(false);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(`email: ${email}, password: ${password}`);
	};

	return (
		<Box>
			<Typography
				sx={{
					fontWeight: "600",
					fontSize: "32px",
					lineHeight: "40px",
				}}
			>
				Log In
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				autoComplete="off"
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormInput
					label="Email"
					required={false}
					name={"email"}
					showPasswordToggler={false}
					marginTop="24px"
					value={email}
					onChange={handleEmailChange}
				/>

				<FormInput
					label="Password"
					required={false}
					name={"password"}
					showPasswordToggler={true}
					value={password}
					onChange={handlePasswordChange}
				/>

				<Box
					component={Link}
					to={"forgotpassword"}
					sx={{
						marginTop: "4px",
						fontWeight: "400",
						fontSize: "14px",
						lineHeight: "20px",
						textDecoration: "none",
						color: "#2F80ED",
						cursor: "pointer",
						":hover": {
							color: "#2F80ED",
						},
					}}
					// onClick={() => handleChangeSubpage("LogInForgotPass")}
				>
					Forgot password?
				</Box>

				<CustomButton
					text="Sing In"
					kind="dark"
					type="submit"
					sx={{ marginTop: "24px" }}
				/>
			</Box>
		</Box>
	);
};
