import { Footer, Navbar } from "@/components";
import { navItems, shopName } from "@/constants";
import { ThemeConfig } from "@/styles/theme/ThemeConfig";
import { Stack } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: shopName,
  description: "Check out our best products and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppRouterCacheProvider>
          <ThemeConfig>
            <Navbar pageName={shopName} items={navItems} />
            <Stack width="100%">{children}</Stack>
            <Footer />
          </ThemeConfig>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
