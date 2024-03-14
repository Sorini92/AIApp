import { useState } from "react";
import {
	InputLabel,
	Typography,
	TextField,
	InputAdornment,
	IconButton,
	CardMedia,
} from "@mui/material";

import visibility from "./visibility.png";
import visibilityOff from "./visibilityOff.png";
import "./inputs.scss";

interface IFormInput {
	label: "";
	required: true;
	showPasswordToggler: false;
}

export const FormInput = ({
	label,
	required,
	showPasswordToggler,
}: IFormInput) => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<>
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
				htmlFor={label}
			>
				{label}
				{required && (
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
				)}
			</InputLabel>
			<TextField fullWidth id={label} variant="outlined" defaultValue="" />
		</>
	);
};
