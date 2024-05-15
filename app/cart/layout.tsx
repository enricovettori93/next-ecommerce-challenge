import React, {ReactNode} from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <Box component="section" display="flex" flexDirection="column" height="100%">
            <Typography variant="h2" component="h2">
                Il tuo carrello
            </Typography>
            {children}
        </Box>
    );
};

export default Layout;
