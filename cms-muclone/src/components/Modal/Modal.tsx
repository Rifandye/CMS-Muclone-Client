import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

export default function Modal({
  open,
  children,
  height = "750px",
  width = "600px",
  title,
  onClose,
}: {
  open?: boolean;
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  title: string;
  loading?: boolean;
  onClose?: () => void;
}) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setOpen(true);
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <main>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: typeof height === "number" ? `${height}px` : height,
            width: typeof width === "number" ? `${width}px` : width,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </main>
  );
}
