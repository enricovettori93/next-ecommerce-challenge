import {ReactNode} from "react";
import Grid from "@mui/material/Grid";

const GallerySection = ({children}: {children: ReactNode}) => {
    return (
        <Grid xs={12} md={8} item>
            {children}
        </Grid>
    )
}

const DetailSection  = ({children}: {children: ReactNode}) => {
    return (
        <Grid xs={12} md={4} item px={{md: 2}}>
            {children}
        </Grid>
    )
}

const ProductDetailLayout = {
    GallerySection,
    DetailSection
}

export default ProductDetailLayout;
