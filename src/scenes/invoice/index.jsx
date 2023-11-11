import { Box, Typography } from "@mui/material";

import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

const Invoice = () => {
  const columns = [
    { field: "id", headerName: "ID" },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={"#4cceac"}>${params?.row?.cost}</Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m={"20px"}>
      <Box>
        <Header title={"INVOICES"} subtitle={"List of Invoice Balances"} />
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
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Invoice;
