import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

const StateBox = ({ title, subtitle, progrss, icon, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize={"16px"}
            sx={{ color: "#fff" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progrss} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
        mt="2px"
      >
        <Typography fontSize={"14px"} variant="h5" sx={{ color: "#fff" }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontSize={"14px"}
          fontStyle="italic"
          sx={{ color: "#fff" }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StateBox;
