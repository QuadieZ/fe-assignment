import { BannerImage } from "@/components";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <BannerImage
        src="https://picsum.photos/id/1059/1800/600"
        blurSrc="https://picsum.photos/id/1059/180/60"
      />
    </Stack>
  );
}
