"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Header = () => {
  const contents = ["Home", "About", "Skills", "Works", "Message"];
  return (
    <AppBar sx={{ position: "fixed", bgcolor: "transparent" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box>
          {contents.map((content) => (
            <Button
              key={content}
              sx={{
                color: "#373737",
                mx: 2,
                fontSize: 15,
                fontFamily: "unset",
                fontWeight: 550,
                letterSpacing: 1,
                textTransform: "none",
              }}
            >
              {content}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
