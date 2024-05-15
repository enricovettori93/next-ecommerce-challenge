"use client"

import {default as MuiPagination} from "@mui/material/Pagination";
import Link from "next/link";
import {PaginationItem} from "@mui/material";
import {PaginationProps} from "@mui/material/Pagination/Pagination";

interface props extends PaginationProps {
    category: string
    additionalqueryparams?: Record<string, any>
}

const Pagination = (props: props) => {
    const {count = 1, category, additionalqueryparams = {}, page} = props;
    const hidePrevButton = count <= 1 || page === 1;
    const hideNextButton = count <= 1 || page === count;

    return (
        <MuiPagination hideNextButton={hideNextButton} hidePrevButton={hidePrevButton} {...props} renderItem={(item) => {
            const queryParams: Record<string, any> = {
                page: item.page
            }

            if (additionalqueryparams) {
                Object.assign(queryParams, additionalqueryparams);
            }

            return (
                <Link href={{pathname: `/${category}`, query: queryParams}}>
                    <PaginationItem {...item} />
                </Link>
            )
        }} />
    );
};

export default Pagination;
