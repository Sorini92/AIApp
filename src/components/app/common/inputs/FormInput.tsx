import { useState } from "react";
import {
	InputLabel,
	Typography,
	OutlinedInput,
	InputAdornment,
	IconButton,
	CardMedia,
} from "@mui/material";

import visibility from "../../../../img/auth/visibility.png";
import visibilityOff from "../../../../img/auth/visibilityOff.png";
import "./inputs.scss";

interface IFormInput {
	label: string;
	required?: boolean;
	showPasswordToggler: boolean;
  width?: string | number;
  height?: string | number;
}

export const FormInput = ({
	label,
	required = true,
	showPasswordToggler = false,
  width = "100%",
  height = "48px",
}: IFormInput) => {
	const [showPassword, setShowPassword] = useState(false);
	// const [email, setEmail] = useState("");

	const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
	// 	event: React.MouseEvent<HTMLButtonElement>
	// ) => {
	// 	event.preventDefault();
	// };

	return (
		<>
			<InputLabel
				sx={{
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
					type={showPassword ? "password" : "text"}
					sx={{
						width: {width},
						height: {height},
						borderRadius: "8px",
					}}
					endAdornment= {showPasswordToggler ? 
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
            : null
					}/>
		</>
	);
};
