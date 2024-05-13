"use client"

import {createContext, ReactNode, useEffect, useState} from "react";

interface UiContextShape {
    cart: boolean
    toggleCart: () => void
}

const UiContextInitialState: UiContextShape = {
    cart: false,
    toggleCart: () => {}
}

export const UiContext = createContext(UiContextInitialState);

const UiContextProvider = ({children}: {children: ReactNode}) => {
    const [cart, setCart] = useState(false);
    const root = document.querySelector("html");

    useEffect(() => {
        if (root) {
            root.style.overflow = cart ? "hidden" : "initial";
        }
    }, [cart, root]);

    const toggleCart = () => {
        setCart(prev => !prev);
    }

    return (
        <UiContext.Provider value={{cart, toggleCart}}>
            {children}
        </UiContext.Provider>
    )
}

export default UiContextProvider;
