import { Box, Button, IconButton, Typography } from "@mui/material";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadDoneOutlined from "@mui/icons-material/DownloadDoneOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StateBox from "../../components/StateBox";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import GeoGraphyChart from "../../components/GeoGraphyChart";

const Dashboard = () => {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
        <Box>
          <Button
            sx={{
              background: "#868dfb",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadDoneOutlined sx={{ mr: "10px" }} /> Download Reports
          </Button>
        </Box>
      </Box>

      {/* grid  & CHarts */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12,1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* Row1 */}
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          sx={{ background: "#94e2cd" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StateBox
            title={"12,361"}
            subtitle={"Emails Sent"}
            progrss={"0.75"}
            increase={"+40"}
            icon={<EmailIcon sx={{ fontSize: "26px", color: "white" }} />}
          />
        </Box>

        {/* Row1 */}
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          sx={{ background: "#94e2cd" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StateBox
            title={"431,225"}
            subtitle={"Sales Obtained"}
            progrss={"0.5"}
            increase={"+21"}
            icon={<PointOfSaleIcon sx={{ fontSize: "26px", color: "white" }} />}
          />
        </Box>
        {/* Row1 */}
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          sx={{ background: "#94e2cd" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StateBox
            title={"321,441"}
            subtitle={"New Clinets"}
            progrss={"0.30"}
            increase={"+5"}
            icon={<PersonAddIcon sx={{ fontSize: "26px", color: "white" }} />}
          />
        </Box>
        {/* Row1 */}
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          sx={{ background: "#94e2cd" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StateBox
            title={"1,325,134"}
            subtitle={"Traffic Inmount"}
            progrss={"0.85"}
            increase={"+43"}
            icon={<TrafficIcon sx={{ fontSize: "26px", color: "white" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          sx={{ background: "#94e2cd" }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"25px"}
            padding={"0 30px"}
          >
            <Box>
              <Typography
                variant="h5"
                fontSize={"14px"}
                fontWeight={"600"}
                color={"#fff"}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h5"
                fontSize={"14px"}
                fontWeight={"500"}
                color={"#fff"}
              >
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                {" "}
                <DownloadOutlined sx={{ fontSize: "26px", color: "#fff" }} />
              </IconButton>
            </Box>
          </Box>

          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>

          {/* transactions  */}
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ background: "#94e2cd" }}
          overflow={"auto"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={"4px solid white"}
            color={"#fff"}
            padding="15px"
          >
            <Typography variant="h5" fontSize={"14px"} fontWeight={"600"}>
              {" "}
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions?.map((transaction, i) => (
            <Box
              key={i}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"4px solid white"}
              padding="15px"
            >
              <Box>
                <Typography
                  variant="h5"
                  color={"white"}
                  fontSize={"14px"}
                  fontWeight={"600"}
                >
                  {transaction?.txId}
                </Typography>
                <Typography variant="h5" color={"white"} fontSize={"14px"}>
                  {transaction?.user}
                </Typography>
              </Box>

              <Box color={"#fff"}>{transaction?.date}</Box>
              <Box
                sx={{ background: "#535ac8" }}
                padding={"5px 10px"}
                color={"#fff"}
                borderRadius={"4px"}
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* row 3  */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ background: "#94e2cd" }}
          padding={"30px"}
        >
          <Typography
            variant="h5"
            color={"#fff"}
            fontWeight={"600"}
            fontSize={"16px"}
          >
            Campaign
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              fontWeight={"500"}
              fontSize={"16px"}
              mt={"15px"}
              color={"#fff"}
            >
              $48,352 Revenue generated
            </Typography>
            <Typography
              variant="h5"
              fontWeight={"500"}
              color={"#fff"}
              fontSize={"16px"}
            >
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ background: "#94e2cd" }}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            padding={"30px 30px 0 30px"}
            fontSize={"16px"}
            color={"white"}
          >
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt={"-20px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ background: "#94e2cd" }}
          padding={"30px"}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontSize={"16px"}
            color={"#fff"}
            mb={"15px"}
          >
            Geography Based Traffic
          </Typography>
          <Box height={"200px"}>
            <GeoGraphyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
