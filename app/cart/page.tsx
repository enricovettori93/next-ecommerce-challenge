import CartProductList from "@/app/cart/_components/product-list";
import {Button} from "@mui/material";
import React from "react";

const Page = () => {
    return (
        <>
            <CartProductList />
            <Button>Checkout</Button>
        </>
    );
};

export default Page;
