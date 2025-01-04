import { FormEvent, SyntheticEvent, useState } from "react";
import Modal from "../Modal";
import { MuiFileInput } from "mui-file-input";
import { LoadingButton } from "@mui/lab";
import { uploadThumbnail } from "@/app/actions/merchandise.actions";
import { Snackbar } from "@mui/material";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleChange = (newValue: File | null) => {
    setThumbnail(newValue);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!thumbnail) {
      return;
    }

    setLoading(true);
    try {
      const result = await uploadThumbnail(id, thumbnail);

      if (onClose) onClose();
      setThumbnail(null);
      setOpenSnackbar(true);

      return result;
    } catch (error) {
      console.error(error, "error uploading");
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <main>
      <Modal
        title="Upload Thumbnail"
        open={open}
        onClose={onClose}
        loading={loading}
      >
        <form
          onSubmit={handleSubmit}
          className="tw-flex tw-flex-col tw-h-full tw-mt-5"
        >
          <div className="tw-flex tw-flex-1 tw-flex-col">
            <MuiFileInput
              label="File"
              value={thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="tw-flex tw-justify-end">
            <LoadingButton
              type="submit"
              variant="contained"
              color="error"
              loading={loading}
              disabled={loading}
            >
              Submit
            </LoadingButton>
          </div>
        </form>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Upload Successfull"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </main>
  );
}
