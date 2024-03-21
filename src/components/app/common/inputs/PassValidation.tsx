// import * as yup from "yup";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface IPassValidation {
	value: string;
	email: string;
	setInputError: (isError: boolean) => void;
}

export const PassValidation = ({
	value,
	email,
	setInputError,
}: IPassValidation) => {
	const [isEnoughChar, setIsEnoughChar] = useState<boolean>(false);
	const [isEnoughUppercase, setIsEnoughUppercase] = useState<boolean>(false);
	const [isEnoughNumOrSymb, setIsEnoughNumOrSymb] = useState<boolean>(false);
	const [isContainNameOrEmail, setIsContainNameOrEmail] =
		useState<boolean>(false);
	const [isTouched, setIsTouched] = useState<boolean>(false);

	const validationItemsData = [
		{
			validation: isEnoughChar,
			text: "Minimum 8 characters",
		},
		{
			validation: isEnoughUppercase,
			text: "Contains at least 1 uppercase",
		},
		{
			validation: isEnoughNumOrSymb,
			text: "Contains at least 1 number or symbol",
		},
		{
			validation: isContainNameOrEmail,
			text: "Cannot contain your name or email address",
		},
	];

	const checkAmountOfChar = () => {
		value.length >= 1 ? setIsTouched(true) : null;

		if (isTouched) {
			value.length >= 8 ? setIsEnoughChar(true) : setIsEnoughChar(false);

			/[A-Z]/.test(value)
				? setIsEnoughUppercase(true)
				: setIsEnoughUppercase(false);

			/[0-9!@#$%^&*()_+{}\[\]:;<>,.?\/\\|~-]/.test(value)
				? setIsEnoughNumOrSymb(true)
				: setIsEnoughNumOrSymb(false);

			!value.toLowerCase().includes(email.toLowerCase())
				? setIsContainNameOrEmail(true)
				: setIsContainNameOrEmail(false);

			setInputError(
				!(
					isEnoughChar &&
					isEnoughUppercase &&
					isEnoughNumOrSymb &&
					isContainNameOrEmail
				)
			);
		}
	};

	useEffect(() => {
		checkAmountOfChar();
	}, [
		value,
		email,
		isEnoughChar,
		isEnoughUppercase,
		isEnoughNumOrSymb,
		isContainNameOrEmail,
	]);

	const validationItems = validationItemsData.map((item, id) => {
		return (
			<Box
				key={id}
				sx={{
					color: isTouched ? (item.validation ? "green" : "red") : "#828282",
				}}
			>
				{isTouched ? (item.validation ? "\u2713" : "\u00D7") : "\u00D7"}
				&nbsp;{item.text}
			</Box>
		);
	});

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
			{validationItems}
			{/* <Box
				sx={{ color: isTouched ? (isEnoughChar ? "green" : "red") : "#828282" }}
			>
				{isTouched ? (isEnoughChar ? "\u2713" : "\u00D7") : "\u00D7"}
				&nbsp;Minimum 8 characters
			</Box>
			<Box
				sx={{
					color: isTouched ? (isEnoughUppercase ? "green" : "red") : "#828282",
				}}
			>
				{isTouched ? (isEnoughUppercase ? "\u2713" : "\u00D7") : "\u00D7"}
				&nbsp;Contains at least 1 uppercase
			</Box>
			<Box
				sx={{
					color: isTouched ? (isEnoughNumOrSymb ? "green" : "red") : "#828282",
				}}
			>
				{isTouched ? (isEnoughNumOrSymb ? "\u2713" : "\u00D7") : "\u00D7"}
				&nbsp;Contains at least 1 number or symbol
			</Box>
			<Box
				sx={{
					color: isTouched
						? isContainNameOrEmail
							? "green"
							: "red"
						: "#828282",
				}}
			>
				{isTouched ? (isContainNameOrEmail ? "\u2713" : "\u00D7") : "\u00D7"}
				&nbsp;Cannot contain your name or email address
			</Box> */}
		</Box>
	);
};

//
// interface IPassValidation {
// 	value: string;
// 	email: string;
// }

// export const PassValidation = ({ value, email }: IPassValidation) => {
// const [isEnoughChar, setIsEnoughChar] = useState(false);
// const [isEnoughUppercase, setIsEnoughUppercase] = useState(false);
// const [isEnoughNumOrSymb, setIsEnoughNumOrSymb] = useState(false);
// const [isContainNameOrEmail, setIsContainNameOrEmail] = useState(false);

// const schema1 = yup.string().min(8);

// const schema2 = yup.string().matches(/[A-Z]/);

// const schema3 = yup.string().matches(/[0-9!@#$%^&*()_+{}\[\]:;<>,.?\/\\|~-]/);

// const schema4 = yup.string().matches(email);

// Валидация каждой схемы отдельно
// schema1
// 	.validate(value)
// 	.then(() => {
// 		setIsEnoughChar(true);
// 	})
// 	.catch(() => {
// 		setIsEnoughChar(false);
// 	});

// schema2
// 	.validate(value)
// 	.then((validData) => console.log("Данные 2 валидны:", validData))
// 	.catch((error) => console.log("Ошибка 2:", error.message));

// schema3
// 	.validate(value)
// 	.then((validData) => console.log("Данные 3 валидны:", validData))
// 	.catch((error) => console.log("Ошибка 3:", error.message));

// schema4
// 	.validate(value)
// 	.then((validData) => console.log("Данные 4 валидны:", validData))
// 	.catch((error) => console.log("Ошибка 4:", error.message));

// 	return (
// 		<Box
// 			sx={{
// 				display: "flex",
// 				flexDirection: "column",
// 				marginTop: "4px",
// 				fontSize: "14px",
// 				lineHeight: "20px",
// 				color: "#828282",
// 			}}
// 		>
// 			<Box sx={{ color: isEnoughChar ? "green" : "red" }}>
// 				&#10003; Minimum 8 characters
// 			</Box>
// 			{/* <Box sx={{ color: isEnoughUppercase ? "green" : "red" }}>
// 				&times; Contains at least 1 uppercase
// 			</Box>
// 			<Box sx={{ color: isEnoughNumOrSymb ? "green" : "red" }}>
// 				&times; Contains at least 1 number or symbol
// 			</Box>
// 			<Box sx={{ color: isContainNameOrEmail ? "green" : "red" }}>
// 				&times; Cannot contain your name or email address
// 			</Box> */}
// 		</Box>
// 	);
// };
