import React, {ReactNode} from 'react';
import Grid from "@mui/material/Grid";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <Grid container>
            {children}
        </Grid>
    );
};

export default Layout;
