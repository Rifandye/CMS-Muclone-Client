import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

export default function DataTable({
  items,
  headers,
}: {
  items: GridRowsProp;
  headers: GridColDef[];
}) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={items} columns={headers} />
    </div>
  );
}
