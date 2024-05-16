import React from 'react';
import {ProductListResponse} from "@/models";
import betterFetch from "@/utils/betterFetch";
import ProductTile from "@/app/[category]/_components/product-tile";
import {BE_URL, PAGE_SIZE} from "@/utils/constants";
import Pagination from "@/app/[category]/_components/pagination";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";

interface params {
    params: {
        category: string
    }
    searchParams: Record<string, string>
}

async function getProducts(category: string, searchParams: Record<string, string>) {
    const {page = 1, viewAll = false, q: searchQuery = undefined} = searchParams;

    const params = {
        skip: `${(Number(page) - 1) * PAGE_SIZE}`,
        limit: `${PAGE_SIZE}`
    };

    if (searchQuery) {
        Object.assign(params, {q: searchQuery});
    }

    const queryParams = new URLSearchParams(params);

    let url = `products/category/${category}`;

    if (searchQuery) {
        // search page
        url = "products/search";
    } else if (viewAll) {
        // view all
        url = "products";
    }

    const fullUrl = `${BE_URL}/${url}?${queryParams}`;

    return await betterFetch<ProductListResponse>(fullUrl);
}

const ProductListPage = async ({params, searchParams}: params) => {
    const {category} = params;
    const {products, total} = await getProducts(category, searchParams);
    const pages = Math.ceil(total / PAGE_SIZE);
    const {page = 1, ...rest} = searchParams;

    return (
        <>
            {
                !products.length && (
                    <Typography variant="h2" component="h2">
                        Nessun risultato trovato
                    </Typography>
                )
            }
            {
                products.length > 0 && (
                    <Grid container spacing={2}>
                        {
                            products.map((product) => <ProductTile key={product.id} product={product} />)
                        }
                    </Grid>
                )
            }
            <Box display="flex" justifyContent="flex-end">
                <Pagination count={pages} page={+page} category={category} additionalqueryparams={rest} />
            </Box>
        </>
    );
};

export default ProductListPage;
