import React from 'react';
import {Product} from "@/models";
import betterFetch from "@/utils/betterFetch";
import {BE_URL} from "@/utils/constants";

interface params {
    params: {
        id: string
    }
}

async function getProductDetail(id: Product["id"]) {
    return await betterFetch<Product>(`${BE_URL}/products/${id}`);
}

const ProductDetailPage = async ({ params }: params) => {
    const product = await getProductDetail(+params.id);

    return (
        <div>
            {JSON.stringify(product)}
        </div>
    );
};

export default ProductDetailPage;
