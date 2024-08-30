"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

const FirstView = () => {
  return (
    <Box
      id={"home"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={{ xs: "column", md: "row" }} //PCでは横並び,SPでは縦並び
      height={{ xs: "85vh", md: "100vh" }}
      px={{ md: 15 }}
    >
      <Box
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
          mb={{ xs: 10, md: 4 }}
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
        width={{ md: "50%" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <MyPCImage
          width={490}
          height={365}
          src={"/my-picture/my-pc-picture.jpg"}
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
