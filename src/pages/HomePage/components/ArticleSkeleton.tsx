import {Box, Paper, Skeleton} from "@mui/material";


function ArticleSkeleton() {
    return (
        <Paper
            sx={{ maxWidth: 400, width: "100%" }}
        >
            <Box>
                <Skeleton variant="rectangular" height={200}/>
            </Box>
            <Box
                sx={{ px: 2, py: 3, display: "flex", flexDirection: "column", gap: 2 }}
            >
                <Box>
                    <Skeleton variant="text" width="35%"/>
                </Box>
                <Box>
                    <Skeleton variant="text" height="1.5rem"/>
                    <Skeleton variant="text" height="1.5rem" width="70%"/>
                </Box>
                <Box>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width="90%"/>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text" width="55%"/>
                </Box>
                <Box>
                    <Skeleton variant="text" width={"30%"}/>
                </Box>
            </Box>
        </Paper>
    );
}

export default ArticleSkeleton;
