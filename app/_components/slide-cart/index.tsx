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
import {useRouter} from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';

const SlideCart = () => {
    const router = useRouter();
    const slideCartRef = useRef();
    const {cart, closeCart} = useContext(UiContext);
    const {products, removeProduct} = useContext(CartContext);
    const classes = classNames({
        "slide-cart": true,
        "slide-cart__open": cart
    });

    useEscListener(closeCart);
    useClickOutside(slideCartRef, closeCart);

    // todo: this logic should be moved in a custom hook like useRouteChange
    const handleGoToCart = (e: any) => {
        e.preventDefault();
        closeCart();
        router.push("/cart");
    }

    return (
        <Box className={classes} p={3} ref={slideCartRef} display="flex" flexDirection="column">
            <Button className="slide-cart-close" onClick={closeCart}>
                <CloseIcon />
            </Button>
            {
                products.length > 0 && (
                    <>
                        <Typography variant="h5" component="span" mb={3}>
                            Shopping bag ({products.length}) prodotto/i
                        </Typography>
                        <Box display="flex" gap={2} flexDirection="column">
                            {
                                products.map(product => (
                                    <Box key={product.id} display="flex" justifyContent="space-between">
                                        <Typography variant="body1" component="span">
                                            {product.title}
                                        </Typography>
                                        <ProductCartActions onRemoveFromCart={removeProduct} product={product} isInCart={true} onlyIcons={true} />
                                    </Box>
                                ))
                            }
                        </Box>
                        <Link onClick={handleGoToCart} style={{marginTop: "auto", marginLeft: "auto"}} href="/cart">Vai al carrello</Link>
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
