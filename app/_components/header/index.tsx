"use client"

import Box from '@mui/material/Box';
import Link from "next/link";
import {AppBar, Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from "react";
import {UiContext} from "@/contexts/ui.context";
import Typography from "@mui/material/Typography";
import useScrollListener from "@/hooks/useScrollListener";
import classNames from "classnames";
import Badge from '@mui/material/Badge';
import {CartContext} from "@/contexts/cart.context";

const Header = () => {
    const {direction} = useScrollListener();
    const {toggleCart} = useContext(UiContext);
    const {products} = useContext(CartContext);

    const classes = classNames({
        "header": true,
        "header__scrolling-down": direction === "down"
    });

    return (
        <AppBar className={classes}>
            <Box display="flex" justifyContent="space-between" justifyItems="center" px={2} >
                <Link href="/">
                    <Typography component="h1">
                        Dwight's shop
                    </Typography>
                </Link>
                <Button color="inherit" onClick={toggleCart}>
                    <Badge badgeContent={products.length} color="warning">
                        <ShoppingCartIcon />
                    </Badge>
                </Button>
            </Box>
        </AppBar>
    );
};

export default Header;
