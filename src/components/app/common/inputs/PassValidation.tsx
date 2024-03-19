import { useState } from "react";
import { Box } from "@mui/material";

interface IPassValidation {
	value: string;
}

export const PassValidation = ({ value }: IPassValidation) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				marginTop: "4px",
				fontSize: "14px",
				lineHeight: "20px",
				color: "#828282",
			}}
		>
			<Box className="validated">&#10003; Minimum 8 characters</Box>
			<Box>&times; Contains at least 1 uppercase</Box>
			<Box>&times; Contains at least 1 number or symbol</Box>
			<Box>&times; Cannot contain your name or email address</Box>
		</Box>
	);
};
