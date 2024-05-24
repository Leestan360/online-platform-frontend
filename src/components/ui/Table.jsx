import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Table = ({ data, columns }) => {
  return (
    <Box sx={{height: "80vh"}} >
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Table;
