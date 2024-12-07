import { useState } from "react";
import Modal from "../Modal";
import { MuiFileInput } from "mui-file-input";
import { LoadingButton } from "@mui/lab";

export default function UpdateThumbnail({
  id,
  open,
  onClose,
}: {
  id: string;
  open?: boolean;
  onClose?: () => void;
}) {
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleChange = (newValue: File | null) => {
    setThumbnail(newValue);
  };

  console.log(id);

  return (
    <main>
      <Modal title="Upload Thumbnail" open={open} onClose={onClose}>
        <form className="tw-flex tw-flex-col tw-h-full tw-mt-5">
          <div className="tw-flex tw-flex-1 tw-flex-col">
            <MuiFileInput
              label="File"
              value={thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="tw-flex tw-justify-end">
            <LoadingButton type="submit" variant="contained" color="error">
              Submit
            </LoadingButton>
          </div>
        </form>
      </Modal>
    </main>
  );
}
