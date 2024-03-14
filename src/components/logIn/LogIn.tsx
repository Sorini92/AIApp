import { useState, FormEvent } from "react";
import {
	InputLabel,
	Typography,
	Box,
	TextField,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Link,
	Button,
	CardMedia,
} from "@mui/material";

import visibility from "../../resources/login/visibility.png";
import visibilityOff from "../../resources/login/visibilityOff.png";
import "./logIn.scss";

export const LogIn = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

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
				<InputLabel
					sx={{
						marginTop: "24px",
						marginBottom: "4px",
						display: "flex",
						alignItems: "end",
						color: "#000000",
						marginRight: "4px",
						fontWeight: 500,
						lineHeight: "16px",
					}}
					htmlFor="email"
				>
					Email
					<Typography
						sx={{
							marginLeft: "8px",
							color: "#828282",
							fontSize: "12px",
							lineHeight: "12px",
						}}
					>
						required
					</Typography>
				</InputLabel>
				<TextField
					fullWidth
					id="email"
					variant="outlined"
					value={email}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setEmail(event.target.value);
					}}
					defaultValue=""
				/>

				{/* <Box
					component="label"
					htmlFor="email"
					sx={{
						display: "flex",
						alignItems: "end",
						margin: "16px 0 4px 0",
						fontFamily: "Inter",
						fontStyle: "normal",
						fontWeight: "500",
						fontSize: "16px",
						lineHeight: "24px",
						color: "#000000",
					}}
				>
					Email
					<Typography
						sx={{
							marginLeft: "8px",
							fontFamily: "Inter",
							fontStyle: "normal",
							fontWeight: "500",
							fontSize: "12px",
							lineHeight: "21px",
							color: "#828282",
						}}
					>
						required
					</Typography>
				</Box>
				<TextField
					id="email"
					fullWidth
					required
					type="email"
					value={email}
					
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setEmail(event.target.value);
					}}
					sx={{
						width: "464px",
						height: "48px",
						borderRadius: "81px",
					}}
				/> */}

				{/* <FormControl variant="outlined"> */}
				<Box
					component="label"
					htmlFor="outlined-adornment-password"
					sx={{
						margin: "16px 0 4px 0",
						fontFamily: "Inter",
						fontStyle: "normal",
						fontWeight: "500",
						fontSize: "16px",
						lineHeight: "24px",
						color: "#000000",
					}}
				>
					Password
				</Box>

				<OutlinedInput
					id="outlined-adornment-password"
					fullWidth
					required={true}
					type={showPassword ? "text" : "password"}
					sx={{
						width: "464px",
						height: "48px",
						borderRadius: "8px",
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								// onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								<CardMedia
									component="img"
									image={showPassword ? visibilityOff : visibility}
									alt="eye"
								/>
							</IconButton>
						</InputAdornment>
					}
				/>
				{/* </FormControl> */}

				{/* <TextField
					variant="outlined"
					fullWidth
					type={showPassword ? "text" : "password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={togglePasswordVisibility}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/> */}

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
