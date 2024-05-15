import Box from "@mui/material/Box";
import {Skeleton} from "@mui/material";

const ProductCartLoader = () => {
    return (
        <Box display="flex" gap={1}>
            <Box flexGrow={1}>
                <Skeleton animation="wave" variant="rectangular" width={"100%"} height={160}/>
            </Box>
            <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
                <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30}/>
                <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30}/>
                <Skeleton animation="wave" variant="rectangular" width={"100%"} height={30}/>
            </Box>
        </Box>
    );
};

export default ProductCartLoader;
