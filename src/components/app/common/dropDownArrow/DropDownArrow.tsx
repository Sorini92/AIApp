import { Box } from "@mui/material";

interface IDropDownArrow {
  direction: "down" | "up";
}

export const DropDownArrow = ({ direction }: IDropDownArrow) => {
  return (
    <>
      {direction === "down" ? (
        <Box
          sx={{
            height: "16px",
            width: "16px",
            display: "flex",
            alignItems: "center",
            position: "absolute !important",
            right: "0 !important",
            pointerEvents: "none !important",
          }}
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      ) : (
        <Box
          sx={{
            height: "16px",
            width: "16px",
            display: "flex",
            alignItems: "center",
            position: "absolute !important",
            right: "0 !important",
            pointerEvents: "none !important",
          }}
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L5 1L9 5"
              stroke="#2F80ED"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      )}
    </>
  );
};
