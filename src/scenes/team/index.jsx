import { Box, Typography } from "@mui/material";

import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlinedIcon";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { LockOpenOutlined } from "@mui/icons-material";
const Team = () => {
  const columns = [
    { field: "id", headerName: "ID" },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60%"}
            m={"0 auto"}
            p={"5px"}
            display={"flex"}
            justifyContent={"center"}
            backgroundColor={
              access === "admin"
                ? "#3da58a"
                : access === "manager"
                ? "#4cceac"
                : "#70d8bd"
            }
            borderRadius={"4px"}
          >
            {access === "admin" && (
              <AdminPanelSettingsOutlined sx={{ color: "white" }} />
            )}
            {access === "manager" && (
              <SecurityOutlined sx={{ color: "white" }} />
            )}
            {access === "user" && <LockOpenOutlined sx={{ color: "white" }} />}
            <Typography color="white" sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m={"20px"}>
      <Box>
        <Header title={"TEAM"} subtitle={"Managing the Team Members"} />
      </Box>
      <Box
        margin={"40px 0 0 0"}
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: "#70d8bd" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#94e2cd",
            color: "#fff",
            borderBottom: "none",
          },
          //   "& .MuiDataGrid-virtualScroller": { backgroundColor: "#1F2A40" },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#94e2cd",
            color: "#fff",
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Team;
