"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { headerEachViewLinkData } from "../const/header-each-view-link-data";

const Header = () => {
  const pathname = usePathname();
  const [isRootPage, setIsRootPage] = useState(false);
  const router = useRouter(); // ページ遷移を管理する機能

  useEffect(() => {
    setIsRootPage(pathname === "/");
  }, [pathname]);

  const handleNavigationRootView = (href: string) => {
    router.push(`/#${href}`);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        bgcolor: "transparent",
        WebkitBackdropFilter: "blur(4px)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box>
          {isRootPage
            ? headerEachViewLinkData.map((data) => (
                <Button
                  key={data.name}
                  sx={{
                    color: "#373737",
                    mx: { md: 2 },
                    fontSize: { xs: 11, md: 16 },
                    fontFamily: "unset",
                    fontWeight: 550,
                    letterSpacing: 1,
                    textTransform: "none",
                  }}
                >
                  <Scroll to={data.href} smooth={true} duration={600}>
                    {data.name}
                  </Scroll>
                </Button>
              ))
            : headerEachViewLinkData.map((data) => (
                <Button
                  key={data.name}
                  sx={{
                    color: "#373737",
                    mx: { md: 2 },
                    fontSize: { xs: 11, md: 16 },
                    fontFamily: "unset",
                    fontWeight: 550,
                    letterSpacing: 1,
                    textTransform: "none",
                  }}
                  onClick={() => handleNavigationRootView(data.href)}
                >
                  {data.name}
                </Button>
              ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
