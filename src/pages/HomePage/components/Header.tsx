import {ForwardedRef, forwardRef} from "react";

import {Box, Typography} from "@mui/material";

import SearchBar from "./SearchBar";

interface HeaderProps {

}

function Header(props: HeaderProps, ref: ForwardedRef<any>) {
    return (
        <Box ref={ref} >
            <Typography
                color="primary"
                sx={{ fontWeight: 600, mb: 1 }}
            >
                Filter by keywords
            </Typography>

            <SearchBar />
        </Box>
    );
}

export default forwardRef(Header);
