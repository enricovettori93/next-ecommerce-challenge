"use client"

import {default as MuiPagination} from "@mui/material/Pagination";
import Link from "next/link";
import {PaginationItem} from "@mui/material";
import {PaginationProps} from "@mui/material/Pagination/Pagination";

const Pagination = (props: PaginationProps) => {
    return (
        <MuiPagination {...props} renderItem={(item) => (
            <Link href={`/products?page=${item.page}`}>
                <PaginationItem {...item} />
            </Link>
        )} />
    );
};

export default Pagination;
