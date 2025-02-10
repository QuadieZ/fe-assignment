"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";

export type NavbarProps = {
  pageName: string;
  items: NavbarItemProps[];
};

export type NavbarItemProps = {
  href: string;
  text: string;
  textColor?: string;
};

const NavbarItem = (props: NavbarItemProps) => {
  const { href, text, textColor } = props;

  return (
    <Link
      href={href}
      variant="button"
      fontSize="0.8rem"
      color={textColor || "#ffffff"}
      sx={{
        transition: "all 0.2s ease-out",
        textDecoration: "none",
        ":hover": {
          transform: "scale(1.1)",
          transition: "all 0.2s ease-in",
          cursor: "pointer",
        },
      }}
    >
      {text}
    </Link>
  );
};

export const Navbar = (props: NavbarProps) => {
  const { pageName, items } = props;

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileMenuOpen = Boolean(anchor);

  const theme = useTheme();
  const isTabletOrBigger = useMediaQuery(theme.breakpoints.up("md"));

  function handleMobileMenuClick(event: React.MouseEvent<HTMLElement>) {
    setAnchor(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchor(null);
  }

  useEffect(() => {
    setIsMobile(!isTabletOrBigger);
  }, [isTabletOrBigger]);

  return (
    <Stack>
      <Stack
        justifyContent="space-between"
        bgcolor={blue["400"]}
        px={{
          xs: 4,
          md: 6,
        }}
        py={2}
        flexDirection="row"
        alignItems="center"
      >
        <Typography variant="subtitle1" color="white">
          {pageName}
        </Typography>
        {isMobile && (
          <IconButton onClick={handleMobileMenuClick}>
            <MenuIcon
              sx={{
                fontSize: "1.3rem",
                color: "white",
              }}
            />
          </IconButton>
        )}
      </Stack>
      <Stack
        flexDirection="row"
        px={6}
        gap={3}
        bgcolor={blue["700"]}
        py={1}
        display={{
          xs: "none",
          md: "flex",
        }}
      >
        {items?.map((item, index) => (
          <Fragment key={item.text}>
            <NavbarItem {...item} />
            {index !== items?.length - 1 && (
              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{
                  bgcolor: "white",
                }}
              />
            )}
          </Fragment>
        ))}
      </Stack>
      {isMobile && (
        <Menu
          anchorEl={anchor}
          open={isMobileMenuOpen}
          onClose={handleMenuClose}
        >
          {items.map((item) => (
            <MenuItem
              key={item.text}
              onClick={handleMenuClose}
              sx={{
                width: "50vw",
              }}
            >
              <NavbarItem {...item} textColor="#000" />
            </MenuItem>
          ))}
        </Menu>
      )}
    </Stack>
  );
};
