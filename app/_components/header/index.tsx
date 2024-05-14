"use client"

import Box from '@mui/material/Box';
import Link from "next/link";
import {Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from "react";
import {UiContext} from "@/contexts/ui.context";
import Typography from "@mui/material/Typography";
import useScrollListener from "@/hooks/useScrollListener";
import classNames from "classnames";

const Header = () => {
    const {direction} = useScrollListener();
    const {toggleCart} = useContext(UiContext);

    const classes = classNames({
        "header": true,
        "header__scrolling-down": direction === "down"
    });

    return (
        <Box component="header"  justifyContent="space-between" justifyItems="center" className={classes}>
            <Link href="/">
                <Typography component="h1">
                    Dwight's shop
                </Typography>
            </Link>
            <Button onClick={toggleCart}><ShoppingCartIcon/></Button>
        </Box>
    );
};

export default Header;
