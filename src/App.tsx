import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import AppLayout from "./app/layout"

const theme = createTheme({})

const App = () => (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </ThemeProvider>
    </StyledEngineProvider>
)

export default App
