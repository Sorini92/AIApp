import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { RatingCounter } from "../ratingCounter";

type oneLine = {
  name: string;
  rating?: number;
  link: string;
};

interface IData {
  data: oneLine[];
  isShowRaiting?: boolean;
  maxSimbols?: number;
  height?: number;
}

export function CustomTable({ data, isShowRaiting = true, maxSimbols = 69, height = 52 }: IData) {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      border: "none",
    },
    padding: "12px",
    height: height,
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#edeff7",
      border: "none",
      borderRadius: 0,
    },
    "&:last-child td, &:last-child th": {
      border: "none",
    },
  }));

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0, border: "none", boxShadow: "none" }}>
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableBody>
          {data.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                <Box component={Link} to={row.link} sx={{ width: "100%" }}>
                  {i + 1}. {row.name.slice(0, maxSimbols) + "..."}
                </Box>
              </StyledTableCell>

              {isShowRaiting && (
                <StyledTableCell sx={{ width: "160px" }} align="right">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <RatingCounter
                      count={row.rating}
                      handleUpClick={() => {}}
                      handleDownClick={() => {}}
                    />

                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ height: "7px", margin: "10px 12px" }}
                    />

                    <Button
                      onClick={() => {}}
                      sx={{
                        textTransform: "none",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#333",
                        cursor: "pointer",
                        padding: "0",
                        ":hover": {
                          backgroundColor: "#F2F2F2",
                        },
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
