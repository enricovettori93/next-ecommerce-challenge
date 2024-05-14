"use client"

import {Product} from "@/models";
import Box from "@mui/material/Box";
import ProductPrice from "@/components/product-price";
import ProductCartActions from "@/components/product-cart-actions";
import {useContext} from "react";
import {CartContext} from "@/contexts/cart.context";
import Typography from "@mui/material/Typography";
import {Chip} from "@mui/material";
import ProductAccordion from "@/app/products/[id]/_components/product-detail/accordion/productAccordion";

interface props {
    product: Product
}

const ProductDetail = ({product}: props) => {
    const {description, brand, rating, category} = product;
    const {products, addProduct, removeProduct} = useContext(CartContext);
    const isInCart = products.some(p => p.id === product.id);

    return (
        <Box display="flex" flexDirection="column" position="sticky" top="0" alignSelf="flex-start" px={{md: 2}}>
            <Typography variant="h2" component="h2" mb={4}>
                {brand}
            </Typography>
            <Typography variant="body1" component="p">
                {description}
            </Typography>
            <Box mb={2}>
                <ProductPrice product={product}/>
            </Box>
            <Box mb={2} display="flex" gap={1}>
                <Chip label={category} color="info"/>
                <Chip label={brand} color="success" />
            </Box>
            <Box mb={2}>
                <ProductCartActions
                    onlyIcons={false}
                    product={product}
                    isInCart={isInCart}
                    onRemoveFromCart={removeProduct}
                    onAddToCart={addProduct}
                />
            </Box>
            <ProductAccordion />
        </Box>
    );
};

export default ProductDetail;
