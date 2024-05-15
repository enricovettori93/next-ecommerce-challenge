"use client"

import {Product} from "@/models";
import Link from "next/link";
import React, {useContext} from "react";
import {CartContext} from "@/contexts/cart.context";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ProductPrice from "@/components/product-price";
import ProductCartActions from "@/components/product-cart-actions";
import TileImageCarousel from "@/app/products/_components/product-tile/tile-image-carousel";
import ProductTileContainer from "@/app/products/_components/tile-container";

interface props {
    product: Product
}

const ProductTile = ({product}: props) => {
    const {products, addProduct, removeProduct} = useContext(CartContext);

    const isInCart = products.some(p => p.id === product.id);

    return (
        <ProductTileContainer>
            <Link href={`/products/${product.id}`}>
                <TileImageCarousel images={product.images}/>
                <Box display="flex" flexDirection="column" p={2}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" >
                        <Typography variant="body1" component="span">
                            {product.title}
                        </Typography>
                        <ProductCartActions
                            product={product}
                            isInCart={isInCart}
                            onlyIcons={true}
                            onAddToCart={addProduct}
                            onRemoveFromCart={removeProduct}
                        />
                    </Box>
                    <ProductPrice product={product}/>
                </Box>
            </Link>
        </ProductTileContainer>
    );
};

export default ProductTile;
