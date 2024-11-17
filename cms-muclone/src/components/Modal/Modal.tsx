import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Modal({
  open,
  children,
  height = "750px",
  width = "600px",
  title,
  loading,
  onClose,
  onSubmit,
}: {
  open?: boolean;
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  title: string;
  loading?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
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
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <div
          style={{
            height: typeof height === "number" ? `${height}px` : height,
            width: typeof width === "number" ? `${width}px` : width,
          }}
        >
          <DialogContent>{children}</DialogContent>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button disabled={loading} onClick={onSubmit}>
            Subscribe
          </Button> */}
          <LoadingButton
            loading={loading}
            variant="outlined"
            onClick={onSubmit}
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </main>
  );
}
