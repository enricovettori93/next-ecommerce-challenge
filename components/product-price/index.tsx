import {Product} from "@/models";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

interface props {
    product: Product
}

const ProductPrice = ({product}: props) => {
    return (
        <Box>
            <Typography variant="body1" component="span">
                €{product.price}
            </Typography>
            {
                product.discountPercentage && (
                    <Typography variant="body1" component="span" mt={2}>
                        &nbsp;-&nbsp;sconto&nbsp;{product.discountPercentage}%
                    </Typography>
                )
            }
        </Box>
    );
};

export default ProductPrice;
