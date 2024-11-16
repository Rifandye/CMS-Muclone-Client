import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default function DataTable({
  rows,
  columns,
  loading,
}: {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
}) {
  return <DataGrid rows={rows} columns={columns} loading={loading} />;
}
