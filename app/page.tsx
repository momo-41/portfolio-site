import { Box } from "@mui/material";
import FirstView from "./components/first-view";
import AboutMeView from "./components/about-me-view";
import SkillsView from "./components/skills-view";
import WorksView from "./components/works-view";
import ProfileView from "./components/profile-view";

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
      <AboutMeView />
      <SkillsView />
      <WorksView />
      <ProfileView />
    </Box>
  );
};

export default page;
