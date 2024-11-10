import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default function DataTable({
  rows,
  columns,
}: {
  rows: GridRowsProp;
  columns: GridColDef[];
}) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
