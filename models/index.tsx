export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface Pagination {
    limit: number
    skip: number
}

export interface ProductListResponse extends Pagination {
    products: Product[]
    total: number
}
