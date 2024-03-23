import { Box, Avatar, Typography, Badge } from "@mui/material";

import avatarIcon from "../../../../img/aiChat/avatarIcon.svg";
import bell from "../../../../img/aiChat/bell.svg";
import envelope from "../../../../img/aiChat/envelope.svg";

export const AIChatHeader = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-end",
				alignItems: "center",
				padding: "12px 24px",
				width: "100%",
				height: "56px",
				background: "#FFFFFF",
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Badge
					badgeContent={1}
					color="primary"
					invisible={false}
					sx={{
						marginRight: "20px",
						"& .MuiBadge-badge": {
							right: 0,
							backgroundColor: "#ffbf74",
							color: "#000",
							minWidth: "16px",
							height: "16px",
							fontSize: "10px",
						},
					}}
				>
					<Box component="img" src={bell} />
				</Badge>
				<Badge
					badgeContent={1}
					color="primary"
					invisible={false}
					sx={{
						marginRight: "20px",
						"& .MuiBadge-badge": {
							right: 0,
							backgroundColor: "#ffbf74",
							color: "#000",
							minWidth: "16px",
							height: "16px",
							fontSize: "10px",
						},
					}}
				>
					<Box component="img" src={envelope} />
				</Badge>

				<Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
					Davis Botosh
				</Typography>
				<Avatar
					alt="avatar"
					src={avatarIcon}
					sx={{ marginLeft: "10px", width: "32px", height: "32px" }}
				/>
			</Box>
		</Box>
	);
};
