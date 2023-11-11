import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        fontSize={"30px"}
        color={"#141414"}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" fontSize={"15px"} color={"#3da58a"}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
