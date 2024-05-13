import {Product} from "@/models";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {calcPriceWithDiscount} from "@/utils/utils";

interface props {
    product: Product
}

const ProductPrice = ({product}: props) => {
    const style = {
        textDecorationLine: "line-through"
    };

    return (
        <Box>
            <Typography variant="body1" component="span" {...(product.discountPercentage && {style})}>
                €{product.price}
            </Typography>
            {
                product.discountPercentage && (
                    <>
                        <Typography variant="body1" component="span">
                            &nbsp;(-{product.discountPercentage}%)
                        </Typography>
                        <Typography variant="body1" component="span">
                            &nbsp;-&nbsp;€{calcPriceWithDiscount(product.price, product.discountPercentage)}
                        </Typography>
                    </>
                )
            }
        </Box>
    );
};

export default ProductPrice;
