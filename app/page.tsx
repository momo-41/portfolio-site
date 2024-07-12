import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      pt={8}
      height={"92vh"}
      sx={{
        backgroundImage: `url("white-background-image-large.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed", //二次リリース
      }}
    >
      aaa
    </Box>
  );
};

export default page;
