import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from "./routes";
import {ThemeProvider} from '@mui/material/styles';
import './index.scss';
import {MuiThemeCustomized} from "./shared/styles/theme";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={MuiThemeCustomized}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);