"use client";
import { Box, Typography } from "@mui/material";

const MessageView = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={{ xs: "85vh", md: "100vh" }}
      px={{ xs: 6, md: 25 }}
      pb={{ xs: 6, md: 0 }} //md:0を指定しないとxs:6がPC画面でも効いてしまう
      bgcolor={"#FFFFFF"}
    >
      <Typography
        pt={{ xs: 0, md: 1 }}
        pb={{ xs: 10, md: 7 }}
        fontSize={{ xs: 26, md: 47 }}
        letterSpacing={2}
      >
        Message
      </Typography>
      <Box
        px={{ xs: 20, md: 54 }}
        pt={{ xs: 28, md: 37 }}
        pb={{ xs: 17, md: 20 }}
        bgcolor={"#E7E7E7"}
      ></Box>
    </Box>
  );
};

export default MessageView;
