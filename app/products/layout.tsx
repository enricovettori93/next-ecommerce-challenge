import {ReactNode} from "react";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default Layout;
