import React from 'react';
import Box from "@mui/material/Box";
import ProductCartLoader from "@/components/skeleton-loaders/product-cart";

const Loading = () => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            {
                Array(3).fill(1).map((_, idx) => <ProductCartLoader key={idx} />)
            }
        </Box>
    );
};

export default Loading;
