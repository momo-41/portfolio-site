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
        pt={{ xs: 14, md: 21 }}
      >
        <Typography fontSize={{ xs: 26, md: 47 }} letterSpacing={2}>
          About me
        </Typography>
      </Box>
      <Box // 画像とコンテンツを横並びや縦並びにするためのBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column", md: "row" }} //PCでは横並び,SPでは縦並び
        mt={{ md: 6 }}
      >
        <Box
          height={{ md: "100%" }}
          width={{ md: "50%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ xs: 7 }}
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
            mr={{ md: 5 }}
            mt={{ xs: 10 }}
          >
            <Box>
              {aboutMeTitleData.title.map((data) => (
                <Typography
                  key={data}
                  pr={{ xs: 3, md: 8 }}
                  py={{ xs: 0.5, md: 0.8 }}
                  fontSize={{ xs: 12, md: 18 }}
                  letterSpacing={{ xs: 0.2, md: 0.5 }}
                  ml={{ xs: 1 }}
                >
                  {data}
                </Typography>
              ))}
            </Box>
            <Box>
              {aboutMeContentsData.contents.map((data) => (
                <Typography
                  key={data}
                  py={{ xs: 0.5, md: 0.8 }}
                  fontSize={{ xs: 12, md: 18 }}
                  letterSpacing={{ xs: 0.2, md: 0.5 }}
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
    width: 130,
    height: 130,
  },
}));

export default AboutMe;
