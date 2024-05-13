"use client"

import Box from '@mui/material/Box';
import Link from "next/link";
import {Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from "react";
import {UiContext} from "@/contexts/ui.context";

const Header = () => {
    const {toggleCart} = useContext(UiContext);
    return (
        <header>
            <Box display="flex" justifyContent="space-between" justifyItems="center">
                <Link href="/">Dwight's shop</Link>
                <Button onClick={toggleCart}><ShoppingCartIcon/></Button>
            </Box>
        </header>
    );
};

export default Header;
