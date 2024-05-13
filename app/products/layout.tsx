import {ReactNode} from "react";

const ProductListLayout = ({children}: {children: ReactNode}) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default ProductListLayout;
