import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { AIChatHeader } from "../../components/aiChat/aiChatHeader/AIChatHeader";

export const AIChat = () => {
	return (
		<Box>
			<AIChatHeader />
			<Outlet />
		</Box>
	);

};
