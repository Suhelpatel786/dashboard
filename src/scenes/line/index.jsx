import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box margin={"20px"}>
      <Header title={"LINE CHART"} subtitle={"Simple Line Chart"} />

      <Box mt={"5px"} height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
