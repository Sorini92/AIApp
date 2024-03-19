import * as yup from "yup";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export const PassValidation = ({ value, email }: IPassValidation) => {
	// const [isEnoughChar, setIsEnoughChar] = useState(false);
	// const [isEnoughUppercase, setIsEnoughUppercase] = useState(false);
	// const [isEnoughNumOrSymb, setIsEnoughNumOrSymb] = useState(false);
	// const [isContainNameOrEmail, setIsContainNameOrEmail] = useState(false);

	const schema1 = yup
		.string()
		.min(8, "Имя должно содержать минимум 5 символов");

	const schema2 = yup.object({
		email: yup.string().email("Неправильный формат email"),
	});

	const schema3 = yup.object({
		age: yup.number().min(18, "Возраст должен быть не менее 18 лет"),
	});

	const schema4 = yup.string().matches(/(hi|bye)/);

	// Данные для валидации
	const data1 = { name: "John" };
	const data2 = { email: "invalidemail.com" };
	const data3 = { age: 15 };
	const data4 = { password: "123" };

	// Валидация каждой схемы отдельно
	schema1
		.validate(data1)
		.then((validData) => console.log("Данные 1 валидны:", validData))
		.catch((error) => console.log("Ошибка 1:", error.message));

	schema2
		.validate(data2)
		.then((validData) => console.log("Данные 2 валидны:", validData))
		.catch((error) => console.log("Ошибка 2:", error.message));

	schema3
		.validate(data3)
		.then((validData) => console.log("Данные 3 валидны:", validData))
		.catch((error) => console.log("Ошибка 3:", error.message));

	schema4
		.validate(data4)
		.then((validData) => console.log("Данные 4 валидны:", validData))
		.catch((error) => console.log("Ошибка 4:", error.message));

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
			<Box sx={{ color: isEnoughChar ? "green" : "red" }}>
				&#10003; Minimum 8 characters
			</Box>
			<Box sx={{ color: isEnoughUppercase ? "green" : "red" }}>
				&times; Contains at least 1 uppercase
			</Box>
			<Box sx={{ color: isEnoughNumOrSymb ? "green" : "red" }}>
				&times; Contains at least 1 number or symbol
			</Box>
			<Box sx={{ color: isContainNameOrEmail ? "green" : "red" }}>
				&times; Cannot contain your name or email address
			</Box>
		</Box>
	);
};

// interface IPassValidation {
// 	value: string;
// 	email: string;
// }

// export const PassValidation = ({ value, email }: IPassValidation) => {
// 	const [isEnoughChar, setIsEnoughChar] = useState(false);
// 	const [isEnoughUppercase, setIsEnoughUppercase] = useState(false);
// 	const [isEnoughNumOrSymb, setIsEnoughNumOrSymb] = useState(false);
// 	const [isContainNameOrEmail, setIsContainNameOrEmail] = useState(false);

// 	console.log("value", { value }, "email", { email });

// 	const checkAmountOfChar = () => {
// 		value.length >= 8 ? setIsEnoughChar(true) : setIsEnoughChar(false);

// 		/[A-Z]/.test(value)
// 			? setIsEnoughUppercase(true)
// 			: setIsEnoughUppercase(false);

// 		/[0-9!@#$%^&*()_+{}\[\]:;<>,.?\/\\|~-]/.test(value)
// 			? setIsEnoughNumOrSymb(true)
// 			: setIsEnoughNumOrSymb(false);

// 		!value.toLowerCase().includes(email.toLowerCase())
// 			? setIsContainNameOrEmail(true)
// 			: setIsContainNameOrEmail(false);

// 		console.log("check");
// 	};

// 	useEffect(checkAmountOfChar, [value]);

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
// 			<Box sx={{ color: isEnoughUppercase ? "green" : "red" }}>
// 				&times; Contains at least 1 uppercase
// 			</Box>
// 			<Box sx={{ color: isEnoughNumOrSymb ? "green" : "red" }}>
// 				&times; Contains at least 1 number or symbol
// 			</Box>
// 			<Box sx={{ color: isContainNameOrEmail ? "green" : "red" }}>
// 				&times; Cannot contain your name or email address
// 			</Box>
// 		</Box>
// 	);
// };
