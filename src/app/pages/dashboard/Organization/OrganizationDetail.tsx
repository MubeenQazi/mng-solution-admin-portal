/** @format */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import MSButton from "../../../components/Button";
import DownloadButton from "../../../components/DownloadButton";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ListItem from "@mui/material/ListItem";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
}));

const SubscriptionsDetail = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(
    location.state != null ? location.state.status : "Active"
  );
  
  const organizationDetail = location.state;
  const organizationDetailArr = Array();
  organizationDetailArr.push(organizationDetail);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const columns = ["ID", "Organization", "Status", "Created", "Tenant Id", "Notes"];

  return (
    <div>
      <Box
        className="d-md-flex justify-content-md-between align-items-md-center"
        sx={{
          marginBottom: `10px`,
        }}
      >
        <h1>
          {location.state.organization}{" "}
          <span
            className={
              location.state.status == "Active" ? "ms-active" : "ms-suspend"
            }
          >
            ({location.state.status})
          </span>
        </h1>
        
        <DownloadButton rows={ organizationDetailArr } columns={columns} filename="organizationDetail.csv" />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Item className="d-md-flex align-items-md-center">
              <h3 className="ms-meta-title">Created On: </h3>
              <h3 className="ms-meta-data">{location.state.created}</h3>
            </Item>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item className="d-md-flex align-items-md-center">
              <h3 className="ms-meta-title">Tenant ID: </h3>
              <h3 className="ms-meta-data">
                {location.state.organization_tenant_id}
              </h3>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <div className="panel-light organization">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={5}>
              <h1 className="ms-meta-title">Change Status </h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroup
                row
                value={value}
                onChange={handleChange}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className="radio-button-group"
              >
                <FormControlLabel
                  value="Active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="Suspended"
                  control={<Radio />}
                  label="Suspended"
                />
              </RadioGroup>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ marginTop: "30px" }}
          >
            <Grid item xs={12} sm={5}>
              <h1 className="ms-meta-title">Manage Organization Discounts </h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem
                component={Link}
                to={`/dashboard/organization/discount/${location.state.id}`}
                sx={{ padding: "0" }}
                state={{activeSideBar: location.state?.activeSideBar}}
              >
                <MSButton text="Change Discounts" backgroundColor="#EE7623" />
              </ListItem>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: "30px" }}>
            <Grid item xs={12} sm={5}>
              <h1 className="ms-meta-title">Notes </h1>
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                multiline
                fullWidth
                rows={5}
                maxRows={10}
                label="Organization suspended for non-payment."
                variant="outlined"
                defaultValue={location.state.notes}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: "20px" }}>
            <Grid item xs={12} sm={6}>
              <ListItem component={Link} to={"/dashboard/organization"}>
                <MSButton
                  text="Back"
                  backgroundColor="#9BA4AF"
                  icon={<ArrowBackIosIcon />}
                />
              </ListItem>
            </Grid>

            <Grid item xs={12} sm={6}>
              <ListItem
                component={Link}
                to={"/dashboard/organization"}
                state={{activeSideBar: location.state?.activeSideBar}}
                className="justify-content-md-end"
              >
                <MSButton text="Save" backgroundColor="#EE7623" />
              </ListItem>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default SubscriptionsDetail;
