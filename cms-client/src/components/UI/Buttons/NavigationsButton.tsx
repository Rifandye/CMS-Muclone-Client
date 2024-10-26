import { Storefront } from "@mui/icons-material";

export default function NavigationButton({
  isHovered,
  title,
}: {
  isHovered: boolean;
  title: string;
}) {
  return (
    <div
      className={`bg-gray-300 rounded-md p-1 flex hover:bg-gray-400 items-center justify-center gap-4 cursor-pointer ${
        isHovered ? "" : "justify-center"
      }`}
    >
      <Storefront />
      <p style={{ display: isHovered ? "block" : "none" }}>{title}</p>
    </div>
  );
}
