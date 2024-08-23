import FirstView from "./components/first-view";
import AboutMeView from "./components/about-me-view";
import SkillsView from "./components/skills-view";
import WorksView from "./components/works-view";
import ProfileView from "./components/profile-view";
import MessageView from "./components/message-view";
import { Box } from "@mui/material";

const page = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("/background/white-background-image-large.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <FirstView />
        <AboutMeView />
        <SkillsView />
        <WorksView />
        <ProfileView />
        <MessageView />
      </Box>
    </>
  );
};

export default page;
