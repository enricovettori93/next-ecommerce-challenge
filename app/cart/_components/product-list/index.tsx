"use client"

import React, {useContext} from 'react';
import {CartContext} from "@/contexts/cart.context";
import Grid from "@mui/material/Grid";
import ProductItem from "@/app/cart/_components/product-item";
import {Button, Typography} from "@mui/material";

const CartProductList = () => {
    const {products} = useContext(CartContext);

    if (!products.length) {
        return (
            <Typography variant="h5" component="span" mt={5}>
                Nessun oggetto trovato nel carrello.
            </Typography>
        )
    }

    return (
        <>
            <Grid container gap={4}>
                {
                    products.map(p => <ProductItem key={p.id} product={p} />)
                }
            </Grid>
            <Button sx={{mt: "5em", ml: "auto"}}>Procedi al checkout</Button>
        </>
    );
};

export default CartProductList;
