import { capitalizeFirstLetter } from "@/lib/utils/format";
import { Chip } from "@mui/material";

export default function RoleChip({ value }: { value: string }) {
  let chipColor: "error" | "success" | "info" | "default" = "default";

  if (value === "ADMIN") {
    chipColor = "error";
  } else if (value === "VISITOR") {
    chipColor = "success";
  } else {
    chipColor = "info";
  }

  const formattedValue = capitalizeFirstLetter(value);

  return (
    <Chip
      label={formattedValue}
      color={chipColor}
      size="small"
      variant="outlined"
    />
  );
}
