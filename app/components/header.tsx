"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { eachViewLinkData } from "../const/each-view-link-data";

const Header = () => {
  return (
    <AppBar sx={{ position: "fixed", bgcolor: "transparent" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box>
          {eachViewLinkData.map((link) => (
            <Button
              key={link.name}
              sx={{
                color: "#373737",
                mx: { md: 2 },
                fontSize: { xs: 11, md: 15 },
                fontFamily: "unset",
                fontWeight: 550,
                letterSpacing: 1,
                textTransform: "none",
              }}
              href={link.href}
            >
              {link.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
