import React, {ReactNode} from 'react';
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <section>
            <Typography variant="h2" component="h2">
                Il tuo carrello
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    {children}
                </Grid>
            </Grid>
        </section>
    );
};

export default Layout;
