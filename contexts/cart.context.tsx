"use client"

import {Product} from "@/models";
import {createContext, ReactNode, useState} from "react";
import {toast} from "react-toastify";

interface CartContextShape {
    products: Product[]
    addProduct: (p: Product) => void
    removeProduct: (id: Product["id"]) => void
}

const initialValue: CartContextShape = {
    products: [],
    addProduct: () => {},
    removeProduct: id => {}
}

export const CartContext = createContext(initialValue);

const CartContextProvider = ({children}: {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (p: Product) => {
        setProducts(prev => [...prev, p]);
        toast.success("Prodotto aggiunto al carrello");
    }

    const removeProduct = (id: Product["id"]) => {
        setProducts(prev => prev.filter(item => item.id !== id));
        toast.info("Prodotto rimosso dal carrello");
    }

    return (
        <CartContext.Provider value={{products, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
