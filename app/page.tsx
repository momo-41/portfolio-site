import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      pt={{ xs: 7, md: 8 }}
      height={"92vh"}
      sx={{
        backgroundImage: `url("white-background-image-large.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed", //first-viewを作ったら入れてみる
      }}
    >
      aaa
    </Box>
  );
};

export default page;
