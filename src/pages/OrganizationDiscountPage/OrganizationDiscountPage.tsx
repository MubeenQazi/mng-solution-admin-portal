/** @format */

import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import DownloadButton from "../../submodule/components/DownloadButton/DownloadButton";
import { Link, useLocation, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import SearchBar from "../../submodule/components/SearchBar/SearchBar";
import { FormControl, Grid, ListItem, TextField } from "@mui/material";
import "../OrganizationPage/Organization.scss";
import AlertMessage from "../../submodule/components/AlertMessage/AlertMessage";

import {
  stableSort,
  getComparator,
  Order,
} from "../../submodule/components/Tables/Table";
import { TableStyled } from "../../submodule/components/Tables/TableStyles";
import EnhancedTableHead, {
  EnhancedTableToolbar,
} from "../../submodule/components/Tables/TableHead";
import MSButton from "../../submodule/components/MSButton/MSButton";
import axios from "axios";

interface Data {
  organization_id: string;
  offer_id: string;
  name: string;
  discount_percent: string;
  sku: string;
  description: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
  {
    id: "discount_percent",
    numeric: false,
    disablePadding: true,
    label: "Discount",
  },
  {
    id: "sku",
    numeric: false,
    disablePadding: true,
    label: "Sku",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: true,
    label: "Description",
  },
];

const OrganizationDiscountPage = () => {
  const location = useLocation();

  const [rows, setRows] = useState<Data[]>(location.state);
  const [searched, setSearched] = useState<string>("");
  const [discountVal, setDiscount] = useState<string>("");
  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { organizationDetailId } = useParams();

  const [message, setMessage] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const requestSearch = (searchedVal: string) => {
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const searchRow = (event: React.ChangeEvent<{ value: unknown }>) => {
    // console.log(event.target.value);
    if (event.target.value !== "") {
      setSearched(event.target.value as string);
      requestSearch(event.target.value as string);
    } else {
      setSearched("");
      setRows(rows);
    }
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "desc";
    setOrder(isAsc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const applyDiscount = () => {
    const filteredRows = rows.map((row, index) => {
      if (selected.includes(index)) {
        const data = [
          row.organization_id,
          row.offer_id,
          row.name,
          row.description,
          row.sku,
          discountVal,
        ];
        axios
          .post(
            `${process.env.REACT_APP_ADMIN_API_BASE}/organization/${row.organization_id}/discounts`,
            data
          )
          .then((response) => {
            location.state.discount_percent = discountVal;
            row.discount_percent = discountVal + "%";
            setMessage("success");
            setAlert(true);
          })
          .catch(() => {
            setMessage("fail");
            setAlert(true);
          });
        //
      }
      return row;
    });
    setRows(filteredRows);
    setDiscount("");
    setSelected([]);
  };

  const deleteRowData = () => {
    const filteredRows = rows.filter((row, index) => {
      return !selected.includes(index);
    });
    setRows(filteredRows);
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const columns = ["ID", "Title", "Discount", "Sku", "Description"];

  return (
    <div>
      {message === "success"
        ? AlertMessage(alert, "Discount Changes Succefully", "success")
        : message === "fail" &&
          AlertMessage(alert, "Discount Changing Failed", "error")}
      <Box
        className="d-md-flex justify-content-md-between align-items-md-center"
        sx={{
          marginBottom: `10px`,
        }}
      >
        <h1 className="detail-title">
          McDonald's <span className="ms-suspend">(Suspended)</span>
        </h1>
        <DownloadButton
          rows={rows}
          columns={columns}
          filename="organizationDiscount.csv"
        />
      </Box>

      <Box>
        <SearchBar value={searched} onChange={searchRow} />
        <Paper sx={{ boxShadow: "none" }}>
          <EnhancedTableToolbar
            deleteRow={deleteRowData}
            numSelected={selected.length}
          />
          <TableContainer
            className="organization-table-container"
            style={{ marginTop: "30px", maxHeight: 500 }}
          >
            <TableStyled
              stickyHeader
              aria-label="sticky table"
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                headCells={headCells}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(index);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, index)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.organization_id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          id={labelId}
                          padding="none"
                          className="organizationTitle"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell className="discount">
                          {row.discount_percent}
                        </TableCell>
                        <TableCell>{row.sku}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </TableStyled>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

          <Grid
            container
            spacing={2}
            alignItems={"center"}
            className="flex-order-reverse"
          >
            <Grid item xs={6} sm={3} md={4}>
              <ListItem
                component={Link}
                to={`/dashboard/organization/detail/${organizationDetailId}`}
                state={{ activeSideBar: location.state?.activeSideBar }}
              >
                <MSButton
                  text="Back"
                  backgroundColor="#9BA4AF"
                  icon={<ArrowBackIosIcon />}
                />
              </ListItem>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-between">
                  <Typography className="discount-apply">Discount:</Typography>
                  <FormControl sx={{ width: "30%" }} className="discount-field">
                    <TextField
                      type="number"
                      value={discountVal}
                      onChange={(e) => setDiscount(e.target.value)}
                      InputProps={{
                        inputProps: {
                          max: 100,
                          min: 0,
                        },
                      }}
                      id="outlined-basic"
                    />
                  </FormControl>
                  <Typography
                    className="discount-apply"
                    sx={{ color: "#EE7623" }}
                  >
                    %
                  </Typography>{" "}
                  &nbsp;
                </div>
                <MSButton
                  text="Apply"
                  backgroundColor="#44C2B2"
                  clickAction={applyDiscount}
                />
              </div>
            </Grid>

            <Grid item xs={6} sm={3} md={4}>
              <ListItem
                component={Link}
                to={"/dashboard/organization"}
                state={{ activeSideBar: location.state?.activeSideBar }}
                className="justify-content-end"
              >
                <MSButton text="Save" backgroundColor="#EE7623" />
              </ListItem>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default OrganizationDiscountPage;
