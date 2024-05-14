"use client"

import {createContext, ReactNode, useEffect, useState} from "react";
import Overlay from "@/app/_components/overlay";

interface UiContextShape {
    cart: boolean
    toggleCart: () => void
    openCart: () => void
    closeCart: () => void
}

const UiContextInitialState: UiContextShape = {
    cart: false,
    toggleCart: () => {},
    openCart: () => {},
    closeCart: () => {}
}

export const UiContext = createContext(UiContextInitialState);

const UiContextProvider = ({children}: {children: ReactNode}) => {
    const [cart, setCart] = useState(false);
    const root = typeof document !== "undefined" && document.querySelector("html");

    useEffect(() => {
        if (root) {
            root.style.overflow = cart ? "hidden" : "initial";
        }
    }, [cart, root]);

    const toggleCart = () => {
        setCart(prev => !prev);
    }

    const openCart = () => {
        setCart(true);
    }

    const closeCart = () => {
        setCart(false);
    }

    const shouldShowOverlay = () => {
        console.log(cart)
        return cart;
    }

    return (
        <UiContext.Provider value={{cart, toggleCart, openCart, closeCart}}>
            {shouldShowOverlay() && <Overlay />}
            {children}
        </UiContext.Provider>
    )
}

export default UiContextProvider;
