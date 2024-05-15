import React, {ReactNode} from 'react';
import Grid from "@mui/material/Grid";

const ProductTileContainer = ({children}: {children: ReactNode}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            {children}
        </Grid>
    );
};

export default ProductTileContainer;
