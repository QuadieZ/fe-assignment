export type Product = {
    productId: number
    productName: string
    productDescription: string
    productImage?: string
    productPrice: number
}

export type ProductDto = {
    description: string
    id: number
    image: string
    price: number
    title: string
}