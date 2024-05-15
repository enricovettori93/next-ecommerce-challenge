import ProductTileContainer from "@/app/[category]/_components/tile-container";
import Grid from "@mui/material/Grid";
import React from "react";
import ProductListLoader from "@/components/skeleton-loaders/product-list";

const Loading = () => {
    return (
        <Grid container spacing={2}>
            {
                Array(10).fill(0).map((_, idx) =>
                    <ProductTileContainer key={idx}>
                        <ProductListLoader />
                    </ProductTileContainer>
                )
            }
        </Grid>
    );
};

export default Loading;
