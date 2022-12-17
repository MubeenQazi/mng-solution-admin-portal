import {createTheme} from "@mui/material/styles";

export const MuiThemeCustomized = createTheme({
  palette: {
    primary: {
      main: '#ee7623',
      dark : '#c05e1d',
      contrastText: '#fff'
    }, secondary: {
      main: '#A35B95',
      dark : '#A35B95',
      contrastText: '#fff'
    },
  },
});