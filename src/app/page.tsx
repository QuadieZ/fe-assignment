import { BannerImage, ProductList } from "@/components";
import { getProducts } from "@/utils/data";
import { mapProduct } from "@/utils/mapper";
import { Stack, Typography } from "@mui/material";

export default async function Home() {
  const products = await getProducts(6).then((res) => mapProduct(res));

  console.log(products);

  return (
    <Stack>
      <BannerImage
        src="https://picsum.photos/id/1059/1800/600"
        blurSrc="https://picsum.photos/id/1059/180/60"
      />
      <Stack p={8} width="100%" alignItems="center" gap={2}>
        <Typography variant="h1" gutterBottom fontSize="2rem" fontWeight={500}>
          Our Products
        </Typography>
        <ProductList products={products} />
      </Stack>
    </Stack>
  );
}
