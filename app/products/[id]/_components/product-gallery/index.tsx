import {Product} from "@/models";
import Grid from "@mui/material/Grid";

interface props {
    images: Product["images"]
}

const ProductGallery = ({images}: props) => {
    return (
        <Grid container spacing={1}>
            {
                // Cant use next image component because img width / height are unknown :/
                images.map(img => (
                    <Grid xs={12} sm={6} key={img} item>
                        <img className="product-detail__gallery-img" src={img} alt=""/>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default ProductGallery;
