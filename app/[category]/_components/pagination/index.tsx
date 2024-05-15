"use client"

import {default as MuiPagination} from "@mui/material/Pagination";
import Link from "next/link";
import {PaginationItem} from "@mui/material";
import {PaginationProps} from "@mui/material/Pagination/Pagination";

interface props extends PaginationProps {
    category: string
    viewAll: boolean
}

const Pagination = (props: props) => {
    const {count = 1, category, viewAll} = props;
    const hidePrevNextButtons = count <= 1;

    return (
        <MuiPagination hideNextButton={hidePrevNextButtons} hidePrevButton={hidePrevNextButtons} {...props} renderItem={(item) => {
            const queryParams: Record<string, any> = {
                page: item.page
            }

            if (viewAll) {
                queryParams.viewAll = true;
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
