import  { lazy, Suspense } from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
const Routing = lazy(() => import("../routing"));




const theme = createTheme({
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


const AppLayout = () => {
  return (
      <ThemeProvider theme={theme}>
          <Suspense fallback={
              <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                      height: "100vh",
                      width: "100vw",
                      backgroundColor: "#2b2f3b",
                  }}
              >
                  Loading...
              </div>
          }>
              <Routing
              />
          </Suspense>
      </ThemeProvider>

  )
}

export default AppLayout;
