import { Dialog } from "@mui/material";

export default function Modal({
  open,
  //   selectedValue,
  //   onClose,
}: {
  open: boolean;
  //   selectedValue: string;
  //   onClose: (value: string) => void;
}) {
  //   const handleClose = () => {
  //     onClose(selectedValue);
  //   };

  return (
    <main>
      <Dialog open={open}>
        <div className="tw-w-[600px] tw-h-[750px]">Test</div>
      </Dialog>
    </main>
  );
}
