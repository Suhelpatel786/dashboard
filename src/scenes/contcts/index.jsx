import { Box, Typography } from "@mui/material";

import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";

const Contact = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },

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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zipcode",
      flex: 1,
    },
  ];

  return (
    <Box m={"20px"}>
      <Box>
        <Header
          title={"CONTACTS"}
          subtitle={"List of Contacts for Future Reference  "}
        />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#000 !important",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
