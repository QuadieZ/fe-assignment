import { Box } from "@mui/material";
import Image from "next/image";

export type BannerImageProps = {
  src: string;
  alt?: string;
  blurSrc?: string;
};

export const BannerImage = (props: BannerImageProps) => {
  const { src, alt, blurSrc } = props;

  return (
    <Box width="100vw" height="45vh" position="relative">
      <Image
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top",
          filter: "brightness(0.7)",
        }}
        src={src}
        alt={alt ?? "Banner Image"}
        priority
        placeholder={blurSrc ? "blur" : "empty"}
        blurDataURL={blurSrc}
      />
    </Box>
  );
};
