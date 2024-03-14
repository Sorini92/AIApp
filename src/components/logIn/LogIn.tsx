import { FormEvent } from "react";
import { useState } from "react";
import {
	TextField,
	Button,
	FormControl,
	Typography,
	Link,
	InputAdornment,
	IconButton,
} from "@mui/material";

import eyeClosed from "./eye-closed.png";
import eyeOpened from "./eye-opened.png";
import "./logIn.scss";

const LogIn = () => {
	const [eyeImg, setEyeImg] = useState(eyeClosed);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		// логика обработки данных из формы
	};

	const eyeImgToggle = () => {
		console.log(eyeImg);
		eyeImg == eyeClosed ? setEyeImg(eyeOpened) : setEyeImg(eyeClosed);
	};

	const inputStyle = {
		border: "1px solid #BDBDBD",
		borderRadius: "8px",
	};

	const labelStyle = {
		margin: "16px 0 4px 0",
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: "16px",
		lineHeight: "24px",
		color: "#000000",
	};

	const linkStyle = {
		margin: "4px 0 24px 0",
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: "400",
		fontSize: "14px",
		lineHeight: "20px",
		textDecoration: "none",
		color: "#2F80ED",
	};

	const buttonStyle = {
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: "16px",
		lineHeight: "24px",
		color: "#FFFFFF",
		height: "56px",
		background: "#454545",
		borderRadius: "8px",
	};

	return (
		<>
			<div className="logIn__title">Log In</div>
			<form className="logIn__form" onSubmit={handleSubmit}>
				<FormControl fullWidth>
					<Typography variant="subtitle1" gutterBottom sx={labelStyle}>
						Email
					</Typography>
					<TextField
						variant="outlined"
						fullWidth
						type="email"
						sx={inputStyle}
					/>
				</FormControl>

				<FormControl fullWidth>
					<Typography variant="subtitle1" gutterBottom sx={labelStyle}>
						Password
					</Typography>
					<TextField
						variant="outlined"
						fullWidth
						type="password"
						sx={inputStyle}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={eyeImgToggle}>
										<img
											className="eye"
											data-tooltip="eyeClosed"
											src={eyeImg}
											alt="eyeClosed"
										/>
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</FormControl>

				<Link href="#" variant="body2" sx={linkStyle}>
					Forgot password?
				</Link>
				<Button type="submit" variant="contained" sx={buttonStyle}>
					Sing In
				</Button>
			</form>
		</>
	);
};

export default LogIn;
