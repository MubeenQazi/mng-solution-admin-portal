import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  stableSort, getComparator, Order,
} from "../../submodule/components/Tables/Table";
import { TableStyled } from "../../submodule/components/Tables/TableStyles";
import { OrganizationData } from "../../submodule/components/Tables/TableData";
import EnhancedTableHead from "../../submodule/components/Tables/TableHead";
import DownloadButton from "../../submodule/components/DownloadButton/DownloadButton";
import SearchBar from "../../submodule/components/SearchBar/SearchBar";
import "./Organization.scss";

interface Data {
  id: number;
  organization: string;
  status: string;
  created: string;
  organization_tenant_id: string;
  notes: string;
}

const originalRow = OrganizationData;

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "organization",
    numeric: false,
    disablePadding: true,
    label: "Organization",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
  {
    id: "created",
    numeric: false,
    disablePadding: true,
    label: "Created",
  },
  {
    id: "organization_tenant_id",
    numeric: false,
    disablePadding: true,
    label: "Organization Tenant Id",
  },
];

const OrganizationPage = () => {
  const [rows, setRows] = React.useState<Data[]>(originalRow);
  const [searched, setSearched] = React.useState<string>("");
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("organization");
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(5);
  const location = useLocation();
  const navigate = useNavigate();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = rows.filter((row) => {
      return row.organization.toLowerCase().includes(searchedVal.toLowerCase());
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
      setRows(originalRow);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const columns = [
    "ID","Organization", "Status", "Created", "Tenant Id"
  ];


  const clickableRow = (row: any) => {
    navigate(`detail/${row.id}`, { state: { ...row, ...{ activeSideBar: location.state?.activeSideBar } } });
  }

  return (
    <div>
      <Box
        className="d-md-flex justify-content-md-end align-items-md-center"
        sx={{
          marginBottom: `30px`,
        }}
      >
        <DownloadButton rows={ rows } columns={columns} filename="organization.csv" />
      </Box>

      <Box>
        <SearchBar value={searched} onChange={searchRow} />
        <Paper sx={{ boxShadow: "none" }}>
          <TableContainer
            className="organization-table-container"
            style={{ marginTop: "30px" }}
          >
            <TableStyled stickyHeader aria-label="sticky table">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                headCells= {headCells}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.id} onClick={() => clickableRow(row)}>
                        <TableCell className="organizationTitle">
                          <Link to={{ pathname: `detail/${row.id}` }} state={{...row, ...{activeSideBar: location.state?.activeSideBar}}}>
                            {row.organization}
                          </Link>
                        </TableCell>
                        <TableCell
                          className={`ms-${
                            row.status === "Active" ? "active" : "suspend"
                          }`}
                        >
                          {row.status}
                        </TableCell>
                        <TableCell>{row.created}</TableCell>
                        <TableCell>{row.organization_tenant_id}</TableCell>
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
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </Box>
    </div>
  );
}

export default OrganizationPage;