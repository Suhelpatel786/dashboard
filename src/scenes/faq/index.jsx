import { Box, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
const FAQ = () => {
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page"} />

      <Box mt="20px">
        <Accordion defaultExpanded sx={{ backgroundColor: "#70d8bd" }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />} color="white">
            <Typography color="white" variant="h5" fontSize={"18px"}>
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontSize={"18px"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              reiciendis minima vel, nobis non asperiores quisquam ad, aperiam
              suscipit minus sint voluptates ipsam temporibus dolore aliquid
              iste, totam animi voluptatum.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{ backgroundColor: "#70d8bd" }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography color="white" variant="h5" fontSize={"18px"}>
              Another Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"white"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              reiciendis minima vel, nobis non asperiores quisquam ad, aperiam
              suscipit minus sint voluptates ipsam temporibus dolore aliquid
              iste, totam animi voluptatum.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{ backgroundColor: "#70d8bd" }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography color="white" variant="h5" fontSize={"18px"}>
              Your Favorite Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"white"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              reiciendis minima vel, nobis non asperiores quisquam ad, aperiam
              suscipit minus sint voluptates ipsam temporibus dolore aliquid
              iste, totam animi voluptatum.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{ backgroundColor: "#70d8bd" }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography color="white" variant="h5" fontSize={"18px"}>
              Some Randome Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"white"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              reiciendis minima vel, nobis non asperiores quisquam ad, aperiam
              suscipit minus sint voluptates ipsam temporibus dolore aliquid
              iste, totam animi voluptatum.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{ backgroundColor: "#70d8bd" }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography color="white" variant="h5" fontSize={"18px"}>
              Final Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"white"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              reiciendis minima vel, nobis non asperiores quisquam ad, aperiam
              suscipit minus sint voluptates ipsam temporibus dolore aliquid
              iste, totam animi voluptatum.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
