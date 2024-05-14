"use client"

import React, {useContext} from 'react';
import {CartContext} from "@/contexts/cart.context";
import Grid from "@mui/material/Grid";
import ProductItem from "@/app/cart/_components/product-item";

const CartProductList = () => {
    const {products} = useContext(CartContext);
    return (
        <Grid container>
            {
                products.map(p => <ProductItem product={p} />)
            }
        </Grid>
    );
};

export default CartProductList;
