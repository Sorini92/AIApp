import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SignUp from "../../components/signUp/SignUp";
import LogIn from "../../components/logIn/LogIn";

import "./authPage.scss";

const AuthPage = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className="authPageWrapper">
			<div className="authPageWrapper__modal">
				<div className="authPageWrapper__header">
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs value={value} onChange={handleChange}>
							<Tab sx={{ width: 232 }} label="Sign Up" />
							<Tab sx={{ width: 232 }} label="Log In" />
						</Tabs>
					</Box>
				</div>

				<div className="authPageWrapper__body">
					{value ? <LogIn /> : <SignUp />}
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
