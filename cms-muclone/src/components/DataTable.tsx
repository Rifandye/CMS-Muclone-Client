import { BasePaginationResponse } from "@/lib/types/base.types";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function DataTable({
  rows,
  columns,
  loading,
  paginationModeProp,
  paginationModel,
  onPaginationModelChange,
  onRowClick,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: BasePaginationResponse<unknown>;
  columns: GridColDef[];
  loading: boolean;
  paginationModeProp: "server" | "client";
  paginationModel: { page: number; pageSize: number };
  onPaginationModelChange: (newPagination: {
    page: number;
    pageSize: number;
  }) => void;
  onRowClick?: (params: { row: unknown }) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataRow, setRow] = useState<GridRowsProp | any>([]);
  const [rowCount, setRowCount] = useState<number>(0);

  useEffect(() => {
    setRow(rows?.data || []);
    setRowCount(rows?.totalItems || 0);
  }, [rows]);

  return (
    <DataGrid
      paginationMode={paginationModeProp}
      pagination
      rows={dataRow}
      columns={columns}
      loading={loading}
      rowCount={rowCount}
      paginationModel={paginationModel}
      pageSizeOptions={[5, 10, 20, 50]}
      onPaginationModelChange={(newModel) => {
        onPaginationModelChange(newModel);
      }}
      onRowClick={onRowClick}
      sx={{
        height: "100%",
        backgroundColor: "#f5f5f5",
        "& .MuiDataGrid-cell": {
          color: "#333",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#e0e0e0",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: "#fafafa",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    />
  );
}
