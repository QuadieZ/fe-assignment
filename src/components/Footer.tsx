import { Link, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Footer = () => {
  return (
    <Stack
      width="100%"
      height="25vh"
      bgcolor={blue["800"]}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      px={{
        xs: 4,
        md: 6,
      }}
      py={6}
    >
      <Typography variant="body1" color="white" fontWeight={300}>
        Copyright @ 2025
      </Typography>
      <Link
        href="https://www.pichy.dev"
        color="#fff"
        textAlign="right"
        target="_blank"
        sx={{
          textDecoration: "underline",
        }}
      >
        {`Pichyapa's Portfolio Website`}
      </Link>
    </Stack>
  );
};
