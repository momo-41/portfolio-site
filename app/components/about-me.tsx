"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import { aboutMeContentsData, aboutMeTitleData } from "../const/about-me-data";

const AboutMe = () => {
  return (
    <Box height={{ xs: "85vh", md: "100vh" }} px={{ md: 15 }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={{ md: 21 }}
      >
        <Typography fontSize={47} letterSpacing={2}>
          About me
        </Typography>
      </Box>
      <Box // 画像とコンテンツを横並びや縦並びにするためのBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column", md: "row" }} //PCでは横並び,SPでは縦並び
        mt={{ md: 13 }}
      >
        <Box
          height={{ md: "100%" }}
          width={{ md: "50%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <MyVsignImage
            width={290}
            height={290}
            src={"/my-v-sign-picture.jpg"}
            alt={"PC作業中の写真"}
            priority
          />
        </Box>
        <Box
          height={{ md: "100%" }}
          width={{ xs: "100%", md: "50%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"} //要素を縦並びに
        >
          <Box
            display={"flex"}
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent={"center"}
            mr={5}
          >
            <Box>
              {aboutMeTitleData.title.map((data) => (
                <Typography
                  key={data}
                  pr={8}
                  py={0.8}
                  fontSize={18}
                  letterSpacing={0.5}
                >
                  {data}
                </Typography>
              ))}
            </Box>
            <Box>
              {aboutMeContentsData.contents.map((data) => (
                <Typography
                  key={data}
                  py={0.8}
                  fontSize={18}
                  letterSpacing={0.5}
                >
                  {data}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const MyVsignImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  borderRadius: 500,
  [theme.breakpoints.down("md")]: {
    width: 225,
    height: 225,
  },
}));

export default AboutMe;
