"use client"

import Box from "@mui/material/Box";
import React, {useContext, useRef} from "react";
import {CartContext} from "@/contexts/cart.context";
import ProductCartActions from "@/components/product-cart-actions";
import {Button, Typography} from "@mui/material";
import Link from "next/link";
import {UiContext} from "@/contexts/ui.context";
import classNames from "classnames";
import useEscListener from "@/hooks/useEscListener";
import useClickOutside from "@/hooks/useClickOutside";

const SlideCart = () => {
    const slideCartRef = useRef();
    const {cart, closeCart} = useContext(UiContext);
    const {products, removeProduct} = useContext(CartContext);
    const classes = classNames({
        "slide-cart": true,
        "slide-cart__open": cart
    });

    useEscListener(closeCart);
    useClickOutside(slideCartRef, closeCart);

    return (
        <Box className={classes} p={3} ref={slideCartRef}>
            <Button className="slide-cart-close" onClick={closeCart}>Chiudi</Button>
            {
                products.length > 0 && (
                    <>
                        <Typography variant="body1" component="span">
                            Shopping bag ({products.length}) prodotto/i
                        </Typography>
                        {
                            products.map(product => (
                                <Box key={product.id}>
                                    <Typography variant="body1" component="span">
                                        {product.title}
                                    </Typography>
                                    <ProductCartActions onRemoveFromCart={removeProduct} product={product} isInCart={true} onlyIcons={true} />
                                </Box>
                            ))
                        }
                        <Link href="/cart">Procedi all'acquisto</Link>
                    </>
                )
            }
            {
                !products.length && (
                    <Typography variant="body1" component="span">
                        Nessun prodotto nel carrello
                    </Typography>
                )
            }
        </Box>
    );
};

export default SlideCart;
