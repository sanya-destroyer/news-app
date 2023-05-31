import React from 'react'
import ReactDOM from 'react-dom/client'

import {ThemeProvider} from "@mui/material";
import theme from "./material/theme";

import {Provider} from "react-redux";
import {store} from "./store";

import {RouterProvider} from "react-router-dom";
import router from "./router/router";

import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
