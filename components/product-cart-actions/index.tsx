import React from 'react';
import {Product} from "@/models";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

interface props {
    product: Product
    isInCart: boolean
    onAddToCart: (product: Product) => void
    onRemoveFromCart: (id: Product["id"]) => void
}

const ProductCartActions = ({product, onAddToCart, onRemoveFromCart, isInCart}: props) => {
    return (
        <Box>
            {
                !isInCart && (
                    <button onClick={() => onAddToCart(product)}><AddShoppingCartIcon/></button>
                )
            }
            {
                isInCart && (
                    <button onClick={() => onRemoveFromCart(product.id)}><RemoveShoppingCartIcon/></button>
                )
            }
        </Box>
    );
};

export default ProductCartActions;
