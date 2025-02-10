import { Product } from "@/types";
import SellIcon from "@mui/icons-material/Sell";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import truncate from "lodash/truncate";
import Image from "next/image";

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const { productName, productPrice, productDescription, productImage } =
    product;

  return (
    <Card
      sx={{
        width: 400,
        height: 180,
      }}
      elevation={3}
    >
      <Stack flexDirection="row" width="100%" height="100%">
        <CardMedia
          style={{
            height: "100%",
            width: "40%",
            position: "relative",
          }}
        >
          <Image
            src={productImage ?? "/product-placeholder.png"}
            alt={productName}
            fill
            loading="lazy"
            quality={80}
            sizes="50%"
            style={{
              objectFit: "cover",
            }}
          />
        </CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            pt: 2.5,
            flex: 1,
            height: "100%",
          }}
        >
          <Stack gap={0.5} flex={1} overflow="clip" maxHeight={100}>
            <Typography variant="h2" fontSize="0.9rem" fontWeight="500">
              {productName}
            </Typography>
            <Typography variant="caption" fontSize="0.7rem" color={blue["600"]}>
              {truncate(productDescription, { length: 120 })}
            </Typography>
          </Stack>
          <Chip
            size="small"
            label={`$${productPrice}`}
            icon={<SellIcon />}
            color="info"
            sx={{
              px: 1,
              gap: 0.3,
              width: "fit-content",
            }}
          />
        </CardContent>
      </Stack>
    </Card>
  );
};
