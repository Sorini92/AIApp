import { Box, Typography, Link, Divider } from "@mui/material";
import { FormInput, PassValidation } from "../../app/common/inputs";
import { CustomButton } from "../../app/common/buttons";
import { useState } from "react";
import { CustomModal } from "../../app/common/modal";
import closeBtn from "../../../img/common/close.svg";

export const General = () => {
  const [open, setOpen] = useState(false);
  const [inputError, setInputError] = useState<boolean>(true);
  const [isUnderstandChecked, setIsUnderstandChecked] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>("aaa@gmail.com");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          width: "716px",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#fff",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Email
        </Typography>
        <FormInput
          label="Email Addres"
          name="email"
          required={false}
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
        />

        {/* if email changed */}

        {/* <FormInput label="Password" name="password" required={false} />
        <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            kind="transparent"
            text="Cancel"
            sx={{
              width: "130px",
              height: "48px",
              fontSize: "14px",
              marginRight: "12px",
            }}
          />
          <CustomButton
            kind="dark"
            text="Save Changes"
            sx={{
              width: "170px",
              height: "48px",
              fontSize: "14px",
            }}
          />
        </Box> */}
      </Box>

      <Box
        sx={{
          width: "716px",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#fff",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Password
        </Typography>

        <FormInput
          showPasswordToggler
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          label="Current Password"
          name="currentPassword"
        />
        <FormInput
          showPasswordToggler
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          label="New Password"
          name="newPassword"
        />

        <PassValidation value={newPassword} email={currentEmail} setInputError={setInputError} />

        <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            kind="dark"
            text="Save Changes"
            disabled={inputError}
            sx={{
              width: "170px",
              height: "48px",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "716px",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#fff",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Delete Account
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            color: "#333",
            marginBottom: "24px",
          }}
        >
          Would you like to delete your account? Please note that you will not be able <br /> to
          recover your chat history after deleting your account.
        </Typography>
        <Link
          component="button"
          onClick={() => handleOpen()}
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            textDecoration: "underline",
            textDecorationSkipInk: "none",
            color: "#eb5757",
            cursor: "pointer",
          }}
        >
          I want to delete my account
        </Link>
      </Box>
      <CustomModal open={open} handleClose={handleClose} width={584}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
              marginBottom: "16px",
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "20px", lineHeight: "120%", color: "#333" }}
            >
              Delete Account
            </Typography>
            <Link
              component="button"
              onClick={() => handleClose()}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                backgroundColor: "#f1f1f1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={closeBtn} alt="close btn" />
            </Link>
          </Box>

          <Divider />

          <Typography sx={{ fontWeight: 400, fontSize: "16px", color: "#333", marginTop: "25px" }}>
            Are you sure you want to delete your account? If you proceed, you <br />
            will permanently lose your profile, photos, and chats history. Your forum messages will
            remain visible but without your authorship. This cannot be undone.
          </Typography>

          <FormInput name="password" label="Password" required={false} showPasswordToggler />

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              marginTop: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              className={isUnderstandChecked ? "checkbox checked" : "checkbox"}
              onClick={() => setIsUnderstandChecked(!isUnderstandChecked)}
            >
              <div className="checkbox-checkmark">&#10003;</div>
              <input type="checkbox" />
            </div>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#333",
                marginLeft: "8px",
              }}
            >
              I understand that all of my account data will be deleted and want to proceed
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
            <CustomButton
              clickFunction={() => handleClose()}
              kind="dark"
              text="Nevermind"
              sx={{
                width: "130px",
                height: "48px",
                fontSize: "14px",
                marginRight: "12px",
              }}
            />
            <CustomButton
              kind="red"
              text="Delete My Account"
              disabled={!isUnderstandChecked}
              sx={{
                width: "170px",
                height: "48px",
                fontSize: "14px",
              }}
            />
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};
