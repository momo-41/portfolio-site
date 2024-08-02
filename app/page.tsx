import { Box } from "@mui/material";
import FirstView from "./components/first-view";
import AboutMe from "./components/about-me";

const page = () => {
  return (
    <Box
      height={{ xs: "85vh", md: "100vh" }}
      sx={{
        backgroundImage: `url("white-background-image-large.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed", //second-viewを作ったら入れてみる
      }}
    >
      <FirstView />
      <AboutMe />
    </Box>
  );
};

export default page;
