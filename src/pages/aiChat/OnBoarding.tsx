import { useState } from "react";
import {
	Avatar,
	Box,
	CardMedia,
	Divider,
	FormControl,
	IconButton,
	InputAdornment,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";

import { DropDownArrow } from "../../components/app/common/dropDownArrow/DropDownArrow";
import { CustomButton } from "../../components/app/common/buttons";
import partnerAvatarIcon from "../../img/onBoarding/partnerAvatarIcon.svg";
import searchIcon from "../../img/aiChat/searchIcon.svg";
import microphone from "../../img/aiChat/microphone.svg";
import addFileIcon from "../../img/aiChat/addFileIcon.svg";

export const OnBoarding = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedPartner, setSelectedPartner] = useState<string>(
		"James(Financial Advisor)"
	);

	const handleChangePartner = (event: SelectChangeEvent) => {
		setSelectedPartner(event.target.value);
	};

	const chatPartners = [
		{
			avatar: partnerAvatarIcon,
			name: "James",
			referral: "Financial Advisor",
		},
		{
			avatar: partnerAvatarIcon,
			name: "John",
			referral: "Research Analyst",
		},
		{
			avatar: partnerAvatarIcon,
			name: "Rayna",
			referral: "SMM & Content Strategist",
		},
		{
			avatar: partnerAvatarIcon,
			name: "Olivia",
			referral: "Journalist",
		},
		{
			avatar: partnerAvatarIcon,
			name: "James",
			referral: "Wellness Advisor",
		},
	];

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: "16px",
					padding: "24px 0 24px 24px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "300px",
						height: "686px",
						backgroundColor: "#FFFFFF",
						borderRadius: "16px",
					}}
				>
					<Box sx={{ padding: "8px" }}>
						<FormControl
							variant="standard"
							sx={{
								":hover": {
									borderRadius: "8px",
									background: "#f1f3f8",
								},
							}}
						>
							<Select
								IconComponent={() => (
									<DropDownArrow direction={isOpen ? "up" : "down"} />
								)}
								MenuProps={{
									disableScrollLock: true,
									MenuListProps: {
										disablePadding: true,
									},
									sx: {
										"&& .Mui-selected": {
											display: "none",
										},
										marginTop: "4px",
									},
								}}
								onOpen={() => setIsOpen(true)}
								onClose={() => setIsOpen(false)}
								sx={{
									fontWeight: 500,
								}}
								disableUnderline={true}
								value={selectedPartner}
								onChange={handleChangePartner}
								displayEmpty
								inputProps={{
									"aria-label": "Without label",
									sx: {
										padding: "0",
										borderRadius: "8px",
										"&& .MuiSelect-select": {
											backgroundColor: "red",
											display: "none",
										},
										":focus": {
											borderRadius: "8px",
											background: "#f1f3f8",
										},
									},
								}}
							>
								{chatPartners.map((item, i) => {
									return (
										<MenuItem
											dense
											disableGutters
											divider
											sx={{
												padding: "4px",
											}}
											key={i}
											value={`${item.name}(${item.referral})`}
										>
											<Box sx={{ display: "flex", padding: "8px" }}>
												<Avatar
													alt="avatar"
													src={item.avatar}
													sx={{
														width: "40px",
														height: "40px",
														borderRadius: "8px",
													}}
												/>
												<Box
													sx={{
														width: "184px",
														height: "40px",
														margin: "0 6px 0 12px",
													}}
												>
													<Typography
														sx={{
															fontSize: "16px",
															fontWeight: 600,
															lineHeight: "150%",
															// opacity: "80%",
														}}
													>
														{item.name}
													</Typography>
													<Typography
														sx={{
															fontSize: "14px",
															fontWeight: 400,
															lineHeight: "114%",
															opacity: "80%",
														}}
													>
														{item.referral}
													</Typography>
												</Box>
											</Box>
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</Box>
					<Divider sx={{ height: "1px", width: "300px" }} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							padding: "24px 16px",
							height: "527px",
						}}
					>
						<Typography
							sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}
						>
							Chats History
						</Typography>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: "12px",
								lineHeight: "120%",
								padding: "0 8px",
								opacity: "0.5",
								marginTop: "24px",
							}}
						>
							Today
						</Typography>
						<Box
							sx={{
								borderRadius: "4px",
								padding: "8px",
								width: "268px",
								height: "36px",
								background: "#f1f3f8",
								marginTop: "12px",
							}}
						>
							<Typography
								sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "143%" }}
							>
								New Chat
							</Typography>
						</Box>
					</Box>
					<Divider sx={{ height: "1px", width: "300px" }} />
					<Box sx={{ padding: "15px 16px", width: "300px", height: "86px" }}>
						<CustomButton
							text="Start new chat"
							clickFunction={() => {}}
							kind="dark"
						></CustomButton>
					</Box>
				</Box>

				{/* New Chat */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: " 812px",
						height: "686px",
						backgroundColor: "#FFFFFF",
						borderRadius: "16px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							padding: "16px",
							justifyContent: "space-between",
						}}
					>
						<Box>
							<Typography
								sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "150%" }}
							>
								New Chat
							</Typography>
							<Typography
								sx={{
									fontWeight: 500,
									fontSize: "12px",
									lineHeight: "117%",
									opacity: "0.7",
								}}
							>
								Created on 02/16/2024
							</Typography>
						</Box>
						<Box component="img" src={searchIcon}></Box>
					</Box>
					<Divider sx={{ height: "1px", width: "812px" }} />
					<Box sx={{ padding: "16px", height: "460px" }}>
						<Box
							sx={{
								borderRadius: "16px",
								padding: "16px",
								maxWidth: "660px",
								background: "#efefef",
							}}
						>
							<Typography>
								I'm James, your dedicated financial advisor. I'm here to assist
								you with all your financial questions and concerns. Let's start
								by understanding a bit more about your current financial
								situation and goals.
							</Typography>
						</Box>
					</Box>
					<Divider sx={{ height: "1px", width: "812px" }} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							padding: "16px",
							height: "152px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								gap: "8px",
							}}
						>
							<CustomButton
								text="Let’s start onboarding"
								clickFunction={() => {}}
								kind="dark"
								width="216px"
								height="48px"
							></CustomButton>
							<CustomButton
								text="Tell me more about it"
								clickFunction={() => {}}
								kind="dark"
								width="209px"
								height="48px"
							></CustomButton>
							<CustomButton
								text="Skip onboarding"
								clickFunction={() => {}}
								kind="dark"
								width="173px"
								height="48px"
							></CustomButton>
						</Box>

						<OutlinedInput
							fullWidth
							multiline={true}
							minRows={1}
							maxRows={3}
							placeholder="Write a message..."
							inputProps={{
								sx: {
									border: "none",
								},
							}}
							sx={{
								padding: "12px",
								marginTop: "16px",
								borderRadius: "8px",
								width: "780px",
								height: "56px",
								border: "none",
								background: "#e0e0e0",
								"&& .MuiOutlinedInput-notchedOutline": {
									display: "none",
								},
								":hover": {
									border: "none",
								},
							}}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="microphone"
										onClick={() => {}}
										// onMouseDown={handleMouseDownPassword}
										edge="end"
										sx={{
											width: "32px",
											height: "32px",
											padding: "0",
											marginRight: "8px",
										}}
									>
										<CardMedia component="img" image={microphone} alt="eye" />
									</IconButton>
									<IconButton
										aria-label="addFileIcon"
										onClick={() => {}}
										// onMouseDown={handleMouseDownPassword}
										edge="end"
										sx={{
											width: "32px",
											height: "32px",
											paddingRight: "0",
											padding: "0",
											marginRight: "0",
										}}
									>
										<CardMedia component="img" image={addFileIcon} alt="eye" />
									</IconButton>
								</InputAdornment>
							}
						/>
					</Box>
				</Box>

				{/* Right Arrow */}

				<Box
					sx={{
						borderRight: "1px solid #e4e4e4;",
						borderRadius: "16px 0 0 16px",
						padding: "8px",
						width: "56px",
						height: "56px",
						background: "#ffffff",
					}}
				></Box>
			</Box>
		</>
	);
};
