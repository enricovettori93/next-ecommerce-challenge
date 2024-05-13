import React from 'react';
import {Product} from "@/models";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import {Button} from "@mui/material";

interface props {
    product: Product
    isInCart: boolean
    onAddToCart?: (product: Product) => void
    onRemoveFromCart?: (id: Product["id"]) => void
}

const ProductCartActions = ({product, onAddToCart, onRemoveFromCart, isInCart}: props) => {
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
                    <Button className="cart__actions" onClick={handleAddToCart}><AddShoppingCartIcon/></Button>
                )
            }
            {
                isInCart && onRemoveFromCart && (
                    <Button className="cart__actions" onClick={handleRemoveFromCart}><RemoveShoppingCartIcon/></Button>
                )
            }
        </Box>
    );
};

export default ProductCartActions;
