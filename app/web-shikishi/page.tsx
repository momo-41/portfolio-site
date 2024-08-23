import React from "react";
import WorksDetail from "../components/works-detail";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box
      sx={{
        pb: 12,
        backgroundImage: `url("/background/white-background-image.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        bgcolor: "rgba(210, 210, 210, 0.3)",
      }}
    >
      <WorksDetail />
    </Box>
  );
};

export default Page;
