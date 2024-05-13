"use client"

import {Product} from "@/models";
import Link from "next/link";
import React, {useContext} from "react";
import {CartContext} from "@/contexts/cart.context";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ProductPrice from "@/components/product-price";
import TileImageCarousel from "@/app/products/_components/product-tile/image-carousel";
import ProductCartActions from "@/components/product-cart-actions";

interface props {
    product: Product
}

const ProductTile = ({product}: props) => {
    const {products, addProduct, removeProduct} = useContext(CartContext);

    const isInCart = products.some(p => p.id === product.id);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link href={`/products/${product.id}`}>
                <TileImageCarousel images={product.images}/>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Typography variant="body1" component="span">
                        {product.title}
                    </Typography>
                    <ProductPrice product={product}/>
                </Box>
            </Link>
            <ProductCartActions
                product={product}
                isInCart={isInCart}
                onAddToCart={addProduct}
                onRemoveFromCart={removeProduct}
            />
        </Grid>
    );
};

export default ProductTile;
