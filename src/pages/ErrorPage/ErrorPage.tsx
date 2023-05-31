import {Link} from "react-router-dom";

import {Box, Button, Grid, Typography} from "@mui/material";

import ROUTES from "../../constants/routes";

function ErrorPage() {
    return (
        <Grid
            container justifyContent="center"
            flexDirection="column"
            alignItems="center"
            height="100vh"
            sx={{ background: "#FCFAFC", p: 3}}
        >
            <Typography
                sx={{ fontSize: "3em"}}
            >
                Some error occured
            </Typography>
            <Box
                sx={{ mb: 2}}
            >
                <img
                    style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%"}}
                    src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif"
                    alt="Error gif"
                />
            </Box>
            <Button
                sx={{ fontSize: "1.5em" }}
                component={Link}
                to={ROUTES.HOME}
                variant="text"
            >
                Go back to home page
            </Button>
        </Grid>
    );
}

export default ErrorPage;
