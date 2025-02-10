import { Product, ProductDto } from "@/types";

export function mapProduct(product: ProductDto[]): Product[] {
    return product.map((product) => ({
        productId: product.id,
        productName: product.title,
        productDescription: product.description,
        productImage: product.image,
        productPrice: product.price
    }))
}