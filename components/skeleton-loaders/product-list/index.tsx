import React from 'react';
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";

const ProductListLoader = () => {
    return (
        <Box display="flex" gap={1} flexDirection="column">
            <Skeleton animation="wave" variant="rectangular" width={"100%"} height={320} />
            <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30} />
            <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30} />
        </Box>
    );
};

export default ProductListLoader;
