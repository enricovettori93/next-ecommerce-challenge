import React from 'react';
import {ProductListResponse} from "@/models";
import betterFetch from "@/utils/betterFetch";
import ProductTile from "@/app/products/_components/product-tile";
import {BE_URL, PAGE_SIZE} from "@/utils/constants";
import Pagination from "@/app/products/_components/pagination";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

async function getProducts(searchParams: Record<string, string>) {
    const {page = 1} = searchParams;

    const params = {
        skip: `${(Number(page) - 1) * PAGE_SIZE}`,
        limit: `${PAGE_SIZE}`
    };

    const queryParams = new URLSearchParams(params);

    return await betterFetch<ProductListResponse>(`${BE_URL}/products?${queryParams}`);
}

const ProductListPage = async ({searchParams}: { searchParams: Record<string, string> }) => {
    const {products, total} = await getProducts(searchParams);
    const pages = Math.ceil(total / PAGE_SIZE);
    const {page = 1} = searchParams;

    return (
        <Box>
            <Grid container spacing={2}>
                {
                    products.map(product => <ProductTile key={product.id} product={product} />)
                }
            </Grid>
            <Box display="flex" justifyContent="flex-end">
                <Pagination count={pages} page={+page} />
            </Box>
        </Box>
    );
};

export default ProductListPage;
