import React from 'react';
import {Product} from "@/models";
import betterFetch from "@/utils/betterFetch";
import {BE_URL} from "@/utils/constants";
import ProductGallery from "@/app/products/[id]/_components/product-gallery";
import ProductDetail from "@/app/products/[id]/_components/product-detail";
import Grid from "@mui/material/Grid";

interface params {
    params: {
        id: string
    }
}

async function getProductDetail(id: Product["id"]) {
    return await betterFetch<Product>(`${BE_URL}/products/${id}`);
}

const Page = async ({ params }: params) => {
    const product = await getProductDetail(+params.id);

    return (
        <Grid container>
            <Grid xs={12} md={8} item>
                <ProductGallery images={product.images} />
            </Grid>
            <Grid xs={12} md={4} item>
                <ProductDetail product={product} />
            </Grid>
        </Grid>
    );
};

export default Page;
