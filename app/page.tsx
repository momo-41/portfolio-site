import { Box } from "@mui/material";
import React from "react";
import FirstView from "./components/first-view";

const page = () => {
  return (
    <Box
      height={{ xs: "85vh", md: "100vh" }}
      sx={{
        backgroundImage: `url("white-background-image-large.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed", //second-viewを作ったら入れてみる
      }}
    >
      <FirstView />
    </Box>
  );
};

export default page;
