import { useState } from "react";
import {
	Avatar,
	Box,
	Divider,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";

import { DropDownArrow } from "../../components/app/common/dropDownArrow/DropDownArrow";
import partnerAvatarIcon from "../../img/onBoarding/partnerAvatarIcon.svg";
import { CustomButton } from "../../components/app/common/buttons";

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
			<Box sx={{ display: "flex", padding: "24px 0 24px 24px" }}>
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
							padding: "24px 16px",
							height: "527px",
						}}
					></Box>
					<Divider sx={{ height: "1px", width: "300px" }} />
					<Box sx={{ padding: "15px 16px", width: "300px", height: "86px" }}>
						<CustomButton
							text="Start new chat"
							clickFunction={() => {}}
							kind="dark"
						></CustomButton>
					</Box>
				</Box>
				<Box></Box>
			</Box>
		</>
	);
};
