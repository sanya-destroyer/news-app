import {createTheme} from "@mui/material";

import {Colors} from "../constants/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        }
    }
})

export default theme;
