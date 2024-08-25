import React from "react";
import { Box } from "@mui/material";
import WorksDetail from "../components/works-detail";
import { WebShikishiDetailData } from "../const/works-detail-data";

const Page = () => {
  return (
    <Box
      pb={{ xs: 8, md: 12 }}
      bgcolor={"rgba(210, 210, 210, 0.3)"}
      sx={{
        backgroundImage: `url("/background/white-background-image.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <WorksDetail
        workTitle={WebShikishiDetailData.workTitle}
        workContents={WebShikishiDetailData.workContents}
        workDetail={WebShikishiDetailData.workDetail}
        workFirstImage={WebShikishiDetailData.workFirstImage}
        workSecondImage={WebShikishiDetailData.workSecondImage}
        workPointContents={WebShikishiDetailData.workPointContents}
      />
    </Box>
  );
};

export default Page;
