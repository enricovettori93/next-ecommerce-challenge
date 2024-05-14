import CartProductList from "@/app/cart/_components/product-list";
import {Button, Typography} from "@mui/material";

const Page = () => {
    return (
        <>
            <Typography variant="h2" component="h2">
                Il tuo carrello
            </Typography>
            <CartProductList />
            <Button>Checkout</Button>
        </>
    );
};

export default Page;
