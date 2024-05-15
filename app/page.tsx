import Link from "next/link";
import betterFetch from "@/utils/betterFetch";
import {CategoryListResponse} from "@/models";
import {BE_URL} from "@/utils/constants";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Typography} from "@mui/material";

async function getCategories() {
    return betterFetch<CategoryListResponse>(`${BE_URL}/products/categories`);
}

export default async function Home() {
    const categories = await getCategories();

    return (
        <main>
            <List>
                <Typography variant="h3" component="h2">
                    Categorie
                </Typography>
                {
                    categories.map(cat => (
                        <ListItem key={cat}>
                            <Link key={cat} href={`/${cat}?page=1`}>{cat}</Link>
                        </ListItem>
                    ))
                }
                <ListItem>
                    <Link href={{pathname: `/products`, query: {page: 1, viewAll: true}}}>All products</Link>
                </ListItem>
            </List>
        </main>
    );
}
