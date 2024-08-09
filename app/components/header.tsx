"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { eachViewLinkData } from "../const/each-view-link-data";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        bgcolor: "transparent",
        WebkitBackdropFilter: " blur(4px)",
        backdropFilter: " blur(4px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box>
          {eachViewLinkData.map((link) => (
            <Button
              key={link.name}
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
              <Scroll to={link.href} smooth={true} duration={600} offset={0}>
                {link.name}
              </Scroll>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
