import React from 'react';
import {ProductListResponse} from "@/models";
import betterFetch from "@/utils/betterFetch";
import ProductTile from "@/app/[category]/_components/product-tile";
import {BE_URL, PAGE_SIZE} from "@/utils/constants";
import Pagination from "@/app/[category]/_components/pagination";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

interface params {
    params: {
        category: string
    }
    searchParams: Record<string, string>
}

async function getProducts(category: string, searchParams: Record<string, string>) {
    const {page = 1, viewAll = false} = searchParams;

    const params = {
        skip: `${(Number(page) - 1) * PAGE_SIZE}`,
        limit: `${PAGE_SIZE}`
    };

    const queryParams = new URLSearchParams(params);

    const url = viewAll ? "products" : `products/category/${category}`;

    return await betterFetch<ProductListResponse>(`${BE_URL}/${url}?${queryParams}`);
}

const ProductListPage = async ({params, searchParams}: params) => {
    const {category} = params;
    const {products, total} = await getProducts(category, searchParams);
    const pages = Math.ceil(total / PAGE_SIZE);
    const {page = 1, viewAll} = searchParams;

    return (
        <>
            <Grid container spacing={2}>
                {
                    products.map((product) => <ProductTile key={product.id} product={product} />)
                }
            </Grid>
            <Box display="flex" justifyContent="flex-end">
                <Pagination count={pages} page={+page} category={category} additionalqueryparams={{viewAll}} />
            </Box>
        </>
    );
};

export default ProductListPage;
