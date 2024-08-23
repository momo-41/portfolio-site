import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  timelineItemClasses,
} from "@mui/lab";
import { ProfileData } from "../const/profile-data";

const Profile = () => {
  return (
    <Box
      id={"profile"}
      px={{ xs: 0.5, md: 15 }}
      pb={{ xs: 6, md: 10 }}
      bgcolor={"rgba(210, 210, 210, 0.3)"}
    >
      <Typography
        pt={{ xs: 9, md: 11 }}
        pb={{ xs: 2, md: 7 }}
        textAlign={"center"}
        fontSize={{ xs: 26, md: 47 }}
        letterSpacing={2}
      >
        Profile
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            display: "none",
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.5,
          },
        }}
      >
        {ProfileData.map((data, index) => (
          <TimelineItem key={index}>
            {/* TimelineItemはある一つの時点でのデータを入れるコンポーネントでそれをデータの数だけmapしている */}
            <TimelineOppositeContent fontSize={{ xs: 14, md: 19 }}>
              {data.profileDate}
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* Timelineの点を表示する */}
              <TimelineDot variant="outlined" color="secondary" />
              {/* Timelineの点と点を繋ぐ線の役割 */}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontSize={{ xs: 14, md: 19 }}>
                {data.profileTitle}
              </Typography>
              <Typography
                fontSize={{ xs: 11, md: 15 }}
                pt={0.5}
                color="#646464"
                whiteSpace="pre-line"
                mb={{ xs: 1, md: 3 }}
              >
                {data.profileDescription}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Profile;
