import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHeader } from "@/app/types/base.types";

interface DataTableProps<T> {
  headers: TableHeader[];
  data: T[];
}

export default function DataTable<T extends Record<string, any>>({
  headers,
  data,
}: DataTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, key) => (
              <TableCell align={header.align} key={key}>
                {header.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headers.map((header, cellIndex) => (
                <TableCell key={cellIndex} align={header.align}>
                  {row[header.key as keyof T]}{" "}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
