import { Product } from "@/types";
import { Stack } from "@mui/material";
import { ProductCard } from "./ProductCard";

export type ProductListProps = {
  products: Product[];
};

export const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <Stack
      flexWrap="wrap"
      maxWidth="80vw"
      gap={3}
      flexDirection="row"
      justifyContent="center"
    >
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </Stack>
  );
};
