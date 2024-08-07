"use client";
import { Box, Grid, Link, Typography, styled } from "@mui/material";
import { WorksContentsData } from "../const/works-contents-data";

const WorksView = () => {
  return (
    <Box
      height={{ md: "100vh" }}
      px={{ xs: 6, md: 25 }}
      pb={{ xs: 6, md: 0 }} //md:0を指定しないとxs:6がPC画面でも効いてしまう
      bgcolor={"#FFFFFF"}
    >
      <Typography
        pt={{ xs: 7, md: 12 }}
        pb={{ xs: 5, md: 7 }}
        textAlign={"center"}
        fontSize={{ xs: 26, md: 47 }}
        letterSpacing={2}
      >
        Works
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 6, md: 5 }}
        columnSpacing={{ xs: 1, md: 5 }}
      >
        {WorksContentsData.map((data) => (
          <Grid
            item
            xs={12}
            md={4}
            key={data.worksName}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Link href={data.worksDetail}>
              {/* Linkでページに飛ばすかモーダルで表示させるか */}
              <StyledBox sx={{ backgroundImage: `url(${data.worksImage})` }} />
            </Link>
            <Typography
              pt={{ xs: 1.5, md: 2 }}
              fontSize={{ xs: 14, md: 18 }}
              fontWeight={550}
              letterSpacing={1}
              color="#404040"
            >
              {data.worksName}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  width: 300, //SP画面でもサイズ変えない
  height: 188, //SP画面でもサイズ変えない
  borderRadius: 1,
  boxShadow: "0.5px 2px 5px -2px gray",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transition: "0.8s",
  "&:hover": {
    opacity: 0.5,
    transition: "0.3s",
  },
}));

export default WorksView;
