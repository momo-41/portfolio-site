"use client";
import { Box, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";
import { skillsCardData } from "../const/skills-card-data";

const SkillsView = () => {
  return (
    <Box
      height={{ xs: "85vh", md: "100vh" }}
      px={{ xs: 6, md: 48 }}
      bgcolor={"#F0F0F0"}
    >
      <Typography
        pt={{ xs: 10, md: 18 }}
        pb={{ xs: 6, md: 8 }}
        textAlign={"center"}
        fontSize={{ xs: 26, md: 47 }}
        letterSpacing={2}
      >
        Skills
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 4, md: 5 }}
        columnSpacing={{ xs: 1, md: 5 }}
      >
        {skillsCardData.map((data) => (
          <Grid
            item
            xs={6}
            md={4}
            key={data.skillsName}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              width={{ xs: 123, md: 175 }}
              height={{ xs: 130, md: 188 }}
              borderRadius={1.5}
              bgcolor={"#FFFFFF"}
              boxShadow={"-1px 1px 5px -2px gray"}
            >
              <SkillsImage
                width={77}
                height={77}
                src={data.skillsImage}
                alt={"プログラミングスキル"}
              />
              <Typography
                pt={{ xs: 1.5, md: 2 }}
                fontSize={{ xs: 14, md: 18 }}
                fontWeight={550}
                letterSpacing={1}
                color="#404040"
              >
                {data.skillsName}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SkillsImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: 55,
    height: 55,
  },
}));

export default SkillsView;
