import {memo} from "react";

import {Button} from "@mui/material";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface ScrollBackProps {
    onClick: () => void;
}

function ScrollBack({ onClick }: ScrollBackProps) {
    return (
        <Button
            onClick={onClick}
            variant="outlined"
            sx={{
                backgroundColor: "#FFFFFF",
                "&:hover": {
                    backgroundColor: "#FFFFFF",
                    opacity: 0.85
                },
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                minWidth: 0,
                p: 0,
                position: "fixed",
                bottom: "2.5%",
                right: "5%",
            }}
        >
            <KeyboardArrowUpIcon />
        </Button>
    );
}

export default memo(ScrollBack);
