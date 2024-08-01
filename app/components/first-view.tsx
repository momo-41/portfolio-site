"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

const FirstView = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={{ xs: "column", md: "row" }} //PCでは横並び,SPでは縦並び
      pt={{ xs: 7, md: 8 }} //headerに重ならないための余白
      height={{ xs: "78vh", md: "92vh" }} //ここはこれでいいのかConponentでまとめるか
      px={{ md: 12 }}
    >
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
          flexDirection={"column"}
          mb={{ xs: 12, md: 5 }}
        >
          <Typography
            fontSize={{ xs: 28, md: 50 }}
            fontWeight={30}
            letterSpacing={5}
          >
            MOMOKA
          </Typography>
          <Typography fontSize={{ xs: 11, md: 15 }}>
            フロントエンドエンジニア
          </Typography>
        </Box>
      </Box>
      <Box
        height={{ md: "100%" }}
        width={{ md: "50%" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mr={{ md: 3 }}
      >
        <MyPCImage
          width={490}
          height={365}
          src={"/my-pc-picture.jpg"}
          alt={"PC作業中の写真"}
          priority
        />
      </Box>
    </Box>
  );
};

const MyPCImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  borderRadius: 10,
  [theme.breakpoints.down("md")]: {
    width: 280,
    height: 225,
  },
}));

export default FirstView;
