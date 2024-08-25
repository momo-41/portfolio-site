import React from "react";
import { Box } from "@mui/material";
import WorksDetail from "../components/works-detail";
import { TutorialDetailData } from "../const/works-detail-data";

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
      <WorksDetail
        workTitle={TutorialDetailData.workTitle}
        workContents={TutorialDetailData.workContents}
        workDetail={TutorialDetailData.workDetail}
        workFirstImage={TutorialDetailData.workFirstImage}
        workSecondImage={TutorialDetailData.workSecondImage}
        workPointContents={TutorialDetailData.workPointContents}
      />
    </Box>
  );
};

export default Page;
