import { Box, IconButton, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      px={{ xs: 5, md: 22 }}
      py={6}
      bgcolor={"#DBDBDB"}
    >
      <Typography pb={1} fontSize={{ xs: 11, md: 16 }}>
        最後までご覧いただきありがとうございました
      </Typography>
      <Box flexDirection={"column-reverse"}>
        <IconButton aria-label="x" sx={{ md: 1 }}>
          <XIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="github">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Typography fontSize={{ xs: 10, md: 12 }} mt={1}>
        © 2024 Momoka Ishii
      </Typography>
    </Box>
  );
};

export default Footer;
