"use client";

import { Service } from "@/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";

export type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const { service } = props;
  const { serviceName, serviceDescription, serviceImage } = service;

  const theme = useTheme();
  const isTabletOrBigger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card
      sx={{
        width: isTabletOrBigger ? 230 : "45%",
        height: isTabletOrBigger ? 280 : 250,
      }}
      elevation={3}
    >
      <Stack width="100%" height="100%">
        <CardMedia
          style={{
            height: "40%",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={serviceImage ?? "/product-placeholder.png"}
            alt={serviceName}
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
              {serviceName}
            </Typography>
            <Typography variant="caption" fontSize="0.7rem" color={blue["600"]}>
              {serviceDescription}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            m: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="small"
            color="primary"
            variant="outlined"
            sx={{
              px: 2,
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};
