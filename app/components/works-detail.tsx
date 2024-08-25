"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import { WorksDetailProps } from "../types/types";

const WorksDetail: React.FC<WorksDetailProps> = ({
  workTitle,
  workContents,
  workDetail,
  workFirstImage,
  workSecondImage,
  workPointContents,
}) => {
  return (
    <Box mx={15} pt={13} pb={10} pl={8} pr={6} bgcolor={"white"}>
      <Typography
        ml={1}
        pb={0.5}
        pl={3}
        fontFamily={"sans-serif"}
        fontSize={27}
        letterSpacing={1.5}
        borderBottom={1.5}
        borderColor={"#C4C4C4"}
      >
        {workTitle}
      </Typography>
      {/* プロダクトの説明と詳細 */}
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box flexDirection={"column"} mx={5.5} mt={3}>
          <Box mb={3}>
            {workContents.map((content) => (
              <ContentsTypography key={content}>{content}</ContentsTypography>
            ))}
          </Box>
          <Box px={4.5} py={4} bgcolor={"#EFEFEF"}>
            {workDetail.map((detail) => (
              <Typography
                key={detail}
                letterSpacing={1.5}
                fontFamily={"sans-serif"}
              >
                {detail}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box>
          <Image
            width={580}
            height={400}
            src={workFirstImage}
            alt={"制作物のスクリーンショット"}
            priority
          />
        </Box>
      </Box>

      {/* こだわったところ */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={15}
      >
        <Box>
          <Image
            width={580}
            height={400}
            src={workSecondImage}
            alt={"制作物のスクリーンショット"}
            priority
          />
        </Box>
        <Box flexDirection={"column"} mx={5} mt={2}>
          <Typography
            pb={0.5}
            fontSize={20}
            letterSpacing={2}
            borderBottom={1.5}
            borderColor={"#C4C4C4"}
          >
            こだわったところ
          </Typography>
          <Box mt={4} ml={1}>
            {workPointContents.map((point) => (
              <PointTypography key={point}>{point}</PointTypography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
// const ContentsTypography = styled(Typography)(({ theme }) => ({
//   fontSize: 17,
//   marginTop: 3,
//   letterSpacing: 1,
//   // [theme.breakpoints.down("md")]: {
//   //   width: 130,
//   //   height: 130,
//   // },
// }));

const ContentsTypography = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  marginTop: 3,
  letterSpacing: 1,
  // [theme.breakpoints.down("md")]: {
  //   width: 130,
  //   height: 130,
  // },
}));

const PointTypography = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  marginTop: 15,
  letterSpacing: 1,
  // [theme.breakpoints.down("md")]: {
  //   width: 130,
  //   height: 130,
  // },
}));

export default WorksDetail;
