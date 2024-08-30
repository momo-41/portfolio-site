"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import { aboutMeData } from "../const/about-me-data";

const AboutMeView = () => {
  return (
    <Box
      id={"about-me"}
      height={{ xs: "85vh", md: "100vh" }}
      px={{ md: 15 }}
      bgcolor={"#FFFFFF"}
    >
      <Typography
        pt={{ xs: 13, md: 20 }}
        textAlign={"center"}
        fontSize={{ xs: 26, md: 47 }}
        letterSpacing={2}
      >
        About me
      </Typography>
      <Box // 画像と文字を横並びや縦並びにするためのBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column", md: "row" }} //PCでは横並び,SPでは縦並び
        mt={{ md: 5 }}
      >
        <Box
          height={{ md: "100%" }}
          width={{ md: "50%" }}
          display={"flex"} //画像を画面の左半分の中央に
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ xs: 7 }}
        >
          <MyVsignImage
            width={290}
            height={290}
            src={"/my-picture/my-v-sign-picture.jpg"}
            alt={"PC作業中の写真"}
            priority
          />
        </Box>
        <Box
          height={{ md: "100%" }}
          width={{ md: "50%" }}
          display={"flex"} //文字を画面の右半分の中央に
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"} //要素を縦並びに
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={{ xs: 10 }}
            mr={{ md: 5 }}
            ml={{ xs: 2 }}
          >
            <Box>
              {aboutMeData.title.map((data) => (
                <Typography
                  key={data}
                  ml={{ xs: 1 }}
                  py={{ xs: 0.5, md: 0.8 }}
                  pr={{ xs: 3, md: 8 }}
                  fontSize={{ xs: 12, md: 18 }}
                  letterSpacing={{ xs: 0.2, md: 0.5 }}
                >
                  {data}
                </Typography>
              ))}
            </Box>
            <Box>
              {aboutMeData.contents.map((data) => (
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

export default AboutMeView;
