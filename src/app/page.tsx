import { BannerImage, ProductList, ServiceList } from "@/components";
import { serviceItems } from "@/constants";
import { getProducts } from "@/utils/data";
import { mapProduct } from "@/utils/mapper";
import { Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default async function Home() {
  const products = await getProducts(6).then((res) => mapProduct(res));

  return (
    <Stack>
      <BannerImage
        src="https://picsum.photos/id/1059/1800/600"
        blurSrc="https://picsum.photos/id/1059/180/60"
      />
      <Stack p={10} width="100%" alignItems="center" gap={2}>
        <Typography variant="h1" gutterBottom fontSize="2rem" fontWeight={500}>
          Our Products
        </Typography>
        <ProductList products={products} />
      </Stack>
      <Stack
        px={{
          xs: 2,
          md: 8,
        }}
        py={10}
        width="100%"
        alignItems="center"
        gap={2}
        bgcolor={blue["50"]}
      >
        <Typography variant="h1" gutterBottom fontSize="2rem" fontWeight={500}>
          Our Services
        </Typography>
        <ServiceList services={serviceItems} />
      </Stack>
    </Stack>
  );
}

export const dynamic = "force-dynamic";
