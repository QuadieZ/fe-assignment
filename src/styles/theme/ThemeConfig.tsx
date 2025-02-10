"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const theme = createTheme({
  typography: {
    fontFamily: [
      poppins.style.fontFamily,
      "Trebuchet MS",
      "-apple-system",
    ].join(","),
  },
  cssVariables: true,
});

export const ThemeConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
