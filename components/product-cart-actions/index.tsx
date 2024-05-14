import React from 'react';
import {Product} from "@/models";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import {Button, Typography} from "@mui/material";

interface props {
    product: Product
    isInCart: boolean
    loading?: boolean
    onlyIcons?: boolean
    onAddToCart?: (product: Product) => void
    onRemoveFromCart?: (id: Product["id"]) => void
}

const ProductCartActions = ({product, onAddToCart, onRemoveFromCart, isInCart, onlyIcons = false, loading = false}: props) => {
    const handleRemoveFromCart = (e: any) => {
        e.preventDefault();
        onRemoveFromCart && onRemoveFromCart(product.id)
    }

    const handleAddToCart = (e: any) => {
        e.preventDefault();
        onAddToCart && onAddToCart(product);
    }

    return (
        <Box>
            {
                !isInCart && onAddToCart && (
                    <Button disabled={loading} className="cart__actions" onClick={handleAddToCart}>
                        {!onlyIcons && (
                            <Typography variant="body1" component="span" mr={2}>
                                Aggiungi al carrello
                            </Typography>
                        )}
                        <AddShoppingCartIcon/>
                    </Button>
                )
            }
            {
                isInCart && onRemoveFromCart && (
                    <Button disabled={loading} className="cart__actions" onClick={handleRemoveFromCart}>
                        {!onlyIcons && (
                            <Typography variant="body1" component="span" mr={2}>
                                Rimuovi dal carrello
                            </Typography>
                        )}
                        <RemoveShoppingCartIcon/>
                    </Button>
                )
            }
        </Box>
    );
};

export default ProductCartActions;
