import React from 'react';
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import ProductDetailLayout from '@/app/products/[id]/_components/layout';

const ProductDetailLoader = () => {
    return (
        <>
            <ProductDetailLayout.GallerySection>
                <Skeleton animation="wave" variant="rectangular" width={"100%"} height={400}/>
            </ProductDetailLayout.GallerySection>
            <ProductDetailLayout.DetailSection>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30}/>
                    <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30}/>
                    <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30}/>
                </Box>
            </ProductDetailLayout.DetailSection>
        </>
    )
};

export default ProductDetailLoader;
