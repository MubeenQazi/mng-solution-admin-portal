import { Table, tableCellClasses } from "@mui/material";
import { styled } from "@mui/system";
export const TableStyled = styled(Table)(() => ({
  //   minWidth: 650,
  // minWidth: "750px",
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",
    padding: "20px 18px",
    font: "normal normal normal 18px/36px Raleway",
    letterSpacing: "0.32px",
  },
  "& .MuiTableHead-root": {
    "& .MuiTableCell-root": {
      backgroundColor: "#9BA4AF",
      color: "#fff",
    },
    "& .Mui-active": {
      color: "#fff",

      "& .MuiTableSortLabel-icon": {
        color: "#fff",
      },
    },

    "& .MuiCheckbox-root": {
      color: "#FFFFFF",
    },
  },
  "& .MuiTableBody-root": {
    backgroundColor: "#FBFBFB",
  },
}));
