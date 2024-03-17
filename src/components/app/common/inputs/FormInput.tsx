import { useState } from "react";
import {
	InputLabel,
	Typography,
	OutlinedInput,
	InputAdornment,
	IconButton,
	CardMedia,
	Box,
} from "@mui/material";

import { IFormInput } from "../../../../shared/interfaces/common";
import visibility from "../../../../img/auth/visibility.png";
import visibilityOff from "../../../../img/auth/visibilityOff.png";
import "./inputs.scss";

export const FormInput = ({
	label,
	required = true,
	showPasswordToggler = false,
	width = "100%",
	height = "48px",
	marginTop = "16px",
	value,
	onChange,
	name,
	sx = {},
}: IFormInput) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const defaultStyles = {
		width: typeof width === "number" ? `${width}px` : width,
		height: typeof height === "number" ? `${height}px` : height,
		borderRadius: "8px",
		...sx,
	};

	// const handleMouseDownPassword = (
	// 	event: React.MouseEvent<HTMLButtonElement>
	// ) => {
	// 	event.preventDefault();
	// };

	return (
		<Box>
			<InputLabel
				sx={{
					marginTop:
						typeof marginTop === "number" ? `${marginTop}px` : marginTop,
					marginBottom: "9px",
					display: "flex",
					alignItems: "end",
					color: "#000000",
					marginRight: "4px",
					fontWeight: 500,
					lineHeight: "16px",
				}}
				htmlFor={label}
			>
				{label}
				{required && (
					<Typography
						sx={{
							marginLeft: "8px",
							color: "#828282",
							fontSize: "12px",
							lineHeight: "13px",
						}}
					>
						required
					</Typography>
				)}
			</InputLabel>
			<OutlinedInput
				id={label}
				fullWidth
				required
				name={name}
				value={value}
				onChange={onChange}
				type={
					showPasswordToggler ? (showPassword ? "text" : "password") : "text"
				}
				sx={defaultStyles}
				endAdornment={
					showPasswordToggler ? (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								// onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								<CardMedia
									component="img"
									image={showPassword ? visibility : visibilityOff}
									alt="eye"
								/>
							</IconButton>
						</InputAdornment>
					) : null
				}
			/>
		</Box>
	);
};
