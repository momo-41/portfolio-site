import FirstView from "./components/first-view";
import AboutMeView from "./components/about-me-view";
import SkillsView from "./components/skills-view";
import WorksView from "./components/works-view";
import ProfileView from "./components/profile-view";
import MessageView from "./components/message-view";

const page = () => {
  return (
    <>
      <FirstView />
      <AboutMeView />
      <SkillsView />
      <WorksView />
      <ProfileView />
      <MessageView />
    </>
  );
};

export default page;
