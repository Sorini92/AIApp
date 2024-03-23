import { Backdrop, Box, Modal, Fade } from "@mui/material";

interface ICustomModal {
	open: boolean;
	handleClose: () => void;
	children: JSX.Element;
	width?: number;
	padding?: number;
}

export const CustomModal = ({
	open,
	handleClose,
	children,
	width = 400,
	padding = 16,
}: ICustomModal) => {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: `${padding}px`,
		width: `${width}px`,
		bgcolor: "background.paper",
		boxShadow: 24,
		borderRadius: "16px",
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style}>{children}</Box>
			</Fade>
		</Modal>
	);
};
