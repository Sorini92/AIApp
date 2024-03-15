import { FormEvent, useState } from "react";
import { Typography, Box, Link, Button } from "@mui/material";

import { FormInput } from "../app/common/inputs/FormInput";
import "./logIn.scss";

export const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	console.log(email);
	console.log(password);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<>
			<Typography
				sx={{
					marginBottom: "8px",
					fontFamily: "Inter",
					fontStyle: "normal",
					fontWeight: "600",
					fontSize: "32px",
					lineHeight: "40px",
					color: "#000000",
				}}
			>
				Log In
			</Typography>
			<Box
				component="form"
				className="logIn__form"
				onSubmit={handleSubmit}
				noValidate
				autoComplete="off"
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormInput
					label="Email"
					required={false}
					showPasswordToggler={false}
					marginTop="24px"
					value={email}
					onChange={handleEmailChange}
				/>

				<FormInput
					label="Password"
					required={false}
					showPasswordToggler={true}
					value={password}
					onChange={handlePasswordChange}
				/>

				<Link
					href="#"
					variant="body2"
					sx={{
						margin: "4px 0 24px 0",
						fontFamily: "Inter",
						fontStyle: "normal",
						fontWeight: "400",
						fontSize: "14px",
						lineHeight: "20px",
						textDecoration: "none",
						color: "#2F80ED",
					}}
				>
					Forgot password?
				</Link>

				<Button
					type="submit"
					variant="contained"
					sx={{
						fontFamily: "Inter",
						fontStyle: "normal",
						fontWeight: "500",
						fontSize: "16px",
						lineHeight: "24px",
						color: "#FFFFFF",
						height: "56px",
						background: "#454545",
						borderRadius: "8px",
					}}
				>
					Sing In
				</Button>
			</Box>
		</>
	);
};
