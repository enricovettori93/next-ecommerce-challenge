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
import Search from "@/components/inputs/search";
import {useRouter, useSearchParams} from "next/navigation";

const Header = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {direction} = useScrollListener();
    const {toggleCart} = useContext(UiContext);
    const {products} = useContext(CartContext);

    const handleSearch = (value: string) => {
        const params = {
            page: "1",
            q: value
        };

        router.push(`/search?${new URLSearchParams(params)}`);
    }

    const classes = classNames({
        "header": true,
        "header__scrolling-down": direction === "down"
    });

    const searchParam = searchParams.get("q") ?? "";

    return (
        <AppBar className={classes}>
            <Box display="flex" justifyContent="space-between" alignItems="center" px={2} >
                <Link href="/">
                    <Typography component="h1">
                        Dwight's shop
                    </Typography>
                </Link>
                <Box display="flex" alignItems="center" gap={2}>
                    <Search initialValue={searchParam} onSearch={handleSearch} />
                    <Button color="inherit" onClick={toggleCart}>
                        <Badge badgeContent={products.length} color="warning">
                            <ShoppingCartIcon />
                        </Badge>
                    </Button>
                </Box>
            </Box>
        </AppBar>
    );
};

export default Header;
