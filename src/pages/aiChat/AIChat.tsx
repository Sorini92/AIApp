import { Box, Avatar, Typography, Badge } from "@mui/material";

import { CustomButton } from "../../components/app/common/buttons";
import avatarIcon from "../../img/aiChat/avatarIcon.svg";
import bell from "../../img/aiChat/bell.svg";
import envelope from "../../img/aiChat/envelope.svg";

export const AIChat = () => {
	return (
		<>
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
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "32px",
					textAlign: "center",
					marginTop: "40px",
				}}
			>
				Let’s start your first chat
			</Typography>
			<Typography
				sx={{
					fontWeight: 400,
					fontSize: "18px",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				Choose your chat partner
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					padding: "28px 12px",
				}}
			>
				{/* Item 1 */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: "16px",
						margin: "12px",
						padding: "24px",
						width: "368px",
						height: "323px",
						background: "#FFFFFF",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Avatar
							alt="avatar"
							src={avatarIcon}
							sx={{ width: "56px", height: "56px" }}
						/>
						<Typography
							sx={{
								marginLeft: "12px",
								fontWeight: 600,
								fontSize: "16px",
								lineGeight: "125%",
								color: "rgba(0, 0, 0, 0.8)",
							}}
						>
							James, The Practice Management Guru
						</Typography>
					</Box>
					<Box
						component="ul"
						sx={{
							listStyleType: "disc",
							margin: "24px",
							fontWeight: 500,
							fontSize: "14px",
						}}
					>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Help in drafting client emails, newsletters and educational
							content.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Create templates, agendas and scripts for effective and efficient
							client meetings.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Create and implement a plan to build your professional network in
							your local area
						</Box>
					</Box>
					<CustomButton
						text="Start chat with James"
						clickFunction={() => {}}
						kind="dark"
					/>
				</Box>

				{/* Item 2 */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: "16px",
						margin: "12px",
						padding: "24px",
						width: "368px",
						height: "323px",
						background: "#FFFFFF",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Avatar
							alt="avatar"
							src={avatarIcon}
							sx={{ width: "56px", height: "56px" }}
						/>
						<Typography
							sx={{
								marginLeft: "12px",
								fontWeight: 600,
								fontSize: "16px",
								lineGeight: "125%",
								color: "rgba(0, 0, 0, 0.8)",
							}}
						>
							John, <br />
							the Research Analyst
						</Typography>
					</Box>
					<Box
						component="ul"
						sx={{
							listStyleType: "disc",
							margin: "24px",
							fontWeight: 500,
							fontSize: "14px",
						}}
					>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Dashboard showing whether important ETFs are technically bullish,
							bearish or neutral.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Craft white papers, research reports, trade notes and market
							analysis.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Conducts in-depth research, delivers insights and articulates
							findings.
						</Box>
					</Box>
					<CustomButton
						text="Start chat with John"
						clickFunction={() => {}}
						kind="dark"
					/>
				</Box>

				{/* Item 3 */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: "16px",
						margin: "12px",
						padding: "24px",
						width: "368px",
						height: "323px",
						background: "#FFFFFF",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Avatar
							alt="avatar"
							src={avatarIcon}
							sx={{ width: "56px", height: "56px" }}
						/>
						<Typography
							sx={{
								marginLeft: "12px",
								fontWeight: 600,
								fontSize: "16px",
								lineGeight: "125%",
								color: "rgba(0, 0, 0, 0.8)",
							}}
						>
							Olivia, <br />
							The Ghost Writer / Journalist
						</Typography>
					</Box>
					<Box
						component="ul"
						sx={{
							listStyleType: "disc",
							margin: "24px",
							fontWeight: 500,
							fontSize: "14px",
						}}
					>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Write articles and press releases for various publications.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Craft talking points on trending topics to pitch to Journalists
							and TV Producers.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Communicate to your network about industry trends and regulatory
							updates.
						</Box>
					</Box>
					<CustomButton
						text="Start chat with Olivia"
						clickFunction={() => {}}
						kind="dark"
					/>
				</Box>

				{/* Item 4 */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: "16px",
						margin: "12px",
						padding: "24px",
						width: "368px",
						height: "323px",
						background: "#FFFFFF",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Avatar
							alt="avatar"
							src={avatarIcon}
							sx={{ width: "56px", height: "56px" }}
						/>
						<Typography
							sx={{
								marginLeft: "12px",
								fontWeight: 600,
								fontSize: "16px",
								lineGeight: "125%",
								color: "rgba(0, 0, 0, 0.8)",
							}}
						>
							Rayna, <br />
							the SMM & Content Strategist
						</Typography>
					</Box>
					<Box
						component="ul"
						sx={{
							listStyleType: "disc",
							margin: "24px",
							fontWeight: 500,
							fontSize: "14px",
						}}
					>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Brainstorm content ideas based on what’s trending now.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Create engaging SM campaigns across various platforms.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Develop content strategies and editorial calendars.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Build brand awareness
						</Box>
					</Box>
					<CustomButton
						text="Start chat with Rayna"
						clickFunction={() => {}}
						kind="dark"
					/>
				</Box>

				{/* Item 5 */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: "16px",
						margin: "12px",
						padding: "24px",
						width: "368px",
						height: "323px",
						background: "#FFFFFF",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Avatar
							alt="avatar"
							src={avatarIcon}
							sx={{ width: "56px", height: "56px" }}
						/>
						<Typography
							sx={{
								marginLeft: "12px",
								fontWeight: 600,
								fontSize: "16px",
								lineGeight: "125%",
								color: "rgba(0, 0, 0, 0.8)",
							}}
						>
							James, Your Mindset & Communication Coach
						</Typography>
					</Box>
					<Box
						component="ul"
						sx={{
							listStyleType: "disc",
							margin: "24px",
							fontWeight: 500,
							fontSize: "14px",
						}}
					>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Sharpen communication pillars.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Dial in your mindset to help everything else fall into place.
						</Box>
						<Box component="li" sx={{ listStyleType: "disc" }}>
							Learn how to frame and ask the right questions.
						</Box>
					</Box>
					<CustomButton
						text="Start chat with James"
						clickFunction={() => {}}
						kind="dark"
					/>
				</Box>
			</Box>
		</>
	);
};
