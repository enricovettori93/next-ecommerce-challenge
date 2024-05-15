import React from 'react';
import {Product} from "@/models";
import betterFetch from "@/utils/betterFetch";
import {BE_URL} from "@/utils/constants";
import ProductGallery from "@/app/[category]/[id]/_components/product-gallery";
import ProductDetail from "@/app/[category]/[id]/_components/product-detail";
import ProductDetailLayout from "@/app/[category]/[id]/_components/layout";

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
        <>
            <ProductDetailLayout.GallerySection>
                <ProductGallery images={product.images} />
            </ProductDetailLayout.GallerySection>
            <ProductDetailLayout.DetailSection>
                <ProductDetail product={product} />
            </ProductDetailLayout.DetailSection>
        </>
    );
};

export default Page;
