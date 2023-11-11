import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Item = ({ title, to, selected, setSelected, icon }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{ color: "#141414" }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
const SidebarScene = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#f2f0f0 !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          {/* logo and menu icon  */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0px 20px 0px", color: "#141414" }}
          >
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml={"15px"}
              >
                <Typography variant="h5" fontSize={"24px"} color={"#141414"}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER  */}
          {!isCollapsed && (
            <Box mb={"25px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img
                  height={"100px"}
                  width={"100px"}
                  alt="profile-user"
                  src="../../assets/user.jfif"
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                />
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  fontSize={"18px"}
                  fontWeight={"bold"}
                  marginTop={"10px"}
                  color={"#141414"}
                >
                  Suhel Patel
                </Typography>
                <Typography fontSize={"14px"} color={"#4cceac"}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* menu items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title={"Dashboard"}
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={"#3d3d3d"}
              fontSize={"12px"}
              sx={{ m: "15px 0px 5px 20px", fontWeight: "bold" }}
            >
              Data
            </Typography>
            <Item
              title={"Manage Team"}
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Contacts Information"}
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Invoices Balances"}
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              fontSize={"12px"}
              color={"#3d3d3d"}
              sx={{ m: "15px 0px 5px 20px", fontWeight: "bold" }}
            >
              Pages
            </Typography>
            <Item
              title={"Profile Form"}
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Calendar"}
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"FAQ"}
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={"#3d3d3d"}
              fontSize={"12px"}
              sx={{ m: "15px 0px 5px 20px", fontWeight: "bold" }}
            >
              Charts
            </Typography>
            <Item
              title={"Bar Chart"}
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Pie Chart"}
              to="/pie"
              icon={<DonutLargeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Line Chart"}
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Geography Chart"}
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarScene;
