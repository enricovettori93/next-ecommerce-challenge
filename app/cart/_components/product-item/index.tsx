"use client"

import {Product} from "@/models";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ProductCartActions from "@/components/product-cart-actions";
import ProductPrice from "@/components/product-price";
import React, {useContext} from "react";
import {CartContext} from "@/contexts/cart.context";
import Grid from "@mui/material/Grid";

interface props {
    product: Product
}

const CartProductItem = ({product}: props) => {
    const {addProduct, removeProduct} = useContext(CartContext);

    return (
        <Grid container overflow="hidden">
            <Grid item xs={4}>
                <img className="cart__product-img" src={product.images[0]} alt=""/>
            </Grid>
            <Grid item xs={8} display="flex" flexDirection="column" p={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center" >
                    <Typography variant="body1" component="span">
                        {product.title}
                    </Typography>
                    <ProductCartActions
                        product={product}
                        isInCart={true}
                        onlyIcons={true}
                        onAddToCart={addProduct}
                        onRemoveFromCart={removeProduct}
                    />
                </Box>
                <ProductPrice product={product}/>
            </Grid>
        </Grid>
    )
};

export default CartProductItem;
