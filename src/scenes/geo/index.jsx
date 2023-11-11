import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoGraphyChart from "../../components/GeoGraphyChart";

const Geo = () => {
  return (
    <Box m={"20px"}>
      <Header title={"GEO GRAPHY CHART"} subtitle={"Simple Geo Graphy Chart"} />
      <Box mt={"15px"} height={"75vh"} border={"1px solid #e0e0e0"}>
        <GeoGraphyChart />
      </Box>
    </Box>
  );
};

export default Geo;
