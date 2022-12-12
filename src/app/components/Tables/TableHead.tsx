import { useMemo  } from "react";
import { TableSortLabel } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { alpha } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import Checkbox from "@mui/material/Checkbox";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";


// Head Sort
type Order = "asc" | "desc";


interface EnhancedTableProps {
  numSelected?: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: any
  ) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
    rowCount: number;
    headCells: any;
}

export default function EnhancedTableHead(props: EnhancedTableProps) {
  let {
    onSelectAllClick,
    order,
    orderBy,
    rowCount,
    numSelected,
      onRequestSort,
    headCells
  } = props;

  // const createSortHandler = useMemo(() => {
  //   return ((property: any) => (event: React.MoeseEvent<unknown>) => {
  //     onRequestSort(event, property);
  //   })
  // }, []);
  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    orderBy = property;
    onRequestSort(event, property);
    console.log(order);
    };

  
  return (
    <TableHead>
      <TableRow>
          {
          numSelected !== undefined &&
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          /> 
        </TableCell>
              }
        {headCells.map((headCell: { id: Key | null | undefined; numeric: any; disablePadding: any; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              IconComponent={() => <img src="/AppImages/sortingIcon.svg" width="13px" height="13px" style={{margin: '0 5px', opacity: `${orderBy === headCell.id ? '1' : '0.7'}`}} />}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


// Head Toolbar
interface EnhancedTableToolbarProps {
  numSelected: number;
  deleteRow: any;
}

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, deleteRow } = props;

  return numSelected > 0 ? (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected} selected
      </Typography>
      {/* <Tooltip title="Delete">
        <IconButton onClick={deleteRow}>
          <DeleteIcon />
        </IconButton>
      </Tooltip> */}
    </Toolbar>
  ) : (
    <></>
  );
}
